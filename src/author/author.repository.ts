import { EntityRepository } from "@mikro-orm/mysql";
import { Author } from "./author.entity";

export class AuthorRepository extends EntityRepository<Author> {
  findByName(name: string) {
    return this.em.findOne(Author, { name });
  }
}
