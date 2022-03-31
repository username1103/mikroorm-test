import { MikroORM, ReflectMetadataProvider } from "@mikro-orm/core";
import type { MySqlDriver } from "@mikro-orm/mysql";

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

    connect: false,
  });

  return orm;
};
