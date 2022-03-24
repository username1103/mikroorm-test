import { Platform, Type } from "@mikro-orm/core";
import { ReceiptStatus } from "./ReceiptStatus";

export class ReceiptStatusTransformer extends Type<ReceiptStatus, number> {
  convertToDatabaseValue(
    value: ReceiptStatus,
    platform: Platform,
    fromQuery?: boolean
  ): number {
    return value.code;
  }

  convertToJSValue(value: number, platform: Platform): ReceiptStatus {
    return ReceiptStatus.valueOf(value);
  }
}
