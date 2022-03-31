import { MikroORM } from "@mikro-orm/core";
import { EntityManager, MySqlDriver } from "@mikro-orm/mysql";
import { init } from "../src/config/config";
import { Author } from "../src/entities/author.entity";

describe("영속성 테스트", () => {
  let orm: MikroORM<MySqlDriver>;
  let em: EntityManager;

  beforeAll(async () => {
    orm = await init();
  });

  afterAll(async () => {
    await orm.close();
  });

  beforeEach(async () => {
    const generator = orm.getSchemaGenerator();
    generator.clearDatabase({ truncate: false });

    em = orm.em.fork();
  });

  test("데이터를 추가후 조회해도, 쿼리가 안나가는가(엔티티가 모두 같은가)", async () => {
    // given
    const author = new Author();
    author.setName("test");
    em.persist(author);
    await em.flush();

    // when
    const author1 = await em.findOne(Author, { id: author.getId() });

    // then
    expect(author).not.toBeNull();
    expect(author1).not.toBeNull();
    expect(author).toEqual(author1);
  });
});
