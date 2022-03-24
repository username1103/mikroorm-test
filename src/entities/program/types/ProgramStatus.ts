import { Enum, EnumType } from "ts-jenum";
import { IEnumType } from "../../../types/IEnumType";

@Enum("_code")
export class ProgramStatus
  extends EnumType<ProgramStatus>()
  implements IEnumType<ProgramStatus>
{
  static readonly HIDDEN = new ProgramStatus(0, "숨김");

  static readonly DISPLAY = new ProgramStatus(1, "표시");

  constructor(private readonly _code: number, private readonly _name: string) {
    super();
  }

  get code(): number {
    return this._code;
  }

  get name(): string {
    return this._name;
  }

  equals(v: ProgramStatus): boolean {
    return this.code === v.code;
  }
}
