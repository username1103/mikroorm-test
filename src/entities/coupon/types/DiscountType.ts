import { Enum, EnumType } from "ts-jenum";
import { IEnumType } from "../../../types/IEnumType";

@Enum("_code")
export class DiscountType
  extends EnumType<DiscountType>()
  implements IEnumType<DiscountType>
{
  static readonly NORMAL = new DiscountType(0, "일반할인");

  static readonly PERCENT = new DiscountType(1, "퍼센트할인");

  constructor(private readonly _code: number, private readonly _name: string) {
    super();
  }

  get code(): number {
    return this._code;
  }

  get name(): string {
    return this._name;
  }

  equals(v: DiscountType): boolean {
    return this.code === v.code;
  }
}
