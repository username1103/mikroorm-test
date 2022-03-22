import {
  Entity,
  EntityRepositoryType,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { UserRepository } from "./user.repository";

@Entity({ customRepository: () => UserRepository })
export class User {
  [EntityRepositoryType]?: UserRepository;

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
