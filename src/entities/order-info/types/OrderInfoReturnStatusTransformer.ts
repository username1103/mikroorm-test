import { Platform, Type } from "@mikro-orm/core";
import { OrderInfoReturnStatus } from "./OrderInfoReturnStatus";

export class OrderInfoReturnStatusTransformer extends Type<
  OrderInfoReturnStatus,
  number
> {
  convertToDatabaseValue(
    value: OrderInfoReturnStatus,
    platform: Platform,
    fromQuery?: boolean
  ): number {
    return value.code;
  }

  convertToJSValue(value: number, platform: Platform): OrderInfoReturnStatus {
    return OrderInfoReturnStatus.valueOf(value);
  }
}
