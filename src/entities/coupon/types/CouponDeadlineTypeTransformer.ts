import { Platform, Type } from "@mikro-orm/core";
import { CouponDeadlineType } from "./CouponDeadlineType";

export class CouponDeadlineTypeTransformer extends Type<
  CouponDeadlineType,
  number
> {
  convertToDatabaseValue(
    value: CouponDeadlineType,
    platform: Platform,
    fromQuery?: boolean
  ): number {
    return value.code;
  }

  convertToJSValue(value: number, platform: Platform): CouponDeadlineType {
    return CouponDeadlineType.valueOf(value);
  }
}
