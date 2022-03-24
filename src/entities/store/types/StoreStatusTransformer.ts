import { Platform, Type } from "@mikro-orm/core";
import { StoreStatus } from "./StoreStatus";

export class StoreStatusTransformer extends Type<StoreStatus, number> {
  convertToDatabaseValue(
    value: StoreStatus,
    platform: Platform,
    fromQuery?: boolean
  ): number {
    return value.code;
  }

  convertToJSValue(value: number, platform: Platform): StoreStatus {
    return StoreStatus.valueOf(value);
  }
}
