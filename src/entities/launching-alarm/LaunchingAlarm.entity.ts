import {
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { User } from "../user/User.entity";
import {
  LaunchingAlarmNearbyAddressTransformer,
  LaunchingAlarmStatus,
  LaunchingAlarmStatusTransformer,
} from "./types";

@Entity({ tableName: "launching_alarm" })
export class LaunchingAlarm {
  @PrimaryKey({ name: "launching_alarm_id", autoincrement: true })
  private id!: number;

  @ManyToOne({
    entity: () => User,
    fieldName: "usr_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    nullable: true,
    index: "FK_launching_alarm_usr_id_user_usr_id_idx",
    joinColumn: "usr_id",
    referenceColumnName: "usr_id",
    wrappedReference: true,
  })
  private user?: IdentifiedReference<User>;

  @Property({ name: "launching_alarm_name", length: 45 })
  name!: string;

  @Property({ name: "launching_alarm_phone", length: 45 })
  phone!: string;

  @Property({ name: "launching_alarm_address", length: 45 })
  address!: string;

  @Property({
    name: "launching_alarm_nearby_address",
    columnType: "text",
    length: 65535,
    customType: new LaunchingAlarmNearbyAddressTransformer(),
  })
  nearByAddress!: string[];

  @Property({
    name: "launching_alarm_created_at",
    defaultRaw: `CURRENT_TIMESTAMP`,
  })
  createdAt!: Date;

  @Property({
    name: "launching_alarm_status",
    length: 45,
    default: "미발송",
    customType: new LaunchingAlarmStatusTransformer(),
  })
  status!: LaunchingAlarmStatus;

  @Property({ name: "launching_alarm_sent_at", nullable: true })
  sendAt?: Date;

  private constructor() {}
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
