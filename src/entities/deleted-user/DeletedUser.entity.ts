import {
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { User } from "../user/User.entity";

@Entity({ tableName: "deleted_user" })
export class DeletedUser {
  @PrimaryKey({ name: "du_id", autoincrement: true })
  private id!: number;

  @ManyToOne({
    entity: () => User,
    fieldName: "usr_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    index: "FK_deleted_user_usr_id_user_usr_id",
    joinColumn: "usr_id",
    referenceColumnName: "usr_id",
    wrappedReference: true,
  })
  private user!: IdentifiedReference<User>;

  @Property({ name: "du_date" })
  private deletedDate!: Date;

  @Property({ name: "du_reason", length: 100 })
  private reason!: string;

  @Property({ name: "created_at", defaultRaw: `CURRENT_TIMESTAMP` })
  private createdAt!: Date;

  @Property({ name: "updated_at", defaultRaw: `CURRENT_TIMESTAMP` })
  private updatedAt!: Date;

  private constructor() {}
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
