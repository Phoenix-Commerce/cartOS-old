import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { DryerModule } from 'dryerjs';
import { env } from './config';

import models from './models';
import services from './services';

@Module({
  imports: [
    ...models,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    }),
    MongooseModule.forRoot(env.MONGO_URL),
    DryerModule.register({ definitions: models }),
  ],
  providers: [...services],
})
export class AppModule {}
