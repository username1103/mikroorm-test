import { Enum, EnumType } from "ts-jenum";
import { IEnumType } from "../../../types/IEnumType";

@Enum("_code")
export class SubscribableAlarmStatus
  extends EnumType<SubscribableAlarmStatus>()
  implements IEnumType<SubscribableAlarmStatus>
{
  static readonly NOT_SENT = new SubscribableAlarmStatus("미발송", "미발송");

  static readonly SENT = new SubscribableAlarmStatus("발송완료", "발송완료");

  constructor(private readonly _code: string, private readonly _name: string) {
    super();
  }

  get code(): string {
    return this._code;
  }

  get name(): string {
    return this._name;
  }

  equals(v: SubscribableAlarmStatus): boolean {
    return this.code === v.code;
  }
}
