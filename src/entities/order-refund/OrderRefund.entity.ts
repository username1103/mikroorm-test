import {
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Order } from "../order/Order.entity";
import { User } from "../user/User.entity";
import {
  OrderCancelType,
  OrderCancelTypeTransformer,
  OrderRefundCancelFlag,
  OrderRefundCancelFlagTransformer,
} from "./types";

@Entity({ tableName: "order_refund" })
export class OrderRefund {
  @PrimaryKey({ name: "odr_rf_id", autoincrement: true })
  private id!: number;

  @ManyToOne({
    entity: () => Order,
    fieldName: "odr_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    index: "FK_order_refund_odr_id_order_odr_id",
    joinColumn: "odr_id",
    referenceColumnName: "odr_id",
    wrappedReference: true,
  })
  private order!: IdentifiedReference<Order>;

  @ManyToOne({
    entity: () => User,
    fieldName: "odr_rf_requestor_id",
    index: "FK_order_refund_odr_rf_requestor_id_user_usr_id",
    joinColumn: "odr_rf_requestor_id",
    referenceColumnName: "usr_id",
    wrappedReference: true,
  })
  private requestor!: IdentifiedReference<User>;

  @Property({ name: " odr_rf_total_price" })
  private totalPrice!: number;

  @Property({
    name: "odr_rf_cancel_flag",
    columnType: "tinyint",
    customType: new OrderRefundCancelFlagTransformer(),
  })
  private cancelFalg!: OrderRefundCancelFlag;

  @Property({ name: "odr_rf_account_number", length: 45 })
  private accountNumber!: string;

  @Property({ name: "odr_rf_account_bank", length: 20 })
  private accountBank!: string;

  @Property({ name: "odr_rf_account_name", length: 45 })
  private accountName!: string;

  @Property({
    name: "odr_rf_cancel_type",
    columnType: "tinyint",
    customType: new OrderCancelTypeTransformer(),
  })
  private cancelType!: OrderCancelType;

  @Property({
    name: "odr_rf_cancel_contents",
    length: 150,
    comment: "취소 상세",
  })
  private cancelContents!: string;

  @Property({
    name: "odr_rf_contents",
    length: 150,
    comment: "환불시 참고사항",
  })
  private contents!: string;

  @Property({ name: "odr_rf_remarks", length: 150, comment: "메모" })
  private remarks!: string;

  @Property({ name: "odr_rf_created_at", defaultRaw: `CURRENT_TIMESTAMP` })
  private createdAt!: Date;

  @Property({ name: "odr_rf_refunded_date", nullable: true })
  private refundedDate?: Date;

  @Property({ name: "odr_rf_updated_at", defaultRaw: `CURRENT_TIMESTAMP` })
  private updatedAt!: Date;

  private constructor() {}
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
