import { Definition, Property, Id, ObjectId } from 'dryerjs';

@Definition()
export class FulfillmentType {
  @Id()
  id: ObjectId;

  @Property()
  name: string;

  @Property()
  description: string;

  @Property()
  createdAt: Date;

  @Property()
  updatedAt: Date;
}

@Definition()
export default class Fulfillment {
  @Id()
  id: ObjectId;

  @Property()
  shopId: string;

  @Property()
  carrier: string;

  @Property()
  amount: number;

  @Property()
  status: string;

  @Property()
  createdAt: Date;

  @Property()
  updatedAt: Date;
}
