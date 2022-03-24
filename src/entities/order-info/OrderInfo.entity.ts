import {
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Order } from "../order/Order.entity";
import { Product } from "../product/Product.entity";
import { Store } from "../store/Store.entity";
import { KitType } from "../types/KitType";
import { KitTypeTransformer } from "../types/KitTypeTransformer";
import { User } from "../user/User.entity";
import {
  OrderInfoReturnStatus,
  OrderInfoReturnStatusTransformer,
  OrderInfoSauceType,
  OrderInfoSauceTypeTransformer,
  OrderInfoStatus,
  OrderInfoStatusTransformer,
} from "./types";

@Entity({ tableName: "order_info" })
export class OrderInfo {
  @PrimaryKey({ name: "odr_info_id", autoincrement: true })
  private id!: number;

  @ManyToOne({
    entity: () => Order,
    fieldName: "odr_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    index: "FK_order_info_odr_id_order_odr_id",
    joinColumn: "odr_id",
    referenceColumnName: "odr_id",
    wrappedReference: true,
  })
  private order!: IdentifiedReference<Order>;

  @ManyToOne({
    entity: () => Product,
    fieldName: "prd_id",
    onUpdateIntegrity: "cascade",
    index: "FK_order_info_prd_id_product_prd_id",
    joinColumn: "prd_id",
    referenceColumnName: "prd_id",
    wrappedReference: true,
  })
  private product!: IdentifiedReference<Product>;

  @ManyToOne({
    entity: () => User,
    fieldName: "usr_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    index: "FK_order_info_usr_id_user_usr_id",
    joinColumn: "usr_id",
    referenceColumnName: "usr_id",
    wrappedReference: true,
  })
  private user!: IdentifiedReference<User>;

  @ManyToOne({
    entity: () => Store,
    fieldName: "str_id",
    onUpdateIntegrity: "cascade",
    index: "FK_order_info_str_id_store_str_id",
    joinColumn: "str_id",
    referenceColumnName: "str_id",
    wrappedReference: true,
  })
  private store!: IdentifiedReference<Store>;

  @Property({ name: "odr_info_date", comment: "픽업 예정일" })
  private scheduledPickupDate!: Date;

  @Property({
    name: "odr_info_sauce",
    columnType: "tinyint",
    default: 1,
    comment: "소스통 필요 유무",
    customType: new OrderInfoSauceTypeTransformer(),
  })
  private sauceType: OrderInfoSauceType;

  @Property({ name: "odr_info_pickup_date", nullable: true })
  private pickupDate?: Date;

  @Property({
    name: "odr_info_kit",
    columnType: "tinyint",
    default: 0,
    comment: "사용한 키트",
    customType: new KitTypeTransformer(),
  })
  private kitType: KitType;

  @Property({ name: "odr_info_rt_deadline", nullable: true })
  private returnDeadline?: Date;

  @Property({
    name: "odr_info_rt_status",
    columnType: "tinyint",
    default: 0,
    customType: new OrderInfoReturnStatusTransformer(),
  })
  private returnStatus!: OrderInfoReturnStatus;

  @Property({ name: "odr_info_rt_date", nullable: true })
  private returnDate?: Date;

  @Property({
    name: "odr_info_stats",
    columnType: "tinyint",
    default: 0,
    customType: new OrderInfoStatusTransformer(),
  })
  private status!: OrderInfoStatus;

  @ManyToOne({
    entity: () => Store,
    fieldName: "odr_info_rt_store",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    nullable: true,
    index: "FK_order_info_odr_info_rt_store_store_str_id",
    joinColumn: "odr_info_rt_store",
    referenceColumnName: "str_id",
    wrappedReference: true,
  })
  private returnStore?: IdentifiedReference<Store>;

  private constructor() {}
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
