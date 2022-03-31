import { MikroORM } from "@mikro-orm/core";
import { EntityManager, MySqlDriver } from "@mikro-orm/mysql";
import { init } from "../src/config/config";
import { Author } from "../src/entities/author.entity";
import { Book } from "../src/entities/book.entity";

describe("create test", () => {
  let orm: MikroORM<MySqlDriver>;
  let em: EntityManager;

  beforeAll(async () => {
    orm = await init();
  });

  afterAll(async () => {
    await orm.close();
  });

  describe("일반 CRUD 테스트", () => {
    beforeEach(async () => {
      const generator = orm.getSchemaGenerator();
      generator.clearDatabase({ truncate: false });

      em = orm.em.fork();
    });

    test("일반 생성 테스트", async () => {
      // given
      const author = new Author();
      author.setName("test");

      // when
      em.persist(author);
      await em.flush();

      // then
      const savedAuthor = await em.findOne(Author, { id: author.getId() });
      expect(savedAuthor.getId()).toBeDefined();
      expect(savedAuthor.getName()).toEqual("test");
    });

    test("일반 업데이트 테스트", async () => {
      // given
      const author = new Author();
      author.setName("test");
      em.persist(author);
      await em.flush();

      // when
      author.setName("test2");
      await em.flush();

      // then
      const savedAuthor = await em.findOne(Author, { id: author.getId() });
      expect(savedAuthor.getId()).toBeDefined();
      expect(savedAuthor.getName()).toEqual("test2");
    });
  });

  describe("many-to-one, one-to-many test", () => {
    beforeEach(async () => {
      const generator = orm.getSchemaGenerator();
      await generator.refreshDatabase();
      await generator.clearDatabase({ truncate: false });
    });

    test("다대일 추가", async () => {
      // given
      const author = new Author();
      author.setName("test");

      const book1 = new Book();
      book1.setName("book1");
      const book2 = new Book();
      book2.setName("book2");
      const book3 = new Book();
      book3.setName("book3");

      author.addBook(book1);
      author.addBook(book2);
      author.addBook(book3);

      // when
      em.persist(author);
      await em.flush();

      // then
      const em2 = orm.em.fork();
      const savedAuthor = await em2.findOne(Author, { id: author.getId() });
      const savedBooks = await savedAuthor.getBooks();
      expect(savedBooks).toHaveLength(3);
    });

    test("one-to-many - if make one book and persist, then book id is defined", async () => {
      // given
      const author = new Author();
      author.setName("test");

      const book1 = new Book();
      book1.setName("book1");
      const book2 = new Book();
      book2.setName("book2");
      const book3 = new Book();
      book3.setName("book3");
      book1.setAuthor(author);
      author.addBook(book1);

      // when
      em.persist(author);
      await em.flush();

      // then
      expect(book1.getId()).toBeDefined();
    });

    test("one-to-many - if make three book and persist, then book ids aren't defined", async () => {
      // given
      const author = new Author();
      author.setName("test");

      const book1 = new Book();
      book1.setName("book1");
      const book2 = new Book();
      book2.setName("book2");
      const book3 = new Book();
      book3.setName("book3");
      book1.setAuthor(author);
      author.addBook(book1);
      book2.setAuthor(author);
      author.addBook(book2);
      book3.setAuthor(author);
      author.addBook(book3);

      // when
      em.persist(author);
      await em.flush();

      // then
      expect(book1.getId()).toBeUndefined();
    });
  });
});
