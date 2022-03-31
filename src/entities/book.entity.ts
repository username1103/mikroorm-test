import {
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Property,
  wrap,
} from "@mikro-orm/core";
import { Author } from "./author.entity";

@Entity()
export class Book {
  @PrimaryKey({ name: "book_id", autoincrement: true })
  private id: number;

  @Property()
  private name: string;

  @ManyToOne("Author", {
    name: "author_id",
    wrappedReference: true,
    inversedBy: "books",
  })
  private author: IdentifiedReference<Author>;

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  async getAuthor() {
    const author = await this.author.load();
    return author;
  }

  setName(name: string) {
    this.name = name;
  }

  setAuthor(author: Author) {
    this.author = wrap(author).toReference();
  }
}
