import { Definition, Property, Id, ObjectId, Embedded } from 'dryerjs';

@Definition()
export class Action {
  @Id()
  id: ObjectId;

  @Property()
  actionKey: string;

  @Property()
  actionParameters: object;

  @Property()
  createdAt: Date;

  @Property()
  updatedAt: Date;
}

@Definition()
export class Trigger {
  @Id()
  id: ObjectId;

  @Embedded(() => Action)
  action: Action;

  @Property()
  actionParameters: object;

  @Property()
  createdAt: Date;

  @Property()
  updatedAt: Date;
}
