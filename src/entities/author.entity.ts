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
  private id!: number;

  @Property()
  private name!: string;

  @OneToMany("Book", "author")
  private books = new Collection<Book>(this);

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  async getBooks() {
    const books = await this.books.loadItems();
    return books;
  }

  setName(name: string) {
    this.name = name;
  }

  addBook(book: Book) {
    this.books.add(book);
  }
}
