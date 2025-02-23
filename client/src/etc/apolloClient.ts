import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: `${process.env.NODE_APP_API_URL}/graphql`,
  cache: new InMemoryCache(),
});

export default apolloClient;
