import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import { HttpLink } from "apollo-boost";

export function withApollo(PageComponent) {
  /* Comes from getInitialProps */
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
    const client = apolloClient || initApolloClient(apolloState);

    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    );
  };

  if (PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async ctx => {
      const { AppTree } = ctx;
      const apolloClient = (ctx.apolloClient = initApolloClient());

      let pageProps = {};
      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      }

      /* For server side */
      if (typeof window === "undefined") {
        if (ctx.res && ctx.res.finished) {
          return pageProps;
        }

        try {
          const { getDataFromTree } = await import("@apollo/react-ssr");
          await getDataFromTree(
            <AppTree pageProps={{ ...pageProps, apolloClient }} />
          );
        } catch (error) {
          console.log("error", error);
        }

        Head.rewind();
      }

      const apolloState = apolloClient.cache.extract();
      return {
        ...pageProps,
        apolloState
      };
    };
  }

  return WithApollo;
}

function initApolloClient(initialState = {}) {
  const ssrMode = typeof window === "undefined";
  const cache = new InMemoryCache().restore(initialState);
  return new ApolloClient({
    link: new HttpLink({
      uri: "http://localhost:8000/api/graphql"
    }),
    cache,
    fetch,
    ssrMode
  });
}
