import {
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Order } from "../order/Order.entity";
import { User } from "../user/User.entity";
import { OrderEcoStatus, OrderEcoStatusTransformer } from "./types";

@Entity({ tableName: "order_eco" })
export class OrderEco {
  @PrimaryKey({ name: "odr_eco_id", autoincrement: true })
  private id!: number;

  @ManyToOne({
    entity: () => Order,
    fieldName: "odr_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    nullable: true,
    index: "FK_order_eco_odr_id_order_odr_id",
    joinColumn: "odr_id",
    referenceColumnName: "odr_id",
    wrappedReference: true,
  })
  private order?: IdentifiedReference<Order>;

  @Property({ name: "odr_eco_price", default: 0 })
  private ecoPoint: number = 0;

  @Property({
    name: "odr_eco_status",
    columnType: "tinyint",
    customType: new OrderEcoStatusTransformer(),
  })
  private status!: OrderEcoStatus;

  @Property({ name: "odr_eco_contents", length: 45 })
  private contents!: string;

  @Property({ name: "odr_eco_wdate", defaultRaw: `CURRENT_TIMESTAMP` })
  private createdAt!: Date;

  @Property({ name: "odr_eco_updated_price", default: 0 })
  private updatedPrice: number = 0;

  @ManyToOne({
    entity: () => User,
    fieldName: "usr_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    index: "FK_order_eco_usr_id_user_usr_id",
    joinColumn: "usr_id",
    referenceColumnName: "usr_id",
    wrappedReference: true,
  })
  private user!: IdentifiedReference<User>;

  private constructor() {}
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
