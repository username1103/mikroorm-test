import { Platform, Type } from "@mikro-orm/core";
import { OrderCouponStatus } from "./OrderCouponStatus";

export class OrderCouponStatusTransformer extends Type<
  OrderCouponStatus,
  number
> {
  convertToDatabaseValue(
    value: OrderCouponStatus,
    platform: Platform,
    fromQuery?: boolean
  ): number {
    return value.code;
  }

  convertToJSValue(value: number, platform: Platform): OrderCouponStatus {
    return OrderCouponStatus.valueOf(value);
  }
}
