import { Enum, EnumType } from "ts-jenum";
import { IEnumType } from "../../../types/IEnumType";

@Enum("_code")
export class TermType
  extends EnumType<TermType>()
  implements IEnumType<TermType>
{
  static readonly NOT_REQUIRED = new TermType(0, "필수 아님");

  static readonly REQUIRED = new TermType(1, "필수");

  constructor(private readonly _code: number, private readonly _name: string) {
    super();
  }

  get code(): number {
    return this._code;
  }

  get name(): string {
    return this._name;
  }

  equals(v: TermType): boolean {
    return this.code === v.code;
  }
}
