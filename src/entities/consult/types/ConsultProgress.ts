import { Enum, EnumType } from "ts-jenum";
import { IEnumType } from "../../../types/IEnumType";

@Enum("_code")
export class ConsultProgress
  extends EnumType<ConsultProgress>()
  implements IEnumType<ConsultProgress>
{
  static readonly APPLY = new ConsultProgress(0, "신청");

  static readonly COMPLETED = new ConsultProgress(1, "완료");

  static readonly CANCEL = new ConsultProgress(2, "취소");

  constructor(private readonly _code: number, private readonly _name: string) {
    super();
  }

  get code(): number {
    return this._code;
  }

  get name(): string {
    return this._name;
  }

  equals(v: ConsultProgress): boolean {
    return this.code === v.code;
  }
}
