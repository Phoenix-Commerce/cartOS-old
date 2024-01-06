import { Definition, Property, Id, ObjectId } from 'dryerjs';

@Definition()
export default class Product {
  @Id()
  id: ObjectId;

  @Property()
  name: string;

  @Property()
  description: string;

  @Property()
  price: number;
}
