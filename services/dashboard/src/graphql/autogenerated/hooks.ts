import * as Types from './operations';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const GetAuthorsDocument = gql`
  query GetAuthors {
    authors {
      id
      name
      age
      country
    }
  }
`;

/**
 * __useGetAuthorsQuery__
 *
 * To run a query within a React component, call `useGetAuthorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuthorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuthorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAuthorsQuery(
  baseOptions?: Apollo.QueryHookOptions<Types.GetAuthorsQuery, Types.GetAuthorsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.GetAuthorsQuery, Types.GetAuthorsQueryVariables>(
    GetAuthorsDocument,
    options,
  );
}
export function useGetAuthorsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.GetAuthorsQuery, Types.GetAuthorsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.GetAuthorsQuery, Types.GetAuthorsQueryVariables>(
    GetAuthorsDocument,
    options,
  );
}
export type GetAuthorsQueryHookResult = ReturnType<typeof useGetAuthorsQuery>;
export type GetAuthorsLazyQueryHookResult = ReturnType<typeof useGetAuthorsLazyQuery>;
export type GetAuthorsQueryResult = Apollo.QueryResult<
  Types.GetAuthorsQuery,
  Types.GetAuthorsQueryVariables
>;
export const GetAuthorDocument = gql`
  query GetAuthor($id: Int!) {
    author(id: $id) {
      id
      name
      age
      country
    }
  }
`;

/**
 * __useGetAuthorQuery__
 *
 * To run a query within a React component, call `useGetAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuthorQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAuthorQuery(
  baseOptions: Apollo.QueryHookOptions<Types.GetAuthorQuery, Types.GetAuthorQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.GetAuthorQuery, Types.GetAuthorQueryVariables>(
    GetAuthorDocument,
    options,
  );
}
export function useGetAuthorLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.GetAuthorQuery, Types.GetAuthorQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.GetAuthorQuery, Types.GetAuthorQueryVariables>(
    GetAuthorDocument,
    options,
  );
}
export type GetAuthorQueryHookResult = ReturnType<typeof useGetAuthorQuery>;
export type GetAuthorLazyQueryHookResult = ReturnType<typeof useGetAuthorLazyQuery>;
export type GetAuthorQueryResult = Apollo.QueryResult<
  Types.GetAuthorQuery,
  Types.GetAuthorQueryVariables
>;
export const CreateAuthorDocument = gql`
  mutation CreateAuthor($name: String!, $age: Int!, $country: String) {
    createAuthor(data: { name: $name, age: $age, country: $country }) {
      id
      age
      name
      country
    }
  }
`;
export type CreateAuthorMutationFn = Apollo.MutationFunction<
  Types.CreateAuthorMutation,
  Types.CreateAuthorMutationVariables
>;

/**
 * __useCreateAuthorMutation__
 *
 * To run a mutation, you first call `useCreateAuthorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAuthorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAuthorMutation, { data, loading, error }] = useCreateAuthorMutation({
 *   variables: {
 *      name: // value for 'name'
 *      age: // value for 'age'
 *      country: // value for 'country'
 *   },
 * });
 */
export function useCreateAuthorMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.CreateAuthorMutation,
    Types.CreateAuthorMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.CreateAuthorMutation, Types.CreateAuthorMutationVariables>(
    CreateAuthorDocument,
    options,
  );
}
export type CreateAuthorMutationHookResult = ReturnType<typeof useCreateAuthorMutation>;
export type CreateAuthorMutationResult = Apollo.MutationResult<Types.CreateAuthorMutation>;
export type CreateAuthorMutationOptions = Apollo.BaseMutationOptions<
  Types.CreateAuthorMutation,
  Types.CreateAuthorMutationVariables
>;
export const UpdateAuthorDocument = gql`
  mutation UpdateAuthor($id: Int!, $name: String, $age: Int, $country: String) {
    updateAuthor(data: { name: $name, age: $age, country: $country }, id: $id) {
      id
      age
      name
      country
    }
  }
`;
export type UpdateAuthorMutationFn = Apollo.MutationFunction<
  Types.UpdateAuthorMutation,
  Types.UpdateAuthorMutationVariables
>;

/**
 * __useUpdateAuthorMutation__
 *
 * To run a mutation, you first call `useUpdateAuthorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAuthorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAuthorMutation, { data, loading, error }] = useUpdateAuthorMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      age: // value for 'age'
 *      country: // value for 'country'
 *   },
 * });
 */
export function useUpdateAuthorMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.UpdateAuthorMutation,
    Types.UpdateAuthorMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.UpdateAuthorMutation, Types.UpdateAuthorMutationVariables>(
    UpdateAuthorDocument,
    options,
  );
}
export type UpdateAuthorMutationHookResult = ReturnType<typeof useUpdateAuthorMutation>;
export type UpdateAuthorMutationResult = Apollo.MutationResult<Types.UpdateAuthorMutation>;
export type UpdateAuthorMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateAuthorMutation,
  Types.UpdateAuthorMutationVariables
>;
export const DeleteAuthorDocument = gql`
  mutation DeleteAuthor($id: Int!) {
    deleteAuthor(id: $id)
  }
`;
export type DeleteAuthorMutationFn = Apollo.MutationFunction<
  Types.DeleteAuthorMutation,
  Types.DeleteAuthorMutationVariables
>;

/**
 * __useDeleteAuthorMutation__
 *
 * To run a mutation, you first call `useDeleteAuthorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAuthorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAuthorMutation, { data, loading, error }] = useDeleteAuthorMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAuthorMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.DeleteAuthorMutation,
    Types.DeleteAuthorMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.DeleteAuthorMutation, Types.DeleteAuthorMutationVariables>(
    DeleteAuthorDocument,
    options,
  );
}
export type DeleteAuthorMutationHookResult = ReturnType<typeof useDeleteAuthorMutation>;
export type DeleteAuthorMutationResult = Apollo.MutationResult<Types.DeleteAuthorMutation>;
export type DeleteAuthorMutationOptions = Apollo.BaseMutationOptions<
  Types.DeleteAuthorMutation,
  Types.DeleteAuthorMutationVariables
>;
export const GetBooksDocument = gql`
  query GetBooks {
    books {
      id
      title
      isPublished
      author {
        id
        name
      }
    }
  }
`;

/**
 * __useGetBooksQuery__
 *
 * To run a query within a React component, call `useGetBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBooksQuery(
  baseOptions?: Apollo.QueryHookOptions<Types.GetBooksQuery, Types.GetBooksQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.GetBooksQuery, Types.GetBooksQueryVariables>(
    GetBooksDocument,
    options,
  );
}
export function useGetBooksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.GetBooksQuery, Types.GetBooksQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.GetBooksQuery, Types.GetBooksQueryVariables>(
    GetBooksDocument,
    options,
  );
}
export type GetBooksQueryHookResult = ReturnType<typeof useGetBooksQuery>;
export type GetBooksLazyQueryHookResult = ReturnType<typeof useGetBooksLazyQuery>;
export type GetBooksQueryResult = Apollo.QueryResult<
  Types.GetBooksQuery,
  Types.GetBooksQueryVariables
>;
export const GetBooksAndAuthorsDocument = gql`
  query GetBooksAndAuthors {
    books {
      id
      title
      isPublished
      authorId
      author {
        id
        name
      }
    }
    authors {
      id
      name
    }
  }
`;

/**
 * __useGetBooksAndAuthorsQuery__
 *
 * To run a query within a React component, call `useGetBooksAndAuthorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBooksAndAuthorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBooksAndAuthorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBooksAndAuthorsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetBooksAndAuthorsQuery,
    Types.GetBooksAndAuthorsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.GetBooksAndAuthorsQuery, Types.GetBooksAndAuthorsQueryVariables>(
    GetBooksAndAuthorsDocument,
    options,
  );
}
export function useGetBooksAndAuthorsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetBooksAndAuthorsQuery,
    Types.GetBooksAndAuthorsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.GetBooksAndAuthorsQuery, Types.GetBooksAndAuthorsQueryVariables>(
    GetBooksAndAuthorsDocument,
    options,
  );
}
export type GetBooksAndAuthorsQueryHookResult = ReturnType<typeof useGetBooksAndAuthorsQuery>;
export type GetBooksAndAuthorsLazyQueryHookResult = ReturnType<
  typeof useGetBooksAndAuthorsLazyQuery
>;
export type GetBooksAndAuthorsQueryResult = Apollo.QueryResult<
  Types.GetBooksAndAuthorsQuery,
  Types.GetBooksAndAuthorsQueryVariables
>;
export const GetBookDocument = gql`
  query GetBook($id: Int!) {
    book(id: $id) {
      id
      title
      isPublished
      authorId
      author {
        id
        name
      }
    }
  }
`;

/**
 * __useGetBookQuery__
 *
 * To run a query within a React component, call `useGetBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBookQuery(
  baseOptions: Apollo.QueryHookOptions<Types.GetBookQuery, Types.GetBookQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.GetBookQuery, Types.GetBookQueryVariables>(GetBookDocument, options);
}
export function useGetBookLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.GetBookQuery, Types.GetBookQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.GetBookQuery, Types.GetBookQueryVariables>(
    GetBookDocument,
    options,
  );
}
export type GetBookQueryHookResult = ReturnType<typeof useGetBookQuery>;
export type GetBookLazyQueryHookResult = ReturnType<typeof useGetBookLazyQuery>;
export type GetBookQueryResult = Apollo.QueryResult<
  Types.GetBookQuery,
  Types.GetBookQueryVariables
>;
export const CreateBookDocument = gql`
  mutation CreateBook($title: String!, $isPublished: Boolean, $authorId: Int!) {
    createBook(data: { title: $title, isPublished: $isPublished, authorId: $authorId }) {
      id
      title
      isPublished
      author {
        id
        name
      }
    }
  }
`;
export type CreateBookMutationFn = Apollo.MutationFunction<
  Types.CreateBookMutation,
  Types.CreateBookMutationVariables
>;

/**
 * __useCreateBookMutation__
 *
 * To run a mutation, you first call `useCreateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookMutation, { data, loading, error }] = useCreateBookMutation({
 *   variables: {
 *      title: // value for 'title'
 *      isPublished: // value for 'isPublished'
 *      authorId: // value for 'authorId'
 *   },
 * });
 */
export function useCreateBookMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.CreateBookMutation,
    Types.CreateBookMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.CreateBookMutation, Types.CreateBookMutationVariables>(
    CreateBookDocument,
    options,
  );
}
export type CreateBookMutationHookResult = ReturnType<typeof useCreateBookMutation>;
export type CreateBookMutationResult = Apollo.MutationResult<Types.CreateBookMutation>;
export type CreateBookMutationOptions = Apollo.BaseMutationOptions<
  Types.CreateBookMutation,
  Types.CreateBookMutationVariables
>;
export const UpdateBookDocument = gql`
  mutation UpdateBook($id: Int!, $title: String, $isPublished: Boolean, $authorId: Int) {
    updateBook(data: { title: $title, isPublished: $isPublished, authorId: $authorId }, id: $id) {
      id
      title
      isPublished
      author {
        id
        name
      }
    }
  }
`;
export type UpdateBookMutationFn = Apollo.MutationFunction<
  Types.UpdateBookMutation,
  Types.UpdateBookMutationVariables
>;

/**
 * __useUpdateBookMutation__
 *
 * To run a mutation, you first call `useUpdateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBookMutation, { data, loading, error }] = useUpdateBookMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      isPublished: // value for 'isPublished'
 *      authorId: // value for 'authorId'
 *   },
 * });
 */
export function useUpdateBookMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.UpdateBookMutation,
    Types.UpdateBookMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.UpdateBookMutation, Types.UpdateBookMutationVariables>(
    UpdateBookDocument,
    options,
  );
}
export type UpdateBookMutationHookResult = ReturnType<typeof useUpdateBookMutation>;
export type UpdateBookMutationResult = Apollo.MutationResult<Types.UpdateBookMutation>;
export type UpdateBookMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateBookMutation,
  Types.UpdateBookMutationVariables
>;
export const DeleteBookDocument = gql`
  mutation DeleteBook($id: Int!) {
    deleteBook(id: $id)
  }
`;
export type DeleteBookMutationFn = Apollo.MutationFunction<
  Types.DeleteBookMutation,
  Types.DeleteBookMutationVariables
>;

/**
 * __useDeleteBookMutation__
 *
 * To run a mutation, you first call `useDeleteBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBookMutation, { data, loading, error }] = useDeleteBookMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBookMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.DeleteBookMutation,
    Types.DeleteBookMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.DeleteBookMutation, Types.DeleteBookMutationVariables>(
    DeleteBookDocument,
    options,
  );
}
export type DeleteBookMutationHookResult = ReturnType<typeof useDeleteBookMutation>;
export type DeleteBookMutationResult = Apollo.MutationResult<Types.DeleteBookMutation>;
export type DeleteBookMutationOptions = Apollo.BaseMutationOptions<
  Types.DeleteBookMutation,
  Types.DeleteBookMutationVariables
>;
export const GetPermissionsDocument = gql`
  query getPermissions {
    permissions {
      id
      name
      description
    }
  }
`;

/**
 * __useGetPermissionsQuery__
 *
 * To run a query within a React component, call `useGetPermissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPermissionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPermissionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPermissionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetPermissionsQuery,
    Types.GetPermissionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.GetPermissionsQuery, Types.GetPermissionsQueryVariables>(
    GetPermissionsDocument,
    options,
  );
}
export function useGetPermissionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetPermissionsQuery,
    Types.GetPermissionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.GetPermissionsQuery, Types.GetPermissionsQueryVariables>(
    GetPermissionsDocument,
    options,
  );
}
export type GetPermissionsQueryHookResult = ReturnType<typeof useGetPermissionsQuery>;
export type GetPermissionsLazyQueryHookResult = ReturnType<typeof useGetPermissionsLazyQuery>;
export type GetPermissionsQueryResult = Apollo.QueryResult<
  Types.GetPermissionsQuery,
  Types.GetPermissionsQueryVariables
>;
export const GetPermissionDocument = gql`
  query getPermission($id: String!) {
    permission(id: $id) {
      id
      name
      description
    }
  }
`;

/**
 * __useGetPermissionQuery__
 *
 * To run a query within a React component, call `useGetPermissionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPermissionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPermissionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPermissionQuery(
  baseOptions: Apollo.QueryHookOptions<Types.GetPermissionQuery, Types.GetPermissionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.GetPermissionQuery, Types.GetPermissionQueryVariables>(
    GetPermissionDocument,
    options,
  );
}
export function useGetPermissionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetPermissionQuery,
    Types.GetPermissionQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.GetPermissionQuery, Types.GetPermissionQueryVariables>(
    GetPermissionDocument,
    options,
  );
}
export type GetPermissionQueryHookResult = ReturnType<typeof useGetPermissionQuery>;
export type GetPermissionLazyQueryHookResult = ReturnType<typeof useGetPermissionLazyQuery>;
export type GetPermissionQueryResult = Apollo.QueryResult<
  Types.GetPermissionQuery,
  Types.GetPermissionQueryVariables
>;
export const CreatePermissionDocument = gql`
  mutation createPermission($name: String!, $description: String) {
    createPermission(data: { name: $name, description: $description }) {
      id
      name
      description
    }
  }
`;
export type CreatePermissionMutationFn = Apollo.MutationFunction<
  Types.CreatePermissionMutation,
  Types.CreatePermissionMutationVariables
>;

/**
 * __useCreatePermissionMutation__
 *
 * To run a mutation, you first call `useCreatePermissionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePermissionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPermissionMutation, { data, loading, error }] = useCreatePermissionMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreatePermissionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.CreatePermissionMutation,
    Types.CreatePermissionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Types.CreatePermissionMutation,
    Types.CreatePermissionMutationVariables
  >(CreatePermissionDocument, options);
}
export type CreatePermissionMutationHookResult = ReturnType<typeof useCreatePermissionMutation>;
export type CreatePermissionMutationResult = Apollo.MutationResult<Types.CreatePermissionMutation>;
export type CreatePermissionMutationOptions = Apollo.BaseMutationOptions<
  Types.CreatePermissionMutation,
  Types.CreatePermissionMutationVariables
>;
export const UpdatePermissionDocument = gql`
  mutation updatePermission($id: String!, $name: String!, $description: String) {
    updatePermission(data: { id: $id, name: $name, description: $description }) {
      id
      name
      description
    }
  }
`;
export type UpdatePermissionMutationFn = Apollo.MutationFunction<
  Types.UpdatePermissionMutation,
  Types.UpdatePermissionMutationVariables
>;

/**
 * __useUpdatePermissionMutation__
 *
 * To run a mutation, you first call `useUpdatePermissionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePermissionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePermissionMutation, { data, loading, error }] = useUpdatePermissionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useUpdatePermissionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.UpdatePermissionMutation,
    Types.UpdatePermissionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Types.UpdatePermissionMutation,
    Types.UpdatePermissionMutationVariables
  >(UpdatePermissionDocument, options);
}
export type UpdatePermissionMutationHookResult = ReturnType<typeof useUpdatePermissionMutation>;
export type UpdatePermissionMutationResult = Apollo.MutationResult<Types.UpdatePermissionMutation>;
export type UpdatePermissionMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdatePermissionMutation,
  Types.UpdatePermissionMutationVariables
>;
export const DeletePermissionDocument = gql`
  mutation deletePermission($id: String!) {
    deletePermission(id: $id)
  }
`;
export type DeletePermissionMutationFn = Apollo.MutationFunction<
  Types.DeletePermissionMutation,
  Types.DeletePermissionMutationVariables
>;

/**
 * __useDeletePermissionMutation__
 *
 * To run a mutation, you first call `useDeletePermissionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePermissionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePermissionMutation, { data, loading, error }] = useDeletePermissionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePermissionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.DeletePermissionMutation,
    Types.DeletePermissionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Types.DeletePermissionMutation,
    Types.DeletePermissionMutationVariables
  >(DeletePermissionDocument, options);
}
export type DeletePermissionMutationHookResult = ReturnType<typeof useDeletePermissionMutation>;
export type DeletePermissionMutationResult = Apollo.MutationResult<Types.DeletePermissionMutation>;
export type DeletePermissionMutationOptions = Apollo.BaseMutationOptions<
  Types.DeletePermissionMutation,
  Types.DeletePermissionMutationVariables
>;
export const GetRolesDocument = gql`
  query GetRoles {
    roles {
      id
      name
      description
    }
  }
`;

/**
 * __useGetRolesQuery__
 *
 * To run a query within a React component, call `useGetRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRolesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRolesQuery(
  baseOptions?: Apollo.QueryHookOptions<Types.GetRolesQuery, Types.GetRolesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.GetRolesQuery, Types.GetRolesQueryVariables>(
    GetRolesDocument,
    options,
  );
}
export function useGetRolesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.GetRolesQuery, Types.GetRolesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.GetRolesQuery, Types.GetRolesQueryVariables>(
    GetRolesDocument,
    options,
  );
}
export type GetRolesQueryHookResult = ReturnType<typeof useGetRolesQuery>;
export type GetRolesLazyQueryHookResult = ReturnType<typeof useGetRolesLazyQuery>;
export type GetRolesQueryResult = Apollo.QueryResult<
  Types.GetRolesQuery,
  Types.GetRolesQueryVariables
>;
export const GetRoleDocument = gql`
  query GetRole($id: Int!) {
    role(id: $id) {
      id
      name
      description
    }
  }
`;

/**
 * __useGetRoleQuery__
 *
 * To run a query within a React component, call `useGetRoleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRoleQuery(
  baseOptions: Apollo.QueryHookOptions<Types.GetRoleQuery, Types.GetRoleQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.GetRoleQuery, Types.GetRoleQueryVariables>(GetRoleDocument, options);
}
export function useGetRoleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.GetRoleQuery, Types.GetRoleQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.GetRoleQuery, Types.GetRoleQueryVariables>(
    GetRoleDocument,
    options,
  );
}
export type GetRoleQueryHookResult = ReturnType<typeof useGetRoleQuery>;
export type GetRoleLazyQueryHookResult = ReturnType<typeof useGetRoleLazyQuery>;
export type GetRoleQueryResult = Apollo.QueryResult<
  Types.GetRoleQuery,
  Types.GetRoleQueryVariables
>;
export const CreateRoleDocument = gql`
  mutation CreateRole($name: String!, $description: String) {
    createRole(data: { name: $name, description: $description }) {
      id
      name
      description
    }
  }
`;
export type CreateRoleMutationFn = Apollo.MutationFunction<
  Types.CreateRoleMutation,
  Types.CreateRoleMutationVariables
>;

/**
 * __useCreateRoleMutation__
 *
 * To run a mutation, you first call `useCreateRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRoleMutation, { data, loading, error }] = useCreateRoleMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateRoleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.CreateRoleMutation,
    Types.CreateRoleMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.CreateRoleMutation, Types.CreateRoleMutationVariables>(
    CreateRoleDocument,
    options,
  );
}
export type CreateRoleMutationHookResult = ReturnType<typeof useCreateRoleMutation>;
export type CreateRoleMutationResult = Apollo.MutationResult<Types.CreateRoleMutation>;
export type CreateRoleMutationOptions = Apollo.BaseMutationOptions<
  Types.CreateRoleMutation,
  Types.CreateRoleMutationVariables
>;
export const UpdateRoleDocument = gql`
  mutation UpdateRole($id: String!, $name: String, $description: String) {
    updateRole(data: { id: $id, name: $name, description: $description }) {
      id
      name
      description
    }
  }
`;
export type UpdateRoleMutationFn = Apollo.MutationFunction<
  Types.UpdateRoleMutation,
  Types.UpdateRoleMutationVariables
>;

/**
 * __useUpdateRoleMutation__
 *
 * To run a mutation, you first call `useUpdateRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRoleMutation, { data, loading, error }] = useUpdateRoleMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useUpdateRoleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.UpdateRoleMutation,
    Types.UpdateRoleMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.UpdateRoleMutation, Types.UpdateRoleMutationVariables>(
    UpdateRoleDocument,
    options,
  );
}
export type UpdateRoleMutationHookResult = ReturnType<typeof useUpdateRoleMutation>;
export type UpdateRoleMutationResult = Apollo.MutationResult<Types.UpdateRoleMutation>;
export type UpdateRoleMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateRoleMutation,
  Types.UpdateRoleMutationVariables
>;
export const DeleteRoleDocument = gql`
  mutation DeleteRole($id: String!) {
    deleteRole(id: $id)
  }
`;
export type DeleteRoleMutationFn = Apollo.MutationFunction<
  Types.DeleteRoleMutation,
  Types.DeleteRoleMutationVariables
>;

/**
 * __useDeleteRoleMutation__
 *
 * To run a mutation, you first call `useDeleteRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRoleMutation, { data, loading, error }] = useDeleteRoleMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRoleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.DeleteRoleMutation,
    Types.DeleteRoleMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.DeleteRoleMutation, Types.DeleteRoleMutationVariables>(
    DeleteRoleDocument,
    options,
  );
}
export type DeleteRoleMutationHookResult = ReturnType<typeof useDeleteRoleMutation>;
export type DeleteRoleMutationResult = Apollo.MutationResult<Types.DeleteRoleMutation>;
export type DeleteRoleMutationOptions = Apollo.BaseMutationOptions<
  Types.DeleteRoleMutation,
  Types.DeleteRoleMutationVariables
>;
export const GetUsersDocument = gql`
  query GetUsers {
    users {
      id
      username
      enabled
      firstName
      lastName
      email
      roles {
        id
        name
      }
    }
  }
`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<Types.GetUsersQuery, Types.GetUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.GetUsersQuery, Types.GetUsersQueryVariables>(
    GetUsersDocument,
    options,
  );
}
export function useGetUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.GetUsersQuery, Types.GetUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.GetUsersQuery, Types.GetUsersQueryVariables>(
    GetUsersDocument,
    options,
  );
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<
  Types.GetUsersQuery,
  Types.GetUsersQueryVariables
>;
export const GetUserAndRolesDocument = gql`
  query GetUserAndRoles {
    users {
      id
      username
      enabled
      firstName
      lastName
      email
      roles {
        id
        name
      }
    }
    roles {
      id
      name
    }
  }
`;

/**
 * __useGetUserAndRolesQuery__
 *
 * To run a query within a React component, call `useGetUserAndRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserAndRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserAndRolesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserAndRolesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetUserAndRolesQuery,
    Types.GetUserAndRolesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.GetUserAndRolesQuery, Types.GetUserAndRolesQueryVariables>(
    GetUserAndRolesDocument,
    options,
  );
}
export function useGetUserAndRolesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetUserAndRolesQuery,
    Types.GetUserAndRolesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.GetUserAndRolesQuery, Types.GetUserAndRolesQueryVariables>(
    GetUserAndRolesDocument,
    options,
  );
}
export type GetUserAndRolesQueryHookResult = ReturnType<typeof useGetUserAndRolesQuery>;
export type GetUserAndRolesLazyQueryHookResult = ReturnType<typeof useGetUserAndRolesLazyQuery>;
export type GetUserAndRolesQueryResult = Apollo.QueryResult<
  Types.GetUserAndRolesQuery,
  Types.GetUserAndRolesQueryVariables
>;
export const GetUserDocument = gql`
  query GetUser($id: String!) {
    getOne(id: $id) {
      id
      username
      enabled
      firstName
      lastName
      email
      roles {
        id
        name
      }
    }
  }
`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions: Apollo.QueryHookOptions<Types.GetUserQuery, Types.GetUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.GetUserQuery, Types.GetUserQueryVariables>(GetUserDocument, options);
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.GetUserQuery, Types.GetUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.GetUserQuery, Types.GetUserQueryVariables>(
    GetUserDocument,
    options,
  );
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<
  Types.GetUserQuery,
  Types.GetUserQueryVariables
>;
export const CreateUserDocument = gql`
  mutation CreateUser(
    $username: String!
    $email: String!
    $firstName: String!
    $lastName: String!
    $password: String!
    $roleIds: [String!]!
  ) {
    createUser(
      data: {
        username: $username
        email: $email
        firstName: $firstName
        lastName: $lastName
        password: $password
        roleIds: $roleIds
      }
    ) {
      id
      username
      enabled
      firstName
      lastName
      email
      roles {
        id
        name
      }
    }
  }
`;
export type CreateUserMutationFn = Apollo.MutationFunction<
  Types.CreateUserMutation,
  Types.CreateUserMutationVariables
>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      password: // value for 'password'
 *      roleIds: // value for 'roleIds'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.CreateUserMutation,
    Types.CreateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.CreateUserMutation, Types.CreateUserMutationVariables>(
    CreateUserDocument,
    options,
  );
}
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<Types.CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  Types.CreateUserMutation,
  Types.CreateUserMutationVariables
>;
export const UpdateUserDocument = gql`
  mutation UpdateUser(
    $id: String!
    $username: String!
    $email: String
    $firstName: String
    $lastName: String
    $password: String
    $relatedRoleIds: [String!]
  ) {
    updateUser(
      data: {
        id: $id
        username: $username
        email: $email
        firstName: $firstName
        lastName: $lastName
        password: $password
        roleIds: $relatedRoleIds
      }
    ) {
      id
      username
      enabled
      firstName
      lastName
      email
      roles {
        id
        name
      }
    }
  }
`;
export type UpdateUserMutationFn = Apollo.MutationFunction<
  Types.UpdateUserMutation,
  Types.UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      password: // value for 'password'
 *      relatedRoleIds: // value for 'relatedRoleIds'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.UpdateUserMutation,
    Types.UpdateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.UpdateUserMutation, Types.UpdateUserMutationVariables>(
    UpdateUserDocument,
    options,
  );
}
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<Types.UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateUserMutation,
  Types.UpdateUserMutationVariables
>;
export const DeleteUserDocument = gql`
  mutation DeleteUser($id: String!) {
    deleteUser(id: $id)
  }
`;
export type DeleteUserMutationFn = Apollo.MutationFunction<
  Types.DeleteUserMutation,
  Types.DeleteUserMutationVariables
>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.DeleteUserMutation,
    Types.DeleteUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.DeleteUserMutation, Types.DeleteUserMutationVariables>(
    DeleteUserDocument,
    options,
  );
}
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<Types.DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<
  Types.DeleteUserMutation,
  Types.DeleteUserMutationVariables
>;
