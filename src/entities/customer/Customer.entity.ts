import {
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Property,
  Unique,
} from "@mikro-orm/core";
import { User } from "../user/User.entity";

@Entity({ tableName: "customer" })
export class Customer {
  @PrimaryKey({ name: "cs_id", autoincrement: true })
  private id!: number;

  @ManyToOne({
    entity: () => User,
    fieldName: "usr_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    nullable: true,
    index: "FK_customer_usr_id_user_usr_id",
    joinColumn: "usr_id",
    referenceColumnName: "usr_id",
    wrappedReference: true,
  })
  private user?: IdentifiedReference<User>;

  @Property({ name: "cs_eco", default: 0 })
  private ecoPoint: number = 0;

  @Unique({ name: "cs_code_UNIQUE" })
  @Property({ name: "cs_code", length: 30 })
  private code!: string;

  @Property({ name: "cs_qr", length: 30 })
  private qr!: string;

  @Property({ name: "cs_recommended_count", default: 0 })
  private recommendedCount: number = 0;

  @Property({ name: "cs_return_number", default: 0 })
  private retunrNumber: number = 0;

  @Property({ name: "cs_pickup_number", default: 0 })
  private pickupNumber: number = 0;

  private constructor() {}
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
