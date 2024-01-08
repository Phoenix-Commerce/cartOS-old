import { Definition, Property, Id, ObjectId, Embedded } from 'dryerjs';
import Payment from '../payment/payment.model';
import Fulfillment from '../fulfillment/fulfillment.model';
import Shop from '../shop/shop.model';

@Definition()
export class ShippingMethod {
  @Id()
  id: ObjectId;

  @Property()
  name: string;

  @Property()
  description: string;

  @Property()
  price: number;

  @Property()
  isDefault: boolean;
}

@Definition()
export class CartItem {
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
export default class Cart {
  @Id()
  id: ObjectId;

  @Property()
  userId: string;

  @Embedded(() => Shop)
  shop: Shop;

  @Embedded(() => CartItem)
  items: CartItem[];

  @Embedded(() => Payment)
  payments: Payment[];

  @Embedded(() => Fulfillment)
  fulfillments: Fulfillment[];
}
