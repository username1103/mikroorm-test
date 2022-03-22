import {
  MikroORM,
  ReflectMetadataProvider,
  RequestContext,
} from "@mikro-orm/core";
import type { MySqlDriver } from "@mikro-orm/mysql";
import { Author } from "../author/author.entity";
import { AuthorRepository } from "../author/author.repository";

export const init = async () => {
  const orm = await MikroORM.init<MySqlDriver>({
    entities: ["./build/**/*.entity.js"], // path to our JS entities (dist), relative to `baseDir`
    entitiesTs: ["./src/**/*.entity.ts"], // path to our TS entities (src), relative to `baseDir`
    baseDir: process.cwd(),
    metadataProvider: ReflectMetadataProvider,
    dbName: "test",
    type: "mysql",
    debug: true,
    host: "localhost",
    port: 3306,
    user: "root",
    password: "admin",
    pool: {
      max: 50,
    },
    allowGlobalContext: true,
  });

  const generator = orm.getSchemaGenerator();

  const dropDump = await generator.getDropSchemaSQL();
  console.log(dropDump);

  const createDump = await generator.getCreateSchemaSQL();
  console.log(createDump);

  const updateDump = await generator.getUpdateSchemaSQL();
  console.log(updateDump);

  const dropAndCreateDump = await generator.generate();
  console.log(dropAndCreateDump);

  await generator.refreshDatabase(); // ensure db exists and is fresh
  await generator.clearDatabase(); // removes all data

  const em = orm.em;
  console.log(em);

  const author = new Author({ name: "test" });
  em.persist(author);

  const repo = em.getRepository(Author);

  const savedAuthor = await repo.findByName("test");
  savedAuthor.updateName("test2");

  await em.flush();
};
