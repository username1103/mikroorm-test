import { Platform, Type } from "@mikro-orm/core";
import { SubscribableAlarmStatus } from "./SubscribableAlarmStatus";

export class SubscribableAlarmStausTransformer extends Type<
  SubscribableAlarmStatus,
  string
> {
  convertToDatabaseValue(
    value: SubscribableAlarmStatus,
    platform: Platform,
    fromQuery?: boolean
  ): string {
    return value.code;
  }

  convertToJSValue(value: string, platform: Platform): SubscribableAlarmStatus {
    return SubscribableAlarmStatus.valueOf(value);
  }
}
