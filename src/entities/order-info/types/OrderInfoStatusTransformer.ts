import { Platform, Type } from "@mikro-orm/core";
import { OrderInfoStatus } from "./OrderInfoStatus";

export class OrderInfoStatusTransformer extends Type<OrderInfoStatus, number> {
  convertToDatabaseValue(
    value: OrderInfoStatus,
    platform: Platform,
    fromQuery?: boolean
  ): number {
    return value.code;
  }

  convertToJSValue(value: number, platform: Platform): OrderInfoStatus {
    return OrderInfoStatus.valueOf(value);
  }
}
