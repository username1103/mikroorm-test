import { Enum, EnumType } from "ts-jenum";
import { IEnumType } from "../../../types/IEnumType";

@Enum("_code")
export class ConsultStatus
  extends EnumType<ConsultStatus>()
  implements IEnumType<ConsultStatus>
{
  static readonly WILL_BE_OPEN = new ConsultStatus(0, "영업예정");

  static readonly OPEND = new ConsultStatus(1, "영업중");

  constructor(private readonly _code: number, private readonly _name: string) {
    super();
  }

  get code(): number {
    return this._code;
  }

  get name(): string {
    return this._name;
  }

  equals(v: ConsultStatus): boolean {
    return this.code === v.code;
  }
}
