import {
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Store } from "../store/Store.entity";
import { HolidayType, HolidayTypeTransformer } from "./types";

@Entity({ tableName: "holiday" })
export class Holiday {
  @PrimaryKey({ name: "hd_id", autoincrement: true })
  private id!: number;

  @ManyToOne({
    entity: () => Store,
    fieldName: "str_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    index: "FK_holiday_str_id_store_str_id",
    joinColumn: "str_id",
    referenceColumnName: "str_id",
    wrappedReference: true,
  })
  private store!: IdentifiedReference<Store>;

  @Property({ name: "hd_sdate" })
  private startDate!: Date;

  @Property({ name: "hd_edate" })
  private endDate!: Date;

  @Property({
    name: "hd_type",
    columnType: "tinyint",
    default: 0,
    customType: new HolidayTypeTransformer(),
  })
  private type: HolidayType;

  @Property({ name: "hd_reason", length: 100, nullable: true })
  private reason?: string;

  @Property({ name: "created_at", defaultRaw: `CURRENT_TIMESTAMP` })
  private createdAt!: Date;

  private constructor() {}
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
