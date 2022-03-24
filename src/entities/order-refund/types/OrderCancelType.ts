import { Enum, EnumType } from "ts-jenum";
import { IEnumType } from "../../../types/IEnumType";

@Enum("_code")
export class OrderCancelType
  extends EnumType<OrderCancelType>()
  implements IEnumType<OrderCancelType>
{
  static readonly STORE_HOLIDAY = new OrderCancelType(0, "가게휴무");

  static readonly CUSTOMER_CHANGE = new OrderCancelType(1, "고객변심");

  static readonly COMPLAIN = new OrderCancelType(2, "컴플레인");

  static readonly STORE_CLOSED = new OrderCancelType(3, "협약종료");

  static readonly ETC = new OrderCancelType(4, "기타");

  constructor(private readonly _code: number, private readonly _name: string) {
    super();
  }

  get code(): number {
    return this._code;
  }

  get name(): string {
    return this._name;
  }

  equals(v: OrderCancelType): boolean {
    return this.code === v.code;
  }
}
