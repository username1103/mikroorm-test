import { Enum, EnumType } from "ts-jenum";
import { IEnumType } from "../../../types/IEnumType";

@Enum("_code")
export class OrderInfoSauceType
  extends EnumType<OrderInfoSauceType>()
  implements IEnumType<OrderInfoSauceType>
{
  static readonly NEED = new OrderInfoSauceType(0, "필요");

  static readonly NOT_NEED = new OrderInfoSauceType(1, "필요없음");

  constructor(private readonly _code: number, private readonly _name: string) {
    super();
  }

  get code(): number {
    return this._code;
  }

  get name(): string {
    return this._name;
  }

  equals(v: OrderInfoSauceType): boolean {
    return this.code === v.code;
  }
}
