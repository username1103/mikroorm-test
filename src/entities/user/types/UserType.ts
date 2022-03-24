import { Enum, EnumType } from "ts-jenum";
import { IEnumType } from "../../../types/IEnumType";

@Enum("_code")
export class UserType
  extends EnumType<UserType>()
  implements IEnumType<UserType>
{
  static readonly CUSTOMER = new UserType(0, "CUSTOMER");

  static readonly BUSINESS = new UserType(1, "BUSINESS");

  static readonly DELETED_CUSTOMER = new UserType(7, "DELETED_CUSTOMER");

  static readonly LAMBDA = new UserType(8, "LABMDA");

  static readonly ADMIN = new UserType(9, "ADMIN");

  constructor(private readonly _code: number, private readonly _name: string) {
    super();
  }

  get code(): number {
    return this._code;
  }

  get name(): string {
    return this._name;
  }

  equals(v: UserType): boolean {
    return this.code === v.code;
  }
}
