import { Platform, Type } from "@mikro-orm/core";
import { OrderInfoSauceType } from "./OrderInfoSauceType";

export class OrderInfoSauceTypeTransformer extends Type<
  OrderInfoSauceType,
  number
> {
  convertToDatabaseValue(
    value: OrderInfoSauceType,
    platform: Platform,
    fromQuery?: boolean
  ): number {
    return value.code;
  }

  convertToJSValue(value: number, platform: Platform): OrderInfoSauceType {
    return OrderInfoSauceType.valueOf(value);
  }
}
