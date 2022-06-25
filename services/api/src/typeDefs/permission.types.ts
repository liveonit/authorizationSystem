import { InputType, Field } from 'type-graphql';

@InputType()
export class CreatePermissionInput {
  @Field(() => String)
  name!: string;

  @Field(() => String, { nullable: true })
  description?: string;
}

@InputType()
export class UpdatePermissionInput {
  @Field(() => String)
  id!: string;

  @Field(() => String, { nullable: true })
  name!: string;

  @Field(() => String, { nullable: true })
  description?: string;
}
