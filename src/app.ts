import { RequestContext } from "@mikro-orm/core";
import express, { Express } from "express";
import path from "path";
import { useExpressServer, useContainer } from "routing-controllers";
import { Service, Container } from "typedi";
import { init } from "./config/config";

@Service()
export class App {
  private app: Express;

  constructor() {
    useContainer(Container);

    this.app = express();
  }

  private initMiddleware() {
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
  }

  private initRouter() {
    useExpressServer(this.app, {
      routePrefix: "/api",
      controllers: [path.join(__dirname, "/**/*.controller.*")],
      classTransformer: true,
      validation: true,
    });
  }

  public getApp() {
    return this.app;
  }

  public async listen() {
    console.log("----- Start Server Application -----");
    this.initMiddleware();
    console.log("----- Start Database Connection -----");
    const orm = await init();

    console.log("- Connected to MySQL with MikroORM");

    this.app.use((req, res, next) => {
      RequestContext.create(orm.em, next);
    });

    this.initRouter();

    const server = this.app.listen(3000);
    console.log(`------- Start Express Server -------`);
    console.log(`- Listening Port: ${3000}`);
    console.log("------------------------------------");

    return server;
  }
}
