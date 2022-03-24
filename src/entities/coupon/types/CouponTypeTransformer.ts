import { Platform, Type } from "@mikro-orm/core";
import { CouponType } from "./CouponType";

export class CouponTypeTransformer extends Type<CouponType, number> {
  convertToDatabaseValue(
    value: CouponType,
    platform: Platform,
    fromQuery?: boolean
  ): number {
    return value.code;
  }

  convertToJSValue(value: number, platform: Platform): CouponType {
    return CouponType.valueOf(value);
  }
}
