import { Platform, Type } from "@mikro-orm/core";
import { ProgramStatus } from "./ProgramStatus";

export class ProgramStatusTransformer extends Type<ProgramStatus, number> {
  convertToDatabaseValue(
    value: ProgramStatus,
    platform: Platform,
    fromQuery?: boolean
  ): number {
    return value.code;
  }

  convertToJSValue(value: number, platform: Platform): ProgramStatus {
    return ProgramStatus.valueOf(value);
  }
}
