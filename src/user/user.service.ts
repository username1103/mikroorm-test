import { EntityManager } from "@mikro-orm/mysql";
import { Service } from "typedi";
import { InjectRepository } from "../decorators/InjectRepository";
import { InjectEntityManager } from "../decorators/InjectEntityManager";
import { Item } from "../item/item.entity";
import { ItemRepository } from "../item/item.repository";
import { User } from "./user.entity";
import { UserRepository } from "./user.repository";

@Service()
export class UserService {
  //   private readonly userRepository: UserRepository;

  constructor(
    @InjectRepository(User) private readonly userRepository: UserRepository,
    @InjectRepository(Item) private readonly itemRepository: ItemRepository,
    @InjectEntityManager() private readonly em: EntityManager
  ) {
    // this.userRepository = RequestContext.getEntityManager().getRepository(User);
  }

  async create(name: string) {
    const user = new User({ name });
    await this.userRepository.save(user);
    console.log(await this.userRepository.findOne({ id: 1 }));
    const item = new Item({ name });
    await this.itemRepository.save(item);

    await this.em.flush();
    return { user, item };
  }
}
