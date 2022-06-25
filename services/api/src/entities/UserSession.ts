import { ObjectType, Field } from 'type-graphql';

import { Role } from './Role';

@ObjectType()
export class UserSession {
  @Field(() => String)
  id!: string;

  @Field(() => String)
  username!: string;

  @Field(() => Boolean)
  enabled!: boolean;

  @Field(() => Boolean, { nullable: true })
  emailVerified!: boolean;

  @Field(() => String, { nullable: true })
  accessToken?: string;

  @Field(() => String, { nullable: true })
  refreshToken?: string;

  @Field(() => String)
  firstName?: string;

  @Field(() => String)
  lastName?: string;

  @Field(() => String)
  email?: string;

  @Field(() => [Role], { nullable: true })
  roles?: Role[];
}
