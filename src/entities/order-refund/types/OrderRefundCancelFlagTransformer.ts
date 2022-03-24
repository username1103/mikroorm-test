import { Platform, Type } from "@mikro-orm/core";
import { OrderRefundCancelFlag } from "./OrderRefundCancelFlag";

export class OrderRefundCancelFlagTransformer extends Type<
  OrderRefundCancelFlag,
  number
> {
  convertToDatabaseValue(
    value: OrderRefundCancelFlag,
    platform: Platform,
    fromQuery?: boolean
  ): number {
    return value.code;
  }

  convertToJSValue(value: number, platform: Platform): OrderRefundCancelFlag {
    return OrderRefundCancelFlag.valueOf(value);
  }
}
