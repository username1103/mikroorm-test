import { Enum, EnumType } from 'ts-jenum';

@Enum('_code')
export class KitType extends EnumType<KitType>() {
  static readonly ECO_KIT = new KitType(0, '에코키트');

  static readonly PAPER_KIT = new KitType(1, '일회용키트');

  static readonly CUSTOMER_KIT = new KitType(2, '마이키트');

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
