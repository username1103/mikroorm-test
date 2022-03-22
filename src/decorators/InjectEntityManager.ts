import { RequestContext } from "@mikro-orm/core";
import Container from "typedi";

export function InjectEntityManager() {
  return function (object: any, propertyName: string, index?: number) {
    Container.registerHandler({
      object,
      propertyName,
      index,
      value: (containerInstance) => {
        const em = RequestContext.getEntityManager();
        if (!em) {
          throw new Error(
            "You have to call RequestContext.create() before InjectEntityManager()"
          );
        }
        return em;
      },
    });
  };
}
