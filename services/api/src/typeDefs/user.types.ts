import { InputType, Field } from 'type-graphql';

@InputType()
export class LoginInput {
  @Field(() => String)
  username!: string;

  @Field(() => String)
  password!: string;
}

@InputType()
export class RefreshTokenInput {
  @Field(() => String)
  refreshToken!: string;
}

@InputType()
export class CreateUserInput {
  @Field(() => String)
  username!: string;

  @Field(() => String)
  password!: string;

  @Field(() => String)
  firstName?: string;

  @Field(() => String)
  lastName?: string;

  @Field(() => Boolean, {defaultValue: true})
  enabled?: boolean;

  @Field(() => String)
  email?: string;

  @Field(() => [String], { nullable: true })
  roleIds?: string[];
}

@InputType()
export class UpdateUserInput {

  @Field(() => String)
  id!: string;

  @Field(() => String, {nullable: true})
  username!: string;

  @Field(() => String, {nullable: true})
  password!: string;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => Boolean, {defaultValue: true})
  enabled?: boolean;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => [String], { nullable: true })
  roleIds?: string[];
}
