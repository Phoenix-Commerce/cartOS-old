import * as graphql from 'graphql';
import { Definition, Property } from 'dryerjs';

@Definition({ schemaOptions: { _id: false } })
export default class MoneyModel {
  @Property({ type: () => graphql.GraphQLInt })
  amount: number;

  @Property()
  currency: string;
}
