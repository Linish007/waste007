import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Task {

  @Field(() => Int, { description: 'Id field (int value)' })
  id: number;

  @Field(() => String, { description: 'Task Title (string value)' })
  title: string;

  @Field(() => String, { description: 'Creation date (string value)' })
  creationDate: string;

  @Field(() => String, { description: 'End Date (string value)' })
  endDate: string;


}
