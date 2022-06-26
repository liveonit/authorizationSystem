export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Author = {
  __typename?: 'Author';
  age: Scalars['Int'];
  books?: Maybe<Array<Book>>;
  country?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Author>;
  authorId: Scalars['Float'];
  id: Scalars['Int'];
  isPublished: Scalars['Boolean'];
  title: Scalars['String'];
};

export type CreateAuthorInput = {
  age: Scalars['Int'];
  country?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CreateBookInput = {
  authorId: Scalars['Int'];
  isPublished?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CreateRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permissionIds?: InputMaybe<Array<Scalars['String']>>;
};

export type CreateUserInput = {
  accessToken?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  refreshToken?: InputMaybe<Scalars['String']>;
  roleIds?: InputMaybe<Array<Scalars['String']>>;
  username: Scalars['String'];
};

export type LoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAuthor: Author;
  createBook: Book;
  createRole: Role;
  createUser: User;
  deleteAuthor: Scalars['Float'];
  deleteBook: Scalars['Int'];
  deleteMe: Scalars['String'];
  deleteRole: Scalars['String'];
  deleteUser: Scalars['String'];
  login: UserSession;
  logout: Scalars['String'];
  refreshToken: UserSession;
  updateAuthor: Author;
  updateBook: Book;
  updateRole: Role;
  updateUser: User;
};

export type MutationCreateAuthorArgs = {
  data: CreateAuthorInput;
};

export type MutationCreateBookArgs = {
  data: CreateBookInput;
};

export type MutationCreateRoleArgs = {
  data: CreateRoleInput;
};

export type MutationCreateUserArgs = {
  data: CreateUserInput;
};

export type MutationDeleteAuthorArgs = {
  id: Scalars['Int'];
};

export type MutationDeleteBookArgs = {
  id: Scalars['Int'];
};

export type MutationDeleteRoleArgs = {
  id: Scalars['String'];
};

export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};

export type MutationLoginArgs = {
  data: LoginInput;
};

export type MutationLogoutArgs = {
  data: Scalars['String'];
};

export type MutationRefreshTokenArgs = {
  data: RefreshTokenInput;
};

export type MutationUpdateAuthorArgs = {
  data: UpdateAuthorInput;
  id: Scalars['Int'];
};

export type MutationUpdateBookArgs = {
  data: UpdateBookInput;
  id: Scalars['Int'];
};

export type MutationUpdateRoleArgs = {
  data: UpdateRoleInput;
};

export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
};

export type Permission = {
  __typename?: 'Permission';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  author: Author;
  authors: Array<Author>;
  book: Book;
  books: Array<Book>;
  getMyProfile: User;
  getOne: User;
  hello: Scalars['String'];
  role: Role;
  roles: Array<Role>;
  users: Array<User>;
};

export type QueryAuthorArgs = {
  id: Scalars['Int'];
};

export type QueryAuthorsArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  offset?: InputMaybe<Scalars['Float']>;
};

export type QueryBookArgs = {
  id: Scalars['Int'];
};

export type QueryBooksArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  offset?: InputMaybe<Scalars['Float']>;
};

export type QueryGetOneArgs = {
  id: Scalars['String'];
};

export type QueryRoleArgs = {
  id: Scalars['Int'];
};

export type QueryRolesArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  offset?: InputMaybe<Scalars['Float']>;
};

export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  offset?: InputMaybe<Scalars['Float']>;
};

export type RefreshTokenInput = {
  refreshToken: Scalars['String'];
};

export type Role = {
  __typename?: 'Role';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  permissions?: Maybe<Array<Permission>>;
};

export type UpdateAuthorInput = {
  age?: InputMaybe<Scalars['Int']>;
  country?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateBookInput = {
  authorId?: InputMaybe<Scalars['Int']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  permissionIds?: InputMaybe<Array<Scalars['String']>>;
};

export type UpdateUserInput = {
  accessToken?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  roleIds?: InputMaybe<Array<Scalars['String']>>;
  username?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  accessToken?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['Boolean']>;
  enabled: Scalars['Boolean'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  lastName: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Role>>;
  username: Scalars['String'];
};

export type UserSession = {
  __typename?: 'UserSession';
  accessToken?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
};
