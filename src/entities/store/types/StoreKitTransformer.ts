import { Platform, Type } from "@mikro-orm/core";
import { StoreKit } from "./StoreKit";

export class StoreKitTransformer extends Type<StoreKit, string> {
  convertToDatabaseValue(
    value: StoreKit,
    platform: Platform,
    fromQuery?: boolean
  ): string {
    return value.allKits.map((storeKitType) => storeKitType.status).join("");
  }

  convertToJSValue(value: string, platform: Platform): StoreKit {
    return new StoreKit(value);
  }
}
