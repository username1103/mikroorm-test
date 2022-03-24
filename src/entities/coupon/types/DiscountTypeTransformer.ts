import { Platform, Type } from "@mikro-orm/core";
import { DiscountType } from "./DiscountType";

export class DiscountTypeTransformer extends Type<DiscountType, number> {
  convertToDatabaseValue(
    value: DiscountType,
    platform: Platform,
    fromQuery?: boolean
  ): number {
    return value.code;
  }

  convertToJSValue(value: number, platform: Platform): DiscountType {
    return DiscountType.valueOf(value);
  }
}
