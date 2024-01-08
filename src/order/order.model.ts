import { Definition, Property, Id, ObjectId, Embedded } from 'dryerjs';

@Definition()
export class OrderItem {
  @Id()
  id: ObjectId;

  @Property()
  productId: string;

  @Property()
  name: string;

  @Property()
  description: string;

  @Property()
  price: number;

  @Property()
  quantity: number;
}

@Definition()
export default class Order {
  @Id()
  id: ObjectId;

  @Property()
  shopId: string;

  @Property()
  customerId: string;

  @Embedded(() => OrderItem)
  items: OrderItem[];

  @Property()
  total: number;

  @Property()
  status: string;

  @Property()
  dateCreated: Date;

  @Property()
  dateUpdated: Date;
}
