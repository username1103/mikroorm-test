import { EntityRepository } from "@mikro-orm/mysql";
import { User } from "../entities/user/user.entity";

export class UserRepository extends EntityRepository<User> {
  async save(user: User) {
    console.log("UserRepository", this.em.id);
    this.em.persist(user);
  }

  async findByName(name: string) {
    console.log("UserRepository findByName", this.em.id);

    const users = await this.em.qb(User, "user").where({ name }).getResult();

    return users;
  }
}
