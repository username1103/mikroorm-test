import { Enum, EnumType } from "ts-jenum";
import { IEnumType } from "../../../types/IEnumType";

@Enum("_code")
export class ProductStatus
  extends EnumType<ProductStatus>()
  implements IEnumType<ProductStatus>
{
  static readonly HIDDEN = new ProductStatus(0, "숨김");

  static readonly DISPLAY = new ProductStatus(1, "표시");

  constructor(private readonly _code: number, private readonly _name: string) {
    super();
  }

  get code(): number {
    return this._code;
  }

  get name(): string {
    return this._name;
  }

  equals(v: ProductStatus): boolean {
    return this.code === v.code;
  }
}
