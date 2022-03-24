import { Enum, EnumType } from "ts-jenum";
import { IEnumType } from "../../../types/IEnumType";

@Enum("_code")
export class OrderInfoReturnStatus
  extends EnumType<OrderInfoReturnStatus>()
  implements IEnumType<OrderInfoReturnStatus>
{
  static readonly NOT_PICK_UP = new OrderInfoReturnStatus(0, "미픽업");

  static readonly NOT_RETURN = new OrderInfoReturnStatus(1, "미반납");

  static readonly RETURNED = new OrderInfoReturnStatus(2, "반납");

  static readonly RATE_RETURN = new OrderInfoReturnStatus(3, "지각반납");

  static readonly EXPIRED = new OrderInfoReturnStatus(4, "기간만료");

  constructor(private readonly _code: number, private readonly _name: string) {
    super();
  }

  get code(): number {
    return this._code;
  }

  get name(): string {
    return this._name;
  }

  equals(v: OrderInfoReturnStatus): boolean {
    return this.code === v.code;
  }
}
