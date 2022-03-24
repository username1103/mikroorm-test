import { KitType } from "../../types/KitType";

export class StoreKitType {
  private _kitType: KitType;

  private _status: number;

  constructor(kitType: KitType, status: number) {
    this._status = status;
    this._kitType = kitType;
  }

  get status() {
    return this._status;
  }

  get kitType() {
    return this._kitType;
  }

  enable() {
    this._status = 1;
  }

  disable() {
    this._status = 0;
  }
}
