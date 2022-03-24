import {
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { OrderEco } from "../order-eco/OrderEco.entity";

@Entity({ tableName: "eco_refund" })
export class EcoRefund {
  @PrimaryKey({ name: "eco_rf_id", autoincrement: true })
  private id!: number;

  @ManyToOne({
    entity: () => OrderEco,
    fieldName: "odr_eco_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    index: "FK_eco_refund_eco_rf_id_order_eco_odr_eco_id",
    joinColumn: "odr_eco_id",
    referenceColumnName: "odr_eco_id",
    wrappedReference: true,
  })
  private orderEco!: IdentifiedReference<OrderEco>;

  @Property({ name: "eco_rf_name", length: 30 })
  private accountName!: string;

  @Property({ name: "eco_rf_bank", length: 30 })
  private accountBank!: string;

  @Property({ name: "eco_rf_number", length: 100 })
  private accountNumber!: string;

  private constructor() {}
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
