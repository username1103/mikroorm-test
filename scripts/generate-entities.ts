import { MikroORM, ReflectMetadataProvider } from "@mikro-orm/core";

(async () => {
  const orm = await MikroORM.init({
    discovery: {
      // we need to disable validation for no entities
      warnWhenNoEntities: false,
    },
    entities: ["./build/entities/**/*.entity.js"], // path to our JS entities (dist), relative to `baseDir`
    entitiesTs: ["./src/entities/**/*.entity.ts"], // path to our TS entities (src), relative to `baseDir`
    baseDir: process.cwd(),
    metadataProvider: ReflectMetadataProvider,
    // dbName: "saladweeks",
    // type: "mysql",
    // debug: true,
    // host: "saladweeks.cfh5jnv4ibuy.ap-northeast-2.rds.amazonaws.com",
    // port: 3306,
    // user: "admin",
    // password: "aorepakfmzh1221",
    pool: {
      max: 50,
    },
    // ...
  });
  const generator = orm.getEntityGenerator();
  const dump = await generator.generate({
    save: true,
    baseDir: process.cwd() + "/my-entities",
  });
  console.log(dump);
  await orm.close(true);
})();
