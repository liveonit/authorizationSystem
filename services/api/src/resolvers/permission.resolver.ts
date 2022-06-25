import { Resolver, Query, Mutation, Arg, Int } from 'type-graphql';
import { CreatePermissionInput, UpdatePermissionInput } from '@typeDefs/permission.types';
import { Permission } from '@entities/Permission';
import { ApolloError } from 'apollo-server-express';

@Resolver()
export class PermissionResolver {
  @Query(() => [Permission])
  async permissions(
    @Arg('limit', { nullable: true }) limit: number,
    @Arg('offset', { nullable: true }) offset: number,
  ): Promise<Permission[]> {
    let permissions = await Permission.find();
    if (offset && limit) {
      permissions = permissions.slice(offset, offset + limit + 1);
    }
    return permissions.map(
      (r) => ({ id: r.id, name: r.name, description: r.description } as Permission),
    );
  }

  @Query(() => Permission)
  async permission(@Arg('id', () => Int) id: string): Promise<Permission> {
    const permission = await Permission.findOneByOrFail({ id });
    return permission as Permission;
  }

  @Mutation(() => Permission)
  async createPermission(@Arg('data') data: CreatePermissionInput): Promise<Permission> {
    const permission = Permission.create(data as Permission);
    return permission.save();
  }

  @Mutation(() => Permission)
  async updatePermission(
    @Arg('id') id: string,
    @Arg('data') data: UpdatePermissionInput,
  ): Promise<Permission> {
    const permission = await Permission.findOneOrFail({
      where: { id: data.id },
      relations: ['permissions'],
    });
    return permission.save();
  }

  @Mutation(() => String)
  async deletePermission(@Arg('id') id: string): Promise<string> {
    const result = await Permission.delete({ id });
    if (!result.affected) throw new ApolloError('User not found');
    return id;
  }
}
