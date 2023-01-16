import { Entity, Property } from "@mikro-orm/core";
import { BaseEntity } from "./BaseEntity";

@Entity()
export class TaskEntity extends BaseEntity {
  @Property()
  title: string;

  @Property()
  text: string;

  constructor(title: string, text: string) {
    super();
    this.title = title;
    this.text = text;
  }
}
