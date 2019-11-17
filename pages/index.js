import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import { withApollo } from "../lib/apollo";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_COMMENTS = gql`
  {
    comments {
      author
      content
    }
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(GET_COMMENTS);

  console.log({ data, loading, error });
  return <div>hello massage app</div>;
};

export default withApollo(Home);
