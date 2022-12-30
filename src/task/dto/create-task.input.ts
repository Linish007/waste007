import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTaskInput {

  @Field(() => Int, { description: 'Example field (placeholder)' })
  // exampleField: number;
  @Field(() => Int)
    id: number;

    @Field(() => String)
    title: string;

    @Field(() => String)
    creationDate: string;

    @Field(() => String)
    endDate: string;

}
