import { Platform, Type } from "@mikro-orm/core";
import { ConsultProgress } from "./ConsultProgress";

export class ConsultProgressTransformer extends Type<ConsultProgress, number> {
  convertToDatabaseValue(
    value: ConsultProgress,
    platform: Platform,
    fromQuery?: boolean
  ): number {
    return value.code;
  }

  convertToJSValue(value: number, platform: Platform): ConsultProgress {
    return ConsultProgress.valueOf(value);
  }
}
