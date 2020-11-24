import { ApolloClient, InMemoryCache } from '@apollo/client';
import { relayStylePagination } from "@apollo/client/utilities";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        comments: relayStylePagination(),
      },
    },
  },
});

const ClientConnector = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: cache
});

export default ClientConnector;
