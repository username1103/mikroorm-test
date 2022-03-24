import { Platform, Type } from "@mikro-orm/core";
import { DepositCheckFlag } from "./DepositCheckFlag";

export class DepositCheckFlagTransformer extends Type<
  DepositCheckFlag,
  number
> {
  convertToDatabaseValue(
    value: DepositCheckFlag,
    platform: Platform,
    fromQuery?: boolean
  ): number {
    return value.code;
  }

  convertToJSValue(value: number, platform: Platform): DepositCheckFlag {
    return DepositCheckFlag.valueOf(value);
  }
}
