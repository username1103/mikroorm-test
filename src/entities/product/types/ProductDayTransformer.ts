import { Platform, Type } from "@mikro-orm/core";
import { ProductDay } from "./ProductDay";

export class ProductDayTransformer extends Type<ProductDay, string> {
  convertToDatabaseValue(
    value: ProductDay,
    platform: Platform,
    fromQuery?: boolean
  ): string {
    return value.toString();
  }

  convertToJSValue(value: string, platform: Platform): ProductDay {
    return new ProductDay(value);
  }
}
