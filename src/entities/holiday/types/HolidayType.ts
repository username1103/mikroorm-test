import { Enum, EnumType } from "ts-jenum";
import { IEnumType } from "../../../types/IEnumType";

@Enum("_code")
export class HolidayType
  extends EnumType<HolidayType>()
  implements IEnumType<HolidayType>
{
  static readonly NORMAL = new HolidayType(0, "휴무");

  static readonly NO_INGREDIRENT = new HolidayType(1, "재료소진");

  constructor(private readonly _code: number, private readonly _name: string) {
    super();
  }

  get code(): number {
    return this._code;
  }

  get name(): string {
    return this._name;
  }

  equals(v: HolidayType): boolean {
    return this.code === v.code;
  }
}
