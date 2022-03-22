import { EntityRepository } from "@mikro-orm/mysql";
import { Service } from "typedi";
import { User } from "./user.entity";

export class UserRepository extends EntityRepository<User> {
  async save(user: User) {
    await this.em.persist(user);
  }

  async findByName(name: string) {
    const user = await this.em.findOne(User, { name });
    return user;
  }
}
