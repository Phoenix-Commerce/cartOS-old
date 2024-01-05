import { Definition, Property, Id, ObjectId, Embedded } from 'dryerjs';
import { CartItem } from './cart';

@Definition()
export default class Order {
  @Id()
  id: ObjectId;

  @Property()
  shopId: string;

  @Property()
  customerId: string;

  @Embedded(() => CartItem)
  items: CartItem[];

  @Property()
  total: number;

  @Property()
  status: string;

  @Property()
  dateCreated: Date;

  @Property()
  dateUpdated: Date;
}
