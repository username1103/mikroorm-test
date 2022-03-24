import { Enum, EnumType } from 'ts-jenum';

@Enum('_code')
export class StoreStatus extends EnumType<StoreStatus>() {
  static readonly HIDDEN = new StoreStatus(0, '숨김');

  static readonly DISPLAY = new StoreStatus(1, '표시');

  static readonly TERMINATION = new StoreStatus(2, '협약종료');

  static readonly LAUNCH_PLANNED = new StoreStatus(3, '런칭예정');

  constructor(private readonly _code: number, private readonly _name: string) {
    super();
  }

  get code(): number {
    return this._code;
  }

  get name(): string {
    return this._name;
  }
}
