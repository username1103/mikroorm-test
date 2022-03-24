import { Entity } from "@mikro-orm/core";
import { Coupon } from "./Coupon.entity";
import { CouponDeadlineType } from "./types";

@Entity({ discriminatorValue: CouponDeadlineType.INFINITY.code })
export class InfinityCoupon extends Coupon {
  private constructor() {
    super();
  }
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
