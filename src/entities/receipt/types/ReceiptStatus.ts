import { Enum, EnumType } from "ts-jenum";
import { IEnumType } from "../../../types/IEnumType";

@Enum("_code")
export class ReceiptStatus
  extends EnumType<ReceiptStatus>()
  implements IEnumType<ReceiptStatus>
{
  static readonly REQUEST = new ReceiptStatus(0, "요청");

  static readonly COMPLETED = new ReceiptStatus(1, "완료");

  constructor(private readonly _code: number, private readonly _name: string) {
    super();
  }

  get code(): number {
    return this._code;
  }

  get name(): string {
    return this._name;
  }

  equals(v: ReceiptStatus): boolean {
    return this.code === v.code;
  }
}
