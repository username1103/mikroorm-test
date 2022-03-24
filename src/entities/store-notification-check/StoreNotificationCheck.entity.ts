import {
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Property,
  Unique,
} from "@mikro-orm/core";
import { Store } from "../store/Store.entity";
import { StoreNotification } from "../store-notification/StoreNotification.entity";

@Entity({ tableName: "store_notification_chcek" })
@Unique({
  name: "unique_str_id_str_nt_id",
  properties: ["store", "notification"],
})
export class StoreNotificationCheck {
  @PrimaryKey({ name: "str_nt_chk_id", autoincrement: true })
  private id!: number;

  @ManyToOne({
    entity: () => StoreNotification,
    fieldName: "str_nt_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    index: "FK_store_notification_check_str_nt_id",
    joinColumn: "str_nt_id",
    referenceColumnName: "str_nt_id",
    wrappedReference: true,
  })
  private notification!: IdentifiedReference<StoreNotification>;

  @ManyToOne({
    entity: () => Store,
    fieldName: "str_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    joinColumn: "str_id",
    referenceColumnName: "str_id",
    wrappedReference: true,
  })
  private store!: IdentifiedReference<Store>;

  @Property({ name: "str_nt_chk_contents", length: 100, nullable: true })
  private contents?: string;

  @Property({ name: "str_nt_chk_date", defaultRaw: `CURRENT_TIMESTAMP` })
  private createdAt!: Date;

  private constructor() {}
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
