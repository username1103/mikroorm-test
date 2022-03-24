import {
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Product } from "../product/Product.entity";
import { Program } from "../program/Program.entity";
import { Store } from "../store/Store.entity";

@Entity({ tableName: "coupon_condition" })
export class CouponCondition {
  @PrimaryKey({ name: "cpn_cond_id", autoincrement: true })
  private id!: number;

  @ManyToOne({
    entity: () => Store,
    fieldName: "str_id",
    nullable: true,
    index: "FK_str_id",
    joinColumn: "str_id",
    referenceColumnName: "str_id",
    wrappedReference: true,
  })
  private store?: IdentifiedReference<Store>;

  @ManyToOne({
    entity: () => Program,
    fieldName: "prg_id",
    onUpdateIntegrity: "cascade",
    onDelete: "set null",
    nullable: true,
    index: "FK_prg_id_idx",
    joinColumn: "prg_id",
    referenceColumnName: "prg_id",
    wrappedReference: true,
  })
  private program?: IdentifiedReference<Program>;

  @ManyToOne({
    entity: () => Product,
    fieldName: "prd_id",
    onUpdateIntegrity: "cascade",
    onDelete: "set null",
    nullable: true,
    index: "FK_prd_id_idx",
    joinColumn: "prd_id",
    referenceColumnName: "prd_id",
    wrappedReference: true,
  })
  private product?: IdentifiedReference<Product>;

  @Property({ columnType: "tinyint", nullable: true })
  private minSubWeeks?: number;

  @Property({ columnType: "tinyint", nullable: true })
  private minSubDays?: number;

  @Property({ nullable: true })
  private minPrice?: number;

  private constructor() {}
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
