import {
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { CouponCondition } from "../coupon-condition/CouponCondition.entity";
import {
  CouponDeadlineType,
  CouponDeadlineTypeTransformer,
  CouponStatus,
  CouponStatusTransformer,
  CouponType,
  CouponTypeTransformer,
  DiscountType,
  DiscountTypeTransformer,
} from "./types";

@Entity({
  tableName: "coupon",
  discriminatorColumn: "cpn_deadline_type",
  abstract: true,
})
export abstract class Coupon {
  @PrimaryKey({ name: "cpn_id", autoincrement: true })
  private id!: number;

  @ManyToOne({
    entity: () => CouponCondition,
    fieldName: "cpn_cond_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    index: "FK_coupon_cpn_cond_id_coupon_condition_cpn_cond_id_idx",
    joinColumn: "cpn_cond_id",
    referenceColumnName: "cpn_cond_id",
    wrappedReference: true,
  })
  private condition!: IdentifiedReference<CouponCondition>;

  @Property({ name: "cpn_name", length: 100 })
  private name!: string;

  @Property({ name: "cpn_contents", length: 100 })
  private contents!: string;

  @Property({ name: "cpn_image", length: 150, nullable: true })
  private image?: string;

  @Property({ name: "cpn_code", length: 45, nullable: true })
  private code?: string;

  @Property({
    name: "cpn_status",
    columnType: "tinyint",
    default: 0,
    customType: new CouponStatusTransformer(),
  })
  private status: CouponStatus;

  @Property({ name: "cpn_limit", nullable: true })
  private limit?: number;

  @Property({ name: "cpn_reg_cnt", default: 0 })
  private registerCount: number = 0;

  @Property({ name: "cpn_reg_sdate", nullable: true })
  private registerStartDate?: Date;

  @Property({ name: "cpn_reg_deadline", nullable: true })
  private registerDeadline?: Date;

  @Property({
    name: "cpn_info_type",
    columnType: "tinyint",
    default: 0,
    customType: new CouponTypeTransformer(),
  })
  private type: CouponType;

  @Property({
    name: "discount_type",
    columnType: "tinyint",
    default: 0,
    customType: new DiscountTypeTransformer(),
  })
  private discountType: DiscountType;

  @Property({ name: "discount", default: 0 })
  private discount: number = 0;

  @Property({
    name: "cpn_deadline_type",
    columnType: "tinyint",
    default: 0,
    customType: new CouponDeadlineTypeTransformer(),
  })
  private deadlineType: CouponDeadlineType;

  protected constructor() {}
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
