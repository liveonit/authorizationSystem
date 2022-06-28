import { ApolloClient, HttpLink } from '@apollo/client';

import { setContext } from '@apollo/link-context';
import { onError } from '@apollo/client/link/error';
import { getToken } from '@utils/Auth/helpers';
import { cache } from './cache';

const loc = window.location;
const OPERATIONS_WITHOUT_TOKEN = ['Login', 'RefreshToken'];

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

const authLink = setContext(async (ctx, { headers }) => {
  console.log({ opName: ctx.operationName });
  if (ctx.operationName && !OPERATIONS_WITHOUT_TOKEN.includes(ctx.operationName)) {
    const token = await getToken();
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    };
  } else return { headers };
});

export const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(httpLink)),
  cache,
});
