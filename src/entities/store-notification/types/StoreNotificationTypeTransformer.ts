import { Platform, Type } from "@mikro-orm/core";
import { StoreNotificationType } from "./StoreNotificationType";

export class StoreNotificationTypeTransformer extends Type<
  StoreNotificationType,
  number
> {
  convertToDatabaseValue(
    value: StoreNotificationType,
    platform: Platform,
    fromQuery?: boolean
  ): number {
    return value.code;
  }

  convertToJSValue(value: number, platform: Platform): StoreNotificationType {
    return StoreNotificationType.valueOf(value);
  }
}
