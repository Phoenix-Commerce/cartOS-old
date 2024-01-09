import { Definition, Property, Id, ObjectId, Embedded } from 'dryerjs';
import Shop from '../shop/shop.model';

@Definition()
export class Translation {
  @Property()
  language: string;

  @Property()
  isDefault: boolean;

  @Property()
  name: string;

  @Property()
  description: string;
}

@Definition()
export class Locale {
  @Property()
  locale: string;

  @Property()
  currency: string;

  @Property()
  price: number;

  @Property()
  compareAtPrice: number;

  @Property()
  weight: number;

  @Property()
  weightUnit: string;
}

@Definition()
export class Variant {
  @Id()
  id: ObjectId;

  @Embedded(() => Locale)
  locales: Locale[];

  @Embedded(() => Translation)
  translations: Translation[];

  @Property()
  sku: string;

  @Property()
  barcode: string;

  @Property()
  inStockQuantity: number;

  @Property()
  createdAt: Date;

  @Property()
  updatedAt: Date;
}

@Definition()
export class Option {
  @Property()
  name: string;

  @Property()
  value: string;

  @Embedded(() => Variant)
  variants: Variant[];
}

@Definition()
export default class Product {
  @Id()
  id: ObjectId;

  @Embedded(() => Shop)
  shops: Shop[];

  @Property()
  adminName: string;

  @Property()
  adminDescription: string;

  @Embedded(() => Translation)
  translations: Translation[];

  @Embedded(() => Option)
  options: Option[];
}
