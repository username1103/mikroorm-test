import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import {
  StoreNotificationType,
  StoreNotificationTypeTransformer,
} from "./types";

@Entity({ tableName: "store_notification" })
export class StoreNotification {
  @PrimaryKey({ name: "str_nt_id", autoincrement: true })
  private id!: number;

  @Property({ name: "str_nt_title", length: 100 })
  private title!: string;

  @Property({ name: "str_nt_contents", columnType: "text", length: 65535 })
  private contents!: string;

  @Property({ name: "str_nt_wdate", defaultRaw: `CURRENT_TIMESTAMP` })
  private createdAt!: Date;

  @Property({ name: "str_nt_edate", defaultRaw: `CURRENT_TIMESTAMP` })
  private updatedAt!: Date;

  @Property({ name: "str_nt_ddate", nullable: true })
  private deadline?: Date;

  @Property({
    name: "str_nt_type",
    columnType: "tinyint",
    customType: new StoreNotificationTypeTransformer(),
  })
  private type!: StoreNotificationType;

  private constructor() {}
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
