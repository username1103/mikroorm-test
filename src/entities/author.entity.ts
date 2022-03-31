import {
  Collection,
  Entity,
  EntityRepositoryType,
  OneToMany,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Book } from "./book.entity";

@Entity()
export class Author {
  @PrimaryKey({ name: "author_id", autoincrement: true })
  private _id: number;

  @Property()
  private _name: string;

  @OneToMany(() => Book, (book) => book.author)
  private _books = new Collection<Book>(this);

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get books() {
    return this._books;
  }

  setName(name: string) {
    this._name = name;
  }
}
