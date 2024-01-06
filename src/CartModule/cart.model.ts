import { Definition, Property, Id, ObjectId, Embedded } from 'dryerjs';
import Payment from '../PaymentModule/payment.model';
import Shipment from '../ShipmentModule/shipment.model';

@Definition()
export class CartAddress {
  @Id()
  id: ObjectId;

  @Property()
  shopId: string;

  @Property()
  fullName: string;

  @Property()
  firstName: string;

  @Property()
  lastName: string;

  @Property()
  addressLine1: string;

  @Property()
  addressLine2: string;

  @Property()
  city: string;

  @Property()
  region: string;

  @Property()
  postalCode: string;

  @Property()
  country: string;

  @Property()
  phoneNumber: string;

  @Property()
  isCommercial: boolean;

  @Property()
  isBillingDefault: boolean;

  @Property()
  isShippingDefault: boolean;
}

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

  @Embedded(() => CartItem)
  items: CartItem[];

  @Embedded(() => Payment)
  payments: Payment[];

  @Embedded(() => Shipment)
  shipments: Shipment[];

  @Embedded(() => CartAddress)
  shippingAddress: CartAddress;

  @Embedded(() => CartAddress)
  billingAddress: CartAddress;

  @Embedded(() => ShippingMethod)
  shippingMethod: ShippingMethod;
}
