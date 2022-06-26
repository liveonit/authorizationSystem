import {InMemoryCache} from '@apollo/client';

export const cache = new InMemoryCache({
  typePolicies: {
    SystemError: {
      keyFields: ['message'],
    },
  }
});
