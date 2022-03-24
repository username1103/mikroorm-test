import { Enum, EnumType } from "ts-jenum";
import { IEnumType } from "../../../types/IEnumType";

@Enum("_code")
export class CouponType
  extends EnumType<CouponType>()
  implements IEnumType<CouponType>
{
  static readonly SW_COUPON = new CouponType(0, "샐윅쿠폰");

  static readonly STORE_COUPON = new CouponType(1, "가게쿠폰");

  constructor(private readonly _code: number, private readonly _name: string) {
    super();
  }

  get code(): number {
    return this._code;
  }

  get name(): string {
    return this._name;
  }

  equals(v: CouponType): boolean {
    return this.code === v.code;
  }
}
