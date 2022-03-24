import { Enum, EnumType } from "ts-jenum";

@Enum("_code")
export class UserCouponStatus extends EnumType<UserCouponStatus>() {
  static readonly USABLE = new UserCouponStatus(0, "사용가능");

  static readonly USED = new UserCouponStatus(1, "사용됨");

  static readonly FORBBIDEN = new UserCouponStatus(2, "금지됨");

  constructor(private readonly _code: number, private readonly _name: string) {
    super();
  }

  get code(): number {
    return this._code;
  }

  get name(): string {
    return this._name;
  }
}
