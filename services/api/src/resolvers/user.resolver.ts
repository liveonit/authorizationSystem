import { Resolver, Query, Mutation, Arg, UseMiddleware, Ctx } from 'type-graphql';
import { CreateUserInput, LoginInput, RefreshTokenInput, UpdateUserInput } from '@typeDefs/user.types';
import { gqlLogMiddleware } from '../utils/middlewares/gqlLogMiddleware';
import { User } from '@entities/User';
import { authSvc, CustomContext } from '@services/auth.svc';
import { ApolloError } from 'apollo-server-express';
import { UserSession } from '@entities/UserSession';

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async users(
    @Arg('limit', { nullable: true }) limit: number,
    @Arg('offset', { nullable: true }) offset: number,
  ): Promise<User[]> {
    let users = await authSvc.getAll();
    if (offset && limit) {
      users = users.slice(offset, offset + limit + 1);
    }
    return users;
  }

  @Query(() => User)
  async getOne(@Arg('id', () => String) id: string): Promise<User> {
    const user = await authSvc.getOne({ id });
    return user;
  }

  @Query(() => User)
  async getMyProfile(@Ctx() ctx: CustomContext): Promise<User> {
    if (!ctx.req.user?.id) throw new ApolloError('Invalid credentials');
    const userId = ctx.req.user.id;
    const user = await authSvc.getOne({ id: userId });
    return user;
  }

  @Mutation(() => User)
  @UseMiddleware([gqlLogMiddleware])
  async createUser(@Arg('data') data: CreateUserInput): Promise<User> {
    return authSvc.createUser(data);
  }

  @Mutation(() => UserSession)
  @UseMiddleware([gqlLogMiddleware])
  async login(@Arg('data') data: LoginInput): Promise<UserSession> {
    return authSvc.login(data);
  }

  @Mutation(() => String)
  @UseMiddleware([gqlLogMiddleware])
  async logout(@Arg('data', () => String!) id: string): Promise<string> {
    await authSvc.logout(id);
    return id;
  }

  @Mutation(() => UserSession)
  @UseMiddleware([gqlLogMiddleware])
  async refreshToken(@Arg('data') refreshTokenInput: RefreshTokenInput): Promise<UserSession> {
    return authSvc.refreshToken(refreshTokenInput);
  }


  @Mutation(() => User)
  @UseMiddleware([gqlLogMiddleware])
  async updateUser(@Arg('data') data: UpdateUserInput): Promise<User> {
    const updatedUser = await authSvc.updateUser(data);
    return updatedUser;
  }

  @Mutation(() => String)
  @UseMiddleware([gqlLogMiddleware])
  async deleteUser(@Arg('id') id: string): Promise<string> {
    await authSvc.delete(id);
    return id;
  }

  @Mutation(() => String)
  @UseMiddleware([gqlLogMiddleware])
  async deleteMe(@Ctx() ctx: CustomContext): Promise<string> {
    if (!ctx.req.user?.id) throw new ApolloError('Invalid credentials');
    const userId = ctx.req.user.id;
    await authSvc.delete(userId);
    return userId;
  }
}
