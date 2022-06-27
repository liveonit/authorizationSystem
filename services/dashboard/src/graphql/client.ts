import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client';

import { setContext } from '@apollo/link-context';
import { onError } from '@apollo/client/link/error';
import { getToken } from '@utils/Auth/helpers';
import { cache } from './cache';

const loc = window.location;

const httpLink = new HttpLink({
  uri: `${loc.protocol}//${loc.host}/graphql`,
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.error('[GraphQL error]: ', {
        message,
        locations,
        path,
      }),
    );

  if (networkError) console.error(`[Network error]: ${networkError}`);
});

const authLink = setContext(async (_, { headers }) => {
  const token = await getToken();
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

let clientAux: ApolloClient<NormalizedCacheObject>;
if (window.location.pathname !== '/login') {
  clientAux = new ApolloClient({
    link: errorLink.concat(authLink.concat(httpLink)),
    cache,
  });
} else {
  clientAux = new ApolloClient({
    link: errorLink.concat(httpLink),
    cache,
  });
}
export const client = clientAux;
