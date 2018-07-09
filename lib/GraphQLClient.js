import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import { persistCache } from 'apollo-cache-persist';
import { AsyncStorage } from 'react-native';

const cache = new InMemoryCache({
  dataIdFromObject: object => {
    switch (object.__typename) {
      case 'foo':
        return object.id; // use `key` as the primary key
      case 'bar':
        return `bar:${object.blah}`; // use `bar` prefix and `blah` as the primary key
      default:
        return defaultDataIdFromObject(object); // fall back to default handling
    }
  },
});

// Set up cache persistence.
persistCache({
  cache,
  storage: AsyncStorage,
});

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql',
      credentials: 'same-origin'
    })
  ]),
  cache
});

export default client;