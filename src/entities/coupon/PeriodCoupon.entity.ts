import { Entity, Property } from "@mikro-orm/core";
import { Coupon } from "./Coupon.entity";
import { CouponDeadlineType } from "./types";

@Entity({ discriminatorValue: CouponDeadlineType.PERIOD.code })
export class PeriodCoupon extends Coupon {
  @Property({ name: "cpn_deadline_days" })
  private deadlineDays!: number;

  private constructor() {
    super();
  }
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
