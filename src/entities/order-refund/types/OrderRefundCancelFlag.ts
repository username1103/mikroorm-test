import { Enum, EnumType } from "ts-jenum";
import { IEnumType } from "../../../types/IEnumType";

@Enum("_code")
export class OrderRefundCancelFlag
  extends EnumType<OrderRefundCancelFlag>()
  implements IEnumType<OrderRefundCancelFlag>
{
  static readonly REQUEST = new OrderRefundCancelFlag(0, "요청");

  static readonly CANCEL = new OrderRefundCancelFlag(1, "취소");

  constructor(private readonly _code: number, private readonly _name: string) {
    super();
  }

  get code(): number {
    return this._code;
  }

  get name(): string {
    return this._name;
  }

  equals(v: OrderRefundCancelFlag): boolean {
    return this.code === v.code;
  }
}
