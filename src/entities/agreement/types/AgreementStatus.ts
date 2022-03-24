import { Enum, EnumType } from "ts-jenum";
import { IEnumType } from "../../../types/IEnumType";

@Enum("_code")
export class AgreementStatus
  extends EnumType<AgreementStatus>()
  implements IEnumType<AgreementStatus>
{
  static readonly DISAGREE = new AgreementStatus(0, "동의안함");

  static readonly AGREE = new AgreementStatus(1, "동의");

  constructor(private readonly _code: number, private readonly _name: string) {
    super();
  }

  get code(): number {
    return this._code;
  }

  get name(): string {
    return this._name;
  }

  equals(v: AgreementStatus): boolean {
    return this.code === v.code;
  }
}
