import {
  Entity,
  EntityRepositoryType,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { AuthorRepository } from "./author.repository";

@Entity({ customRepository: () => AuthorRepository })
export class Author {
  [EntityRepositoryType]?: AuthorRepository;

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

  updateName(name: string) {
    this.name = name;
  }
}
