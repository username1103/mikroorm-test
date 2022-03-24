import {
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Program } from "../program/Program.entity";
import { KitType } from "../types/KitType";
import { KitTypeTransformer } from "../types/KitTypeTransformer";
import { User } from "../user/User.entity";
import { OrderStatus, OrderStatusTransformer } from "./types";

@Entity({ tableName: "order" })
export class Order {
  @PrimaryKey({ name: "odr_id", autoincrement: true })
  private id!: number;

  @ManyToOne({
    entity: () => User,
    fieldName: "usr_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    index: "FK_order_usr_id_user_usr_id",
    joinColumn: "usr_id",
    referenceColumnName: "usr_id",
    wrappedReference: true,
  })
  private user!: IdentifiedReference<User>;

  @ManyToOne({
    entity: () => Program,
    fieldName: "prg_id",
    onUpdateIntegrity: "cascade",
    index: "FK_order_prg_id_program_prg_id",
    joinColumn: "prg_id",
    referenceColumnName: "prg_id",
    wrappedReference: true,
  })
  private program!: IdentifiedReference<Program>;

  @Property({ name: "odr_wdate", defaultRaw: `CURRENT_TIMESTAMP` })
  private createdAt!: Date;

  @Property({ name: "odr_edate", defaultRaw: `CURRENT_TIMESTAMP` })
  private updatedAt!: Date;

  @Property({
    name: "odr_status",
    columnType: "tinyint",
    default: 0,
    customType: new OrderStatusTransformer(),
  })
  private status: OrderStatus;

  @Property({
    name: "odr_total_price",
    default: 0,
    comment:
      "전체 주문 금액: 프로덕트 주문 금액 + 키트금액(키트 현금결제금액 + 에코포인트)",
  })
  private totalPrice: number;

  @Property({
    name: "odr_prd_price",
    default: 0,
    comment: "프로덕트 주문 금액",
  })
  private productPrice: number;

  @Property({ name: "odr_discount", default: 0, comment: "할인된 금액" })
  private discount: number;

  @Property({
    name: "odr_kit_price",
    default: 0,
    comment: "현금으로 결제한 키트 금액",
  })
  private kitPrice: number;

  @Property({ name: "odr_eco", default: 0, comment: "사용한 에코포인트" })
  private ecoPoint: number;

  @Property({ name: "odr_price", default: 0, comment: "실 결제금액" })
  private price: number;

  @Property({ name: "odr_name", length: 45, comment: "주문자명" })
  private name!: string;

  @Property({
    name: "odr_kit_type",
    columnType: "tinyint",
    nullable: true,
    comment: "주문시 선택한 키트",
    customType: new KitTypeTransformer(),
  })
  private kitType?: KitType;

  @Property({ name: "odr_weeks", nullable: true, comment: "주문한 주" })
  private weeks?: number;

  @Property({
    name: "odr_days_per_week",
    nullable: true,
    comment: "주당 주문 수",
  })
  private daysPerWeek?: number;

  private constructor() {}
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
