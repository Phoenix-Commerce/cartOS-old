import { Definition, Property, Id, ObjectId } from 'dryerjs';



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
  dateCreated: Date;

  @Property()
  dateUpdated: Date;
}
