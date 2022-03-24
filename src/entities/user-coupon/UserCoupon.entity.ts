import {
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Coupon } from "../coupon/Coupon.entity";
import { User } from "../user/User.entity";
import { UserCouponStatusTransformer } from "./types/UserCouponStatusTransformer";

@Entity({ tableName: "user_coupon" })
export class UserCoupon {
  @PrimaryKey({ name: "usr_cpn_id", autoincrement: true })
  private id!: number;

  @ManyToOne({
    entity: () => User,
    fieldName: "usr_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    index: "FK_user_coupon_usr_id_user_usr_id",
    joinColumn: "usr_id",
    referenceColumnName: "usr_id",
    wrappedReference: true,
  })
  private user!: IdentifiedReference<User>;

  @ManyToOne({
    entity: () => Coupon,
    fieldName: "cpn_id",
    index: "FK_user_coupon_cpn_id_coupon_cpn_id",
    joinColumn: "cpn_id",
    referenceColumnName: "cpn_id",
    wrappedReference: true,
  })
  private coupon!: IdentifiedReference<Coupon>;

  @Property({ name: "usr_cpn_sdate", defaultRaw: `CURRENT_TIMESTAMP` })
  private usableStartDate!: Date;

  @Property({ name: "usr_cpn_edate", nullable: true })
  private usableEndDate?: Date;

  @Property({
    name: "usr_cpn_status",
    columnType: "tinyint",
    default: 0,
    customType: new UserCouponStatusTransformer(),
  })
  private status: UserCoupon;

  private constructor() {}
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
