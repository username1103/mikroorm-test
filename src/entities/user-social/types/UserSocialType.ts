import { Enum, EnumType } from "ts-jenum";

@Enum("_code")
export class UserSocialType extends EnumType<UserSocialType>() {
  static readonly KAKAO = new UserSocialType("KAKAO", "카카오");

  constructor(private readonly _code: string, private readonly _name: string) {
    super();
  }

  get code(): string {
    return this._code;
  }

  get name(): string {
    return this._name;
  }
}
