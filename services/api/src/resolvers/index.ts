import { NonEmptyArray } from 'type-graphql';
import { UserResolver } from '@resolvers/user.resolver';
import { RoleResolver } from './role.resolver';
import { AuthorResolver } from '@resolvers/author.resolver';
import { BookResolver } from './book.resolver';

export const resolvers = [
  UserResolver,
  RoleResolver,
  AuthorResolver,
  BookResolver,
] as NonEmptyArray<Function>;
