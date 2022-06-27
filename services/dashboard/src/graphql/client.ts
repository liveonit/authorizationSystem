import { ApolloClient, HttpLink, split } from '@apollo/client';

import { getMainDefinition } from '@apollo/client/utilities';
import { setContext } from '@apollo/link-context';
import { onError } from '@apollo/client/link/error';
import { getToken } from '@utils/Auth/token';
import { cache } from './cache';

const loc = window.location;

const httpLink = new HttpLink({
  uri: `${loc.protocol}//${loc.host}/graphql`,
});

const link = split(({ query }) => {
  const definition = getMainDefinition(query);
  return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
}, httpLink);

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
      authorization: token,
    },
  };
});

let clientAux;
if (window.location.pathname !== '/login') {
  clientAux = new ApolloClient({
    link: errorLink.concat(authLink.concat(link)),
    cache,
  });
} else {
  clientAux = new ApolloClient({
    link: errorLink.concat(link),
    cache,
  });
}
export const client = clientAux;
