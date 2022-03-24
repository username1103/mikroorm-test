import { Platform, Type } from "@mikro-orm/core";
import { KitType } from "./KitType";

export class KitTypeTransformer extends Type<KitType, number> {
  convertToDatabaseValue(
    value: KitType,
    platform: Platform,
    fromQuery?: boolean
  ): number {
    return value.code;
  }

  convertToJSValue(value: number, platform: Platform): KitType {
    return KitType.valueOf(value);
  }
}
