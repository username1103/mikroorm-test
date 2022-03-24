import { Enum, EnumType } from "ts-jenum";
import { IEnumType } from "../../../types/IEnumType";

@Enum("_code")
export class CouponStatus
  extends EnumType<CouponStatus>()
  implements IEnumType<CouponStatus>
{
  static readonly REGISTERABLE = new CouponStatus(0, "등록가능");

  static readonly EXCEEDED = new CouponStatus(1, "소진됨");

  static readonly FORBBIDDEN = new CouponStatus(2, "등록불가");

  constructor(private readonly _code: number, private readonly _name: string) {
    super();
  }

  get code(): number {
    return this._code;
  }

  get name(): string {
    return this._name;
  }

  equals(v: CouponStatus): boolean {
    return this.code === v.code;
  }
}
