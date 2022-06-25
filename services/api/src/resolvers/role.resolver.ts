import { Resolver, Query, Mutation, Arg, Int } from 'type-graphql';
import { CreateRoleInput, UpdateRoleInput } from '@typeDefs/role.types';
import { Role } from '@entities/Role';
import { Permission } from '@entities/Permission';
import { In } from 'typeorm';
import { ApolloError } from 'apollo-server-express';

@Resolver()
export class RoleResolver {
  @Query(() => [Role])
  async roles(
    @Arg('limit', { nullable: true }) limit: number,
    @Arg('offset', { nullable: true }) offset: number,
  ): Promise<Role[]> {
    let roles = await Role.find({ relations: ['permissions'] });
    if (offset && limit) {
      roles = roles.slice(offset, offset + limit + 1);
    }
    return roles.map((r) => ({ id: r.id, name: r.name, description: r.description } as Role));
  }

  @Query(() => Role)
  async role(@Arg('id', () => Int) id: string): Promise<Role> {
    const role = await Role.findOneByOrFail({ id });
    return role as Role;
  }

  @Mutation(() => Role)
  async createRole(@Arg('data') data: CreateRoleInput): Promise<Role> {
    const role = Role.create(data as Role);
    if (data.permissionIds)
      role.permissions = await Permission.find({
        where: { id: In(data.permissionIds) },
      });
    return role.save();
  }

  @Mutation(() => Role)
  async updateRole(@Arg('id') id: string, @Arg('data') data: UpdateRoleInput): Promise<Role> {
    const role = await Role.findOneOrFail({ where: { id: data.id }, relations: ['permissions'] });
    if (data.permissionIds)
      role.permissions = await Permission.find({
        where: { id: In(data.permissionIds) },
      });
    return role.save();
  }

  @Mutation(() => String)
  async deleteRole(@Arg('id') id: string): Promise<string> {
    const result = await Role.delete({ id });
    if (!result.affected) throw new ApolloError('User not found');
    return id;
  }
}
