import { Enum, EnumType } from "ts-jenum";
import { IEnumType } from "../../../types/IEnumType";

@Enum("_code")
export class ProductVeganType
  extends EnumType<ProductVeganType>()
  implements IEnumType<ProductVeganType>
{
  static readonly NORMAL = new ProductVeganType(0, "일반");

  static readonly VEGAN = new ProductVeganType(1, "비건");

  constructor(private readonly _code: number, private readonly _name: string) {
    super();
  }

  get code(): number {
    return this._code;
  }

  get name(): string {
    return this._name;
  }

  equals(v: ProductVeganType): boolean {
    return this.code === v.code;
  }
}
