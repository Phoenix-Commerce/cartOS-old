import { Definition, Property, Id, ObjectId, Embedded } from 'dryerjs';
import { Decimal128 } from 'mongodb';
import Payment from '../payment/payment.model';
import Fulfillment from '../fulfillment/fulfillment.model';
import Shop from '../shop/shop.model';
import Product from '../product/product.model';
import Discount from './discount.model';
import Customer from '../customer/customer.model';

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

  @Embedded(() => Product)
  product: Product;

  @Property({ db: { type: Decimal128 } })
  price: number;

  @Property()
  quantity: number;

  @Embedded(() => Discount)
  discounts: Discount[];
}

@Definition()
export default class Cart {
  @Id()
  id: ObjectId;

  @Embedded(() => Customer)
  customer: Customer;

  @Embedded(() => Shop)
  shop: Shop;

  @Embedded(() => CartItem)
  items: CartItem[];

  @Embedded(() => Payment)
  payments: Payment[];

  @Embedded(() => Fulfillment)
  fulfillments: Fulfillment[];
}
