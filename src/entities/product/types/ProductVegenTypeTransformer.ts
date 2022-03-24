import { Platform, Type } from "@mikro-orm/core";
import { ProductVeganType } from "./ProductVeganType";

export class ProductVeganTypeTransformer extends Type<
  ProductVeganType,
  number
> {
  convertToDatabaseValue(
    value: ProductVeganType,
    platform: Platform,
    fromQuery?: boolean
  ): number {
    return value.code;
  }

  convertToJSValue(value: number, platform: Platform): ProductVeganType {
    return ProductVeganType.valueOf(value);
  }
}
