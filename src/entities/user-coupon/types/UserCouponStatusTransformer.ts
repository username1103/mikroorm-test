import { Platform, Type } from "@mikro-orm/core";
import { UserCouponStatus } from "./UserCouponStatus";

export class UserCouponStatusTransformer extends Type<
  UserCouponStatus,
  number
> {
  convertToDatabaseValue(
    value: UserCouponStatus,
    platform: Platform,
    fromQuery?: boolean
  ): number {
    return value.code;
  }

  convertToJSValue(value: number, platform: Platform): UserCouponStatus {
    return UserCouponStatus.valueOf(value);
  }
}
