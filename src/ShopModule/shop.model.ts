import { Definition, Property, Id, ObjectId } from 'dryerjs';

@Definition()
export default class Shop {
  @Id()
  id: ObjectId;

  @Property()
  name: string;

  @Property()
  description: string;

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
  email: string;

  @Property()
  website: string;

  @Property()
  isPublished: boolean;

  @Property()
  isDeleted: boolean;

  @Property()
  isArchived: boolean;

  @Property()
  isDefault: boolean;
}
