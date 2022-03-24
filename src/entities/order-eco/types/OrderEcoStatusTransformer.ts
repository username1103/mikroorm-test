import { Platform, Type } from "@mikro-orm/core";
import { OrderEcoStatus } from "./OrderEcoStatus";

export class OrderEcoStatusTransformer extends Type<OrderEcoStatus, number> {
  convertToDatabaseValue(
    value: OrderEcoStatus,
    platform: Platform,
    fromQuery?: boolean
  ): number {
    return value.code;
  }

  convertToJSValue(value: number, platform: Platform): OrderEcoStatus {
    return OrderEcoStatus.valueOf(value);
  }
}
