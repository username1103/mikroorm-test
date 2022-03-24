import { Enum, EnumType } from "ts-jenum";
import { IEnumType } from "../../../types/IEnumType";

@Enum("_code")
export class StoreNotificationType
  extends EnumType<StoreNotificationType>()
  implements IEnumType<StoreNotificationType>
{
  static readonly NORMAL = new StoreNotificationType(0, "일반알림");

  static readonly REQUIRED = new StoreNotificationType(1, "필수확인알림");

  constructor(private readonly _code: number, private readonly _name: string) {
    super();
  }

  get code(): number {
    return this._code;
  }

  get name(): string {
    return this._name;
  }

  equals(v: StoreNotificationType): boolean {
    return this.code === v.code;
  }
}
