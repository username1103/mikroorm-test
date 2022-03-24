import {
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Order } from "../order/Order.entity";
import { UserCoupon } from "../user-coupon/UserCoupon.entity";
import { OrderCouponStatus, OrderCouponStatusTransformer } from "./types";

@Entity({ tableName: "order_coupon" })
export class OrderCoupon {
  @PrimaryKey({ name: "odr_cpn_id", autoincrement: true })
  private id!: number;

  @ManyToOne({
    entity: () => Order,
    fieldName: "odr_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    index: "FK_order_coupon_odr_id_order_odr_id",
    joinColumn: "odr_id",
    referenceColumnName: "odr_id",
    wrappedReference: true,
  })
  private order!: IdentifiedReference<Order>;

  @ManyToOne({
    entity: () => UserCoupon,
    fieldName: "usr_cpn_id",
    onUpdateIntegrity: "cascade",
    index: "FK_order_coupon_usr_cpn_id_user_coupon_usr_cpn_id",
    joinColumn: "usr_cpn_id",
    referenceColumnName: "usr_cpn_id",
    wrappedReference: true,
  })
  private userCoupon!: IdentifiedReference<UserCoupon>;

  @Property({
    name: "odr_cpn_status",
    columnType: "tinyint",
    default: 0,
    customType: new OrderCouponStatusTransformer(),
  })
  private status: OrderCouponStatus;

  @Property({ name: "odr_cpn_wdate", defaultRaw: `CURRENT_TIMESTAMP` })
  private createdAt!: Date;

  private constructor() {}
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
