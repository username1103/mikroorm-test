import { Enum, EnumType } from "ts-jenum";
import { IEnumType } from "../../../types/IEnumType";

@Enum("_code")
export class OrderStatus
  extends EnumType<OrderStatus>()
  implements IEnumType<OrderStatus>
{
  static readonly NOT_DEPOSIT = new OrderStatus(0, "미입금");

  static readonly DEPOSIT = new OrderStatus(1, "입금");

  static readonly CANCELED = new OrderStatus(2, "취소");

  static readonly REQUEST_REFUND = new OrderStatus(3, "환불요청");

  static readonly REFUNDED = new OrderStatus(4, "환불완료");

  constructor(private readonly _code: number, private readonly _name: string) {
    super();
  }

  get code(): number {
    return this._code;
  }

  get name(): string {
    return this._name;
  }

  equals(v: OrderStatus): boolean {
    return this.code === v.code;
  }
}
