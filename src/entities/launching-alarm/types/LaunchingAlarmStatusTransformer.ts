import { Platform, Type } from "@mikro-orm/core";
import { LaunchingAlarmStatus } from "./LaunchingAlarmStatus";

export class LaunchingAlarmStatusTransformer extends Type<
  LaunchingAlarmStatus,
  string
> {
  convertToDatabaseValue(
    value: LaunchingAlarmStatus,
    platform: Platform,
    fromQuery?: boolean
  ): string {
    return value.code;
  }

  convertToJSValue(value: string, platform: Platform): LaunchingAlarmStatus {
    return LaunchingAlarmStatus.valueOf(value);
  }
}
