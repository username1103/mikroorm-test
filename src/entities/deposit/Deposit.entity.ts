import {
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Order } from "../order/Order.entity";
import { DepositCheckFlag, DepositCheckFlagTransformer } from "./types";

@Entity({ tableName: "deposit" })
export class Deposit {
  @PrimaryKey({ name: "dp_id", autoincrement: true })
  private id!: number;

  @Property({ name: "dp_name", length: 45 })
  private name!: string;

  @Property({ name: "dp_price" })
  private price!: number;

  @Property({ name: "dp_contents", length: 250 })
  private contents!: string;

  @ManyToOne({
    entity: () => Order,
    fieldName: "odr_id",
    nullable: true,
    index: "FK_deposit_odr_id_order_odr_id_idx",
    joinColumn: "odr_id",
    referenceColumnName: "odr_id",
    wrappedReference: true,
  })
  private order?: IdentifiedReference<Order>;

  @Property({ name: "dp_wdate", defaultRaw: `CURRENT_TIMESTAMP` })
  private createdAt!: Date;

  @Property({ name: "dp_edate", defaultRaw: `CURRENT_TIMESTAMP` })
  private updatedAt!: Date;

  @Property({ name: "dp_remarks", length: 150 })
  private remarks!: string;

  @Property({
    name: "dp_check_flag",
    columnType: "tinyint",
    default: 0,
    customType: new DepositCheckFlagTransformer(),
  })
  private checkFlag: DepositCheckFlag;

  private constructor() {}
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
