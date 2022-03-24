import {
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Order } from "../order/Order.entity";
import {
  ReceiptStatus,
  ReceiptStatusTransformer,
  ReceiptType,
  ReceiptTypeTransformer,
} from "./types";

@Entity({ tableName: "receipt" })
export class Receipt {
  @PrimaryKey({ name: "rpt_id" })
  private id!: number;

  @Property({ name: "rpt_number", length: 30 })
  private number!: string;

  @Property({
    name: "rpt_status",
    columnType: "tinyint",
    default: 0,
    customType: new ReceiptStatusTransformer(),
  })
  private status: ReceiptStatus;

  @Property({
    name: "rpt_type",
    columnType: "tinyint",
    default: 1,
    customType: new ReceiptTypeTransformer(),
  })
  private type: ReceiptType;

  @Property({
    name: "req_date",
    nullable: true,
    defaultRaw: `CURRENT_TIMESTAMP`,
  })
  private createdAt?: Date;

  @ManyToOne({
    entity: () => Order,
    fieldName: "odr_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    index: "FK_receipt_odr_id_order_odr_id",
    joinColumn: "odr_id",
    referenceColumnName: "odr_id",
    wrappedReference: true,
  })
  private order!: IdentifiedReference<Order>;

  private constructor() {}
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
