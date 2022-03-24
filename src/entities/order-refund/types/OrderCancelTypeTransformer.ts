import { Platform, Type } from "@mikro-orm/core";
import { OrderCancelType } from "./OrderCancelType";

export class OrderCancelTypeTransformer extends Type<OrderCancelType, number> {
  convertToDatabaseValue(
    value: OrderCancelType,
    platform: Platform,
    fromQuery?: boolean
  ): number {
    return value.code;
  }

  convertToJSValue(value: number, platform: Platform): OrderCancelType {
    return OrderCancelType.valueOf(value);
  }
}
