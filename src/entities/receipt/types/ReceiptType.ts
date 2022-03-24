import { Enum, EnumType } from "ts-jenum";
import { IEnumType } from "../../../types/IEnumType";

@Enum("_code")
export class ReceiptType
  extends EnumType<ReceiptType>()
  implements IEnumType<ReceiptType>
{
  static readonly EVIDENCE_OF_EXPENDITURE = new ReceiptType(0, "지출증빙");

  static readonly INCOME_DEDUTION = new ReceiptType(1, "소득공제");

  constructor(private readonly _code: number, private readonly _name: string) {
    super();
  }

  get code(): number {
    return this._code;
  }

  get name(): string {
    return this._name;
  }

  equals(v: ReceiptType): boolean {
    return this.code === v.code;
  }
}
