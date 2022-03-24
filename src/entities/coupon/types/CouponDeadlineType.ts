import { Enum, EnumType } from "ts-jenum";
import { IEnumType } from "../../../types/IEnumType";

@Enum("_code")
export class CouponDeadlineType
  extends EnumType<CouponDeadlineType>()
  implements IEnumType<CouponDeadlineType>
{
  static readonly INFINITY = new CouponDeadlineType(0, "무제한");

  static readonly DATE = new CouponDeadlineType(1, "날짜");

  static readonly PERIOD = new CouponDeadlineType(2, "기간");

  constructor(private readonly _code: number, private readonly _name: string) {
    super();
  }

  get code(): number {
    return this._code;
  }

  get name(): string {
    return this._name;
  }

  equals(v: CouponDeadlineType): boolean {
    return this.code === v.code;
  }
}
