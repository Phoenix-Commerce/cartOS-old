import { Definition, Property, Id, ObjectId, Embedded, Skip } from 'dryerjs';
import Shop from '../shop/shop.model';

@Definition()
export default class User {
  @Id()
  id: ObjectId;

  @Embedded(() => Shop)
  shops: Shop[];

  @Property()
  userType: string; // either login or API

  @Property()
  email: string;

  @Property({ update: Skip, output: Skip })
  password: string;

  @Property()
  name: string;

  @Property()
  expiresAt: Date;
}
