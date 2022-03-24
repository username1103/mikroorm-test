import { Platform, Type } from "@mikro-orm/core";
import { CouponStatus } from "./CouponStatus";

export class CouponStatusTransformer extends Type<CouponStatus, number> {
  convertToDatabaseValue(
    value: CouponStatus,
    platform: Platform,
    fromQuery?: boolean
  ): number {
    return value.code;
  }

  convertToJSValue(value: number, platform: Platform): CouponStatus {
    return CouponStatus.valueOf(value);
  }
}
