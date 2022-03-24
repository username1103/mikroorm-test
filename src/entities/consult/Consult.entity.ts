import {
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { User } from "../user/User.entity";
import {
  ConsultProgress,
  ConsultProgressTransformer,
  ConsultStatus,
  ConsultStatusTransformer,
} from "./types";

@Entity({ tableName: "consult" })
export class Consult {
  @PrimaryKey({ name: "ct_id", autoincrement: true })
  private id!: number;

  @ManyToOne({
    entity: () => User,
    fieldName: "usr_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    index: "FK_consult_usr_id_user_usr_id",
    joinColumn: "usr_id",
    referenceColumnName: "usr_id",
    wrappedReference: true,
  })
  private user!: IdentifiedReference<User>;

  @Property({
    name: "ct_status",
    columnType: "tinyint",
    customType: new ConsultStatusTransformer(),
  })
  private storeStatus!: ConsultStatus;

  @Property({
    name: "ct_progress",
    columnType: "tinyint",
    customType: new ConsultProgressTransformer(),
  })
  private progress!: ConsultProgress;

  @Property({ name: "ct_time", columnType: "json" })
  private time!: number[];

  private constructor() {}
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
