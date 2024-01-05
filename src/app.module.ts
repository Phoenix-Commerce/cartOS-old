import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { DryerModule } from 'dryerjs';

import models from './models';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    }),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/cartos'),
    DryerModule.register({ definitions: models }),
  ],
})
export class AppModule {}
