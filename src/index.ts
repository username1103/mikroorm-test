import "reflect-metadata";
import { Server } from "http";
import Container from "typedi";
import { App } from "./app";

class ExpressApplication {
  private server?: Server;

  constructor(private readonly app: App) {}

  public start() {
    this.app
      .listen()
      .then((server) => {
        this.server = server;
      })
      .catch((err: Error) => {
        console.error(err);
        process.exit(1);
      });
  }
}

const application = new ExpressApplication(Container.get(App));

application.start();
