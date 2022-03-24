import { Enum, EnumType } from "ts-jenum";
import { IEnumType } from "../../../types/IEnumType";

@Enum("_code")
export class OrderInfoStatus
  extends EnumType<OrderInfoStatus>()
  implements IEnumType<OrderInfoStatus>
{
  static readonly NOT_DEPOSIT = new OrderInfoStatus(0, "미입금");

  static readonly DEPOSIT = new OrderInfoStatus(1, "입금");

  static readonly CANCELED = new OrderInfoStatus(2, "취소");

  static readonly REQUEST_REFUND = new OrderInfoStatus(3, "환불요청");

  static readonly REFUNDED = new OrderInfoStatus(4, "환불완료");

  static readonly PENDING_BY_HOLIDAY = new OrderInfoStatus(5, "휴무처리대기");

  constructor(private readonly _code: number, private readonly _name: string) {
    super();
  }

  get code(): number {
    return this._code;
  }

  get name(): string {
    return this._name;
  }

  equals(v: OrderInfoStatus): boolean {
    return this.code === v.code;
  }
}
