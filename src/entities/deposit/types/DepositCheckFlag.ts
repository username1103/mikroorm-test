import { Enum, EnumType } from "ts-jenum";
import { IEnumType } from "../../../types/IEnumType";

@Enum("_code")
export class DepositCheckFlag
  extends EnumType<DepositCheckFlag>()
  implements IEnumType<DepositCheckFlag>
{
  static readonly NOT_CHECKED = new DepositCheckFlag(0, "미확인");

  static readonly CHECKED = new DepositCheckFlag(1, "확인");

  constructor(private readonly _code: number, private readonly _name: string) {
    super();
  }

  get code(): number {
    return this._code;
  }

  get name(): string {
    return this._name;
  }

  equals(v: DepositCheckFlag): boolean {
    return this.code === v.code;
  }
}
