import { Platform, Type } from "@mikro-orm/core";
import { UserSocialType } from "./UserSocialType";

export class UserSocialTypeTransformer extends Type<UserSocialType, string> {
  convertToDatabaseValue(
    value: UserSocialType,
    platform: Platform,
    fromQuery?: boolean
  ): string {
    return value.code;
  }

  convertToJSValue(value: string, platform: Platform): UserSocialType {
    return UserSocialType.valueOf(value);
  }
}
