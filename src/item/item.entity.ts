import {
  Entity,
  EntityRepositoryType,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { ItemRepository } from "./item.repository";

@Entity({ customRepository: () => ItemRepository })
export class Item {
  [EntityRepositoryType]?: ItemRepository;

  @PrimaryKey({ autoincrement: true })
  private id: number;

  @Property({ type: "varchar", length: 15, nullable: false })
  private name: string;

  constructor({ name }: { name: string }) {
    this.name = name;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }
}
