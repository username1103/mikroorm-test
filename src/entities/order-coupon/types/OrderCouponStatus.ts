import { Enum, EnumType } from "ts-jenum";

@Enum("_code")
export class OrderCouponStatus extends EnumType<OrderCouponStatus>() {
  static readonly USED = new OrderCouponStatus(0, "사용");

  static readonly RETURNED = new OrderCouponStatus(1, "반환");

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
