import { Platform, Type } from "@mikro-orm/core";
import { ProductStatus } from "./ProductStatus";

export class ProductStatusTransformer extends Type<ProductStatus, number> {
  convertToDatabaseValue(
    value: ProductStatus,
    platform: Platform,
    fromQuery?: boolean
  ): number {
    return value.code;
  }

  convertToJSValue(value: number, platform: Platform): ProductStatus {
    return ProductStatus.valueOf(value);
  }
}
