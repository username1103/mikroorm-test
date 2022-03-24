import {
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Store } from "../store/Store.entity";
import { User } from "../user/User.entity";
import {
  SubscribableAlarmStatus,
  SubscribableAlarmStausTransformer,
} from "./types";

@Entity({ tableName: "subscribable_alarm" })
export class SubscribableAlarm {
  @PrimaryKey({ name: "sub_alarm_id" })
  private id!: number;

  @Property({ name: "sub_alarm_name", length: 45 })
  private name!: string;

  @Property({ name: "sub_alarm_phone", length: 45 })
  private phone!: string;

  @ManyToOne({
    entity: () => User,
    fieldName: "usr_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    nullable: true,
    index: "FK_subscribable_alarm_usr_id_user_usr_id_idx",
    joinColumn: "usr_id",
    referenceColumnName: "usr_id",
    wrappedReference: true,
  })
  private user?: IdentifiedReference<User>;

  @ManyToOne({
    entity: () => Store,
    fieldName: "str_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    index: "FK_subscribable_alarm_str_id_store_str_id",
    joinColumn: "str_id",
    referenceColumnName: "str_id",
    wrappedReference: true,
  })
  private store!: IdentifiedReference<Store>;

  @Property({ name: "sub_alarm_created_at", defaultRaw: `CURRENT_TIMESTAMP` })
  private createdAt!: Date;

  @Property({ name: "sub_alarm_send_at", nullable: true })
  private sendAt?: Date;

  @Property({
    length: 45,
    default: "미발송",
    customType: new SubscribableAlarmStausTransformer(),
  })
  private subAlarmStatus!: SubscribableAlarmStatus;

  private constructor() {}
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
