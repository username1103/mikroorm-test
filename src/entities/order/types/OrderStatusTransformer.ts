import { Platform, Type } from "@mikro-orm/core";
import { OrderStatus } from "./OrderStatus";

export class OrderStatusTransformer extends Type<OrderStatus, number> {
  convertToDatabaseValue(
    value: OrderStatus,
    platform: Platform,
    fromQuery?: boolean
  ): number {
    return value.code;
  }

  convertToJSValue(value: number, platform: Platform): OrderStatus {
    return OrderStatus.valueOf(value);
  }
}
