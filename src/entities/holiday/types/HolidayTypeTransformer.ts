import { Platform, Type } from "@mikro-orm/core";
import { HolidayType } from "./HolidayType";

export class HolidayTypeTransformer extends Type<HolidayType, number> {
  convertToDatabaseValue(
    value: HolidayType,
    platform: Platform,
    fromQuery?: boolean
  ): number {
    return value.code;
  }

  convertToJSValue(value: number, platform: Platform): HolidayType {
    return HolidayType.valueOf(value);
  }
}
