import {
  Entity,
  EntityRepositoryType,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Author } from "./author.entity";

@Entity()
export class Book {
  @PrimaryKey({ name: "book_id", autoincrement: true })
  private _id: number;

  @Property()
  private _name: string;

  @ManyToOne(() => Author, { inversedBy: "books" })
  private _author: IdentifiedReference<Author>;

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get author() {
    return this._author;
  }

  setName(name: string) {
    this.setName(name);
  }
}
