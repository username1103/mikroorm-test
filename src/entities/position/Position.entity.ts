import {
  Entity,
  IdentifiedReference,
  OneToOne,
  Property,
} from "@mikro-orm/core";
import { Store } from "../store/Store.entity";

@Entity({ tableName: "position" })
export class Position {
  @OneToOne({
    entity: () => Store,
    fieldName: "str_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    primary: true,
    joinColumn: "str_id",
    referenceColumnName: "str_id",
    wrappedReference: true,
  })
  private store!: IdentifiedReference<Store>;

  @Property({ name: "pos_longitude", length: 10 })
  private logitude!: string;

  @Property({ name: "pos_latitude", length: 10 })
  private latitude!: string;

  @Property({ name: "pos_address", length: 100 })
  private address!: string;

  @Property({
    name: "pos_point",
    length: 45,
    default: "",
    comment: "지점명",
  })
  private point: string;

  @Property({ name: "pos_first", length: 30, default: "" })
  private first: string;

  @Property({ name: "pos_second", length: 30, default: "" })
  private second: string;

  @Property({ name: "pos_third", length: 30, default: "" })
  private third: string;

  @Property({ name: "pos_optional_address", length: 100, default: "" })
  private optionalAddress: string;

  private constructor() {}
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
