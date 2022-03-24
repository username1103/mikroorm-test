import { EntityManager } from "@mikro-orm/mysql";
import { Service } from "typedi";
import { InjectRepository } from "../decorators/InjectRepository";
import { InjectEntityManager } from "../decorators/InjectEntityManager";
import { User } from "../entities/user/User.entity";
import { UserRepository } from "./user.repository";
import { Account } from "../entities/account/Account.entity";

@Service()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: UserRepository,
    @InjectEntityManager() private readonly em: EntityManager
  ) {}

  async create(name: string, phone: string) {
    return { id: 1 };
  }

  async search(name: string) {
    const account = await this.em
      .qb(Account)
      .where({ user: { name: "김명일" } })
      .getSingleResult();

    console.log(account);
    console.log(await account.getUser());
    console.log(
      await this.em
        .qb(User, "user")
        .where({ id: 312 })
        .select(["user.usr_id", "user.usr_name"])
    );

    return this.userRepository.findByName(name);
  }
}
