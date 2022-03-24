import {
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Store } from "../store/Store.entity";

@Entity({ tableName: "dressing" })
export class Dressing {
  @PrimaryKey({ name: "ds_id", autoincrement: true })
  id!: number;

  @Property({ name: "ds_name", length: 100 })
  name!: string;

  @ManyToOne({
    entity: () => Store,
    fieldName: "str_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    index: "FK_dressing_str_id_store_str_id",
    joinColumn: "str_id",
    referenceColumnName: "str_id",
    wrappedReference: true,
  })
  store!: IdentifiedReference<Store>;

  private constructor() {}
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
