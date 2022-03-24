import {
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Store } from "../store/Store.entity";
import { User } from "../user/User.entity";

@Entity({ tableName: "business" })
export class Business {
  @PrimaryKey({ name: "bs_id", autoincrement: true })
  private id!: number;

  @Property({ name: "bs_number", length: 100 })
  private businessNumber!: string;

  @ManyToOne({
    entity: () => User,
    fieldName: "usr_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    index: "FK_business_usr_id_usr_usr_id",
    joinColumn: "usr_id",
    referenceColumnName: "usr_id",
    wrappedReference: true,
  })
  private user!: IdentifiedReference<User>;

  @Property({ name: "name", length: 100 })
  private name!: string;

  @ManyToOne({
    entity: () => Store,
    fieldName: "str_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    nullable: true,
    index: "FK_business_str_id_store_str_id",
    joinColumn: "str_id",
    referenceColumnName: "str_id",
    wrappedReference: true,
  })
  private store?: IdentifiedReference<Store>;

  private constructor() {}

  /* 생성로직 */

  /* Getter */

  /* Setter */
}
