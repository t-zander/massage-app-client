import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import { HttpLink } from "apollo-boost";

export function withApollo(PageComponent) {
  /* We may already have apolloClient, apolloState */
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
    const client = apolloClient || initApolloClient(apolloState);

    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    );
  };

  /* For server side */
  if (PageComponent.getInitialProps) {
    console.log("GET INITIAL PROPS");
    WithApollo.getInitialProps = async ctx => {
      console.log(ctx);
      const { AppTree } = ctx;
      const apolloClient = (ctx.apolloClient = initApolloClient());

      let pageProps = {};
      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      }

      if (typeof window === "undefined") {
        if (context.res && context.res.finished) {
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

      const state = apolloClient.cache.extract();
      return {
        ...pageProps,
        state
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
