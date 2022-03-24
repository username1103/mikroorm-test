import { Platform, Type } from "@mikro-orm/core";
import { AgreementStatus } from "./AgreementStatus";

export class AgreementStatusTransformer extends Type<AgreementStatus, number> {
  convertToDatabaseValue(
    value: AgreementStatus,
    platform: Platform,
    fromQuery?: boolean
  ): number {
    return value.code;
  }

  convertToJSValue(value: number, platform: Platform): AgreementStatus {
    return AgreementStatus.valueOf(value);
  }
}
