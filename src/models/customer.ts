import { Definition, Property, Id, ObjectId } from 'dryerjs';

@Definition()
export default class Customer {
  @Id()
  id: ObjectId;

  @Property()
  email: string;

  @Property()
  firstName: string;

  @Property()
  lastName: string;

  @Property()
  phoneNumber: string;
}
