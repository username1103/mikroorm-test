import { Enum, EnumType } from "ts-jenum";
import { IEnumType } from "../../../types/IEnumType";

@Enum("_code")
export class OrderEcoStatus
  extends EnumType<OrderEcoStatus>()
  implements IEnumType<OrderEcoStatus>
{
  static readonly RETURN_KIT = new OrderEcoStatus(0, "키트반환적립");

  static readonly SUBSCRIPTION = new OrderEcoStatus(1, "구독 신청");

  static readonly CANCEL_SUBSCRIPTION = new OrderEcoStatus(2, "구독 취소 반환");

  static readonly REQUEST_REFUND = new OrderEcoStatus(4, "환급신청");

  static readonly REFUNDED = new OrderEcoStatus(5, "환급완료");

  static readonly REFUND_ERROR = new OrderEcoStatus(6, "환급오류");

  static readonly ETC = new OrderEcoStatus(8, "기타");

  constructor(private readonly _code: number, private readonly _name: string) {
    super();
  }

  get code(): number {
    return this._code;
  }

  get name(): string {
    return this._name;
  }

  equals(v: OrderEcoStatus): boolean {
    return this.code === v.code;
  }
}
