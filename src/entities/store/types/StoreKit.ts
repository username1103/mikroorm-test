import { KitType } from '../../types/KitType';
import { StoreKitType } from './StoreKitType';

export class StoreKit {
  private _storeKits: StoreKitType[];

  constructor(str_kit: string) {
    this._storeKits = str_kit.split('').map((value, idx) => new StoreKitType(KitType.valueOf(idx), parseInt(value, 10)));
  }

  get allKits() {
    return this._storeKits;
  }

  get enableKits() {
    return this._storeKits.filter((storeKitType) => storeKitType.status === 1).map((storeKitType) => storeKitType.kitType);
  }

  get disableKits() {
    return this._storeKits.filter((storeKitType) => storeKitType.status === 0).map((storeKitType) => storeKitType.kitType);
  }

  enable(kitType: KitType) {
    this._storeKits[kitType.code].enable();
  }

  disable(kitType: KitType) {
    this._storeKits[kitType.code].disable();
  }
}
