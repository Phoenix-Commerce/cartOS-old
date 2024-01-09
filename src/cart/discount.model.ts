import { Definition, Property, Id, ObjectId } from 'dryerjs';

@Definition()
export default class Discount {
  @Id()
  id: ObjectId;

  @Property()
  discountType: string; // percentage or flat

  @Property()
  discountAmount: number;

  @Property()
  dateCreated: Date;

  @Property()
  dateUpdated: Date;
}
