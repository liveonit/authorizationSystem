import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  username!: string;

  @Field(() => String)
  password!: string;
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

  @Field(() => [String], { nullable: true })
  roleIds?: string[];
}

@InputType()
export class UpdateUserInput {
  @Field(() => String)
  username!: string;

  @Field(() => String)
  password!: string;
  @Field(() => String, { nullable: true })
  accessToken?: string;

  @Field(() => String, { nullable: true })
  refreshToken?: string;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => [String], { nullable: true })
  roleIds?: string[];
}
