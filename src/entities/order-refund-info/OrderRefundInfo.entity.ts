import {
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
} from "@mikro-orm/core";
import { OrderInfo } from "../order-info/OrderInfo.entity";
import { OrderRefund } from "../order-refund/OrderRefund.entity";

@Entity({ tableName: "order_refund_info" })
export class OrderRefundInfo {
  @PrimaryKey({ name: "odr_rf_info_id", autoincrement: true })
  private id!: number;

  @ManyToOne({
    entity: () => OrderRefund,
    fieldName: "odr_rf_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    index: "FK_order_refund_info_odr_rf_id_order_refund_odr_rf_id",
    joinColumn: "odr_rf_id",
    referenceColumnName: "odr_rf_id",
    wrappedReference: true,
  })
  private orderRefund!: IdentifiedReference<OrderRefund>;

  @ManyToOne({
    entity: () => OrderInfo,
    fieldName: "odr_info_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    index: "FK_order_refund_info_odr_info_id_order_info_odr_info_id",
    joinColumn: "odr_info_id",
    referenceColumnName: "odr_info_id",
    wrappedReference: true,
  })
  private orderInfo!: IdentifiedReference<OrderInfo>;

  private constructor() {}
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
