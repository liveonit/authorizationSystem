import * as Types from './schemas';

export type GetAuthorsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAuthorsQuery = { __typename?: 'Query', authors: Array<{ __typename?: 'Author', id: number, name: string, age: number, country?: string | null }> };

export type GetAuthorQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type GetAuthorQuery = { __typename?: 'Query', author: { __typename?: 'Author', id: number, name: string, age: number, country?: string | null } };

export type CreateAuthorMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
  age: Types.Scalars['Int'];
  country?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type CreateAuthorMutation = { __typename?: 'Mutation', createAuthor: { __typename?: 'Author', id: number, age: number, name: string, country?: string | null } };

export type UpdateAuthorMutationVariables = Types.Exact<{
  id: Types.Scalars['Int'];
  name?: Types.InputMaybe<Types.Scalars['String']>;
  age?: Types.InputMaybe<Types.Scalars['Int']>;
  country?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type UpdateAuthorMutation = { __typename?: 'Mutation', updateAuthor: { __typename?: 'Author', id: number, age: number, name: string, country?: string | null } };

export type DeleteAuthorMutationVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type DeleteAuthorMutation = { __typename?: 'Mutation', deleteAuthor: number };

export type GetBooksQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetBooksQuery = { __typename?: 'Query', books: Array<{ __typename?: 'Book', id: number, title: string, isPublished: boolean, author?: { __typename?: 'Author', id: number, name: string } | null }> };

export type GetBooksAndAuthorsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetBooksAndAuthorsQuery = { __typename?: 'Query', books: Array<{ __typename?: 'Book', id: number, title: string, isPublished: boolean, authorId: number, author?: { __typename?: 'Author', id: number, name: string } | null }>, authors: Array<{ __typename?: 'Author', id: number, name: string }> };

export type GetBookQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type GetBookQuery = { __typename?: 'Query', book: { __typename?: 'Book', id: number, title: string, isPublished: boolean, authorId: number, author?: { __typename?: 'Author', id: number, name: string } | null } };

export type CreateBookMutationVariables = Types.Exact<{
  title: Types.Scalars['String'];
  isPublished?: Types.InputMaybe<Types.Scalars['Boolean']>;
  authorId: Types.Scalars['Int'];
}>;


export type CreateBookMutation = { __typename?: 'Mutation', createBook: { __typename?: 'Book', id: number, title: string, isPublished: boolean, author?: { __typename?: 'Author', id: number, name: string } | null } };

export type UpdateBookMutationVariables = Types.Exact<{
  id: Types.Scalars['Int'];
  title?: Types.InputMaybe<Types.Scalars['String']>;
  isPublished?: Types.InputMaybe<Types.Scalars['Boolean']>;
  authorId?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type UpdateBookMutation = { __typename?: 'Mutation', updateBook: { __typename?: 'Book', id: number, title: string, isPublished: boolean, author?: { __typename?: 'Author', id: number, name: string } | null } };

export type DeleteBookMutationVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type DeleteBookMutation = { __typename?: 'Mutation', deleteBook: number };

export type GetRolesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetRolesQuery = { __typename?: 'Query', roles: Array<{ __typename?: 'Role', id: string, name: string, description?: string | null }> };

export type GetRoleQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type GetRoleQuery = { __typename?: 'Query', role: { __typename?: 'Role', id: string, name: string, description?: string | null } };

export type CreateRoleMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
  description?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type CreateRoleMutation = { __typename?: 'Mutation', createRole: { __typename?: 'Role', id: string, name: string, description?: string | null } };

export type UpdateRoleMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
  name?: Types.InputMaybe<Types.Scalars['String']>;
  description?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type UpdateRoleMutation = { __typename?: 'Mutation', updateRole: { __typename?: 'Role', id: string, name: string, description?: string | null } };

export type DeleteRoleMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;


export type DeleteRoleMutation = { __typename?: 'Mutation', deleteRole: string };

export type GetUsersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, username: string, enabled: boolean, firstName: string, lastName: string, email: string, roles?: Array<{ __typename?: 'Role', id: string, name: string }> | null }> };

export type GetUserAndRolesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetUserAndRolesQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, username: string, enabled: boolean, firstName: string, lastName: string, email: string, roles?: Array<{ __typename?: 'Role', id: string, name: string }> | null }>, roles: Array<{ __typename?: 'Role', id: string, name: string }> };

export type GetUserQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'Query', getOne: { __typename?: 'User', id: string, username: string, enabled: boolean, firstName: string, lastName: string, email: string, roles?: Array<{ __typename?: 'Role', id: string, name: string }> | null } };

export type CreateUserMutationVariables = Types.Exact<{
  username: Types.Scalars['String'];
  email: Types.Scalars['String'];
  firstName: Types.Scalars['String'];
  lastName: Types.Scalars['String'];
  password: Types.Scalars['String'];
  roleIds: Array<Types.Scalars['String']> | Types.Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, username: string, enabled: boolean, firstName: string, lastName: string, email: string, roles?: Array<{ __typename?: 'Role', id: string, name: string }> | null } };

export type UpdateUserMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
  username: Types.Scalars['String'];
  email?: Types.InputMaybe<Types.Scalars['String']>;
  firstName?: Types.InputMaybe<Types.Scalars['String']>;
  lastName?: Types.InputMaybe<Types.Scalars['String']>;
  password?: Types.InputMaybe<Types.Scalars['String']>;
  relatedRoleIds?: Types.InputMaybe<Array<Types.Scalars['String']> | Types.Scalars['String']>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, username: string, enabled: boolean, firstName: string, lastName: string, email: string, roles?: Array<{ __typename?: 'Role', id: string, name: string }> | null } };

export type DeleteUserMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: string };
