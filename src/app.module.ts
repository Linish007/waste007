import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';
import { PeopleModule } from './people/people.module';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    PeopleModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      // debug: true,
      playground: true,
    }),
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService, CatsService],
})
export class AppModule {}
