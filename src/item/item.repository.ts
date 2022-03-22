import { EntityRepository } from "@mikro-orm/mysql";
import { Service } from "typedi";
import { Item } from "./item.entity";

export class ItemRepository extends EntityRepository<Item> {
  async save(item: Item) {
    await this.em.persist(item);
  }
}
