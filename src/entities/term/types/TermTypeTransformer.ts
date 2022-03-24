import { Platform, Type } from "@mikro-orm/core";
import { TermType } from "./TermType";

export class TermTypeTransformer extends Type<TermType, number> {
  convertToDatabaseValue(
    value: TermType,
    platform: Platform,
    fromQuery?: boolean
  ): number {
    return value.code;
  }

  convertToJSValue(value: number, platform: Platform): TermType {
    return TermType.valueOf(value);
  }
}
