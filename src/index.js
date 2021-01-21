import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import React from "react";
import App from "./components/App";

const client = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

export const SampleSearch = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};
