import { Entity, Property } from "@mikro-orm/core";
import { Coupon } from "./Coupon.entity";
import { CouponDeadlineType } from "./types";

@Entity({ discriminatorValue: CouponDeadlineType.DATE.code })
export class DateCoupon extends Coupon {
  @Property({ name: "deadline" })
  private deadline!: Date;

  private constructor() {
    super();
  }
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
