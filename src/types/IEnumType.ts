export interface IEnumType<T> {
  get code(): string | number;
  get name(): string;
  equals(v: T): boolean;
}
