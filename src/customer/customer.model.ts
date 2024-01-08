import { Definition, Property, Id, ObjectId, Embedded } from 'dryerjs';
import Address from '../common/models/address.model';

@Definition()
export default class Customer {
  @Id()
  id: ObjectId;

  @Property()
  email: string;

  @Property()
  fullName: string;

  @Property()
  firstName: string;

  @Property()
  lastName: string;

  @Property()
  phoneNumber: string;

  @Embedded(() => Address)
  billingAddress: Address;

  @Embedded(() => Address)
  shippingAddress: Address;
}
