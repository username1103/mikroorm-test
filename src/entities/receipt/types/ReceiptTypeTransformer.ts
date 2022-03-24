import { Platform, Type } from "@mikro-orm/core";
import { ReceiptType } from "./ReceiptType";

export class ReceiptTypeTransformer extends Type<ReceiptType, number> {
  convertToDatabaseValue(
    value: ReceiptType,
    platform: Platform,
    fromQuery?: boolean
  ): number {
    return value.code;
  }

  convertToJSValue(value: number, platform: Platform): ReceiptType {
    return ReceiptType.valueOf(value);
  }
}
