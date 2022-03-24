import { Platform, Type } from "@mikro-orm/core";
import { UserType } from "./UserType";

export class UserTypeTransformer extends Type<UserType, number> {
  convertToDatabaseValue(
    value: UserType,
    platform: Platform,
    fromQuery?: boolean
  ): number {
    return value.code;
  }

  convertToJSValue(value: number, platform: Platform): UserType {
    return UserType.valueOf(value);
  }
}
