import { Platform, Type } from "@mikro-orm/core";

export class LaunchingAlarmNearbyAddressTransformer extends Type<
  string[],
  string
> {
  convertToDatabaseValue(
    value: string[],
    platform: Platform,
    fromQuery?: boolean
  ): string {
    return value.toString();
  }

  convertToJSValue(value: string, platform: Platform): string[] {
    return value.split(",");
  }
}
