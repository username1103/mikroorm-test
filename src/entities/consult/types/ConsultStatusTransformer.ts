import { Platform, Type } from "@mikro-orm/core";
import { ConsultStatus } from "./ConsultStatus";

export class ConsultStatusTransformer extends Type<ConsultStatus, number> {
  convertToDatabaseValue(
    value: ConsultStatus,
    platform: Platform,
    fromQuery?: boolean
  ): number {
    return value.code;
  }

  convertToJSValue(value: number, platform: Platform): ConsultStatus {
    return ConsultStatus.valueOf(value);
  }
}
