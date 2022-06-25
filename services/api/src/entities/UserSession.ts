import { ObjectType, Field } from 'type-graphql';
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Role } from './Role';

// NOT IN DB - ONLY REPRESENTATION
@Entity()
@ObjectType()
export class UserSession extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Field(() => String)
  @Column()
  username!: string;

  @Field(() => Boolean)
  @Column()
  enabled!: boolean;

  @Field(() => Boolean, { nullable: true })
  @Column()
  emailVerified!: boolean;

  @Field(() => String, { nullable: true })
  accessToken?: string;

  @Field(() => String, { nullable: true })
  refreshToken?: string;

  @Field(() => String)
  @Column()
  firstName?: string;

  @Field(() => String)
  @Column()
  lastName?: string;

  @Field(() => String)
  @Column()
  email?: string;

  @Field(() => [Role], { nullable: true })
  @ManyToMany(() => Role, (role) => role.users, {
    cascade: true,
  })
  @JoinTable()
  roles?: Role[];
}
