import { Definition, Property } from 'dryerjs';

@Definition()
export default class Address {
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
  isDefault: boolean;
}
