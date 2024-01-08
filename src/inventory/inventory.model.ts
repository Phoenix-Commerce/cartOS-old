import { Definition, Property, Id, ObjectId, Embedded } from 'dryerjs';
import Address from '../common/models/address.model';
import { Variant } from '../product/product.model';

@Definition()
export class Warehouse {
  @Id()
  id: ObjectId;

  @Embedded(() => Address)
  address: Address;

  @Embedded(() => Variant)
  variants: Variant[];
}

@Definition()
export class ProductInventory {
  @Id()
  id: ObjectId;

  @Property()
  productId: string;

  @Embedded(() => Warehouse)
  warehouse: Warehouse;

  @Property()
  quantity: number;
}
