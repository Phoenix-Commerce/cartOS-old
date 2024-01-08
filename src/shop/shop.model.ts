import { Definition, Property, Id, ObjectId, Embedded } from 'dryerjs';
import Address from '../common/models/address.model';

@Definition()
export default class Shop {
  @Id()
  id: ObjectId;

  @Property()
  name: string;

  @Property()
  description: string;

  @Embedded(() => Address)
  billAddress: Address;

  @Embedded(() => Address)
  shipAddress: Address;

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

  @Property()
  createdAt: Date;

  @Property()
  updatedAt: Date;
}
