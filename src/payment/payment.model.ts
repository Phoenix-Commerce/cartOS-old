import { Definition, Property, Id, ObjectId, Embedded } from 'dryerjs';
import Shop from '../shop/shop.model';
import Money from '../common/models/money.model';

@Definition()
export default class Payment {
  @Id()
  id: ObjectId;

  @Embedded(() => Shop)
  shops: Shop[];

  @Property()
  amount: number;

  @Property()
  status: string;

  @Property()
  createdAt: Date;

  @Property()
  updatedAt: Date;
}
