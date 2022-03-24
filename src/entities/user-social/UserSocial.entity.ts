import {
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { User } from "../user/User.entity";
import { UserSocialType, UserSocialTypeTransformer } from "./types";

@Entity({ tableName: "user_social" })
export class UserSocial {
  @PrimaryKey({ name: "usr_social_id", autoincrement: true })
  private id!: number;

  @ManyToOne({
    entity: () => User,
    fieldName: "usr_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    index: "FK_user_social_usr_id_user_usr_id_idx",
    joinColumn: "usr_id",
    referenceColumnName: "usr_id",
    wrappedReference: true,
  })
  private user!: IdentifiedReference<User>;

  @Property({
    name: "social_type",
    length: 15,
    customType: new UserSocialTypeTransformer(),
  })
  private type!: UserSocialType;

  @Property({ name: "social_id", length: 45 })
  private socialId!: string;

  @Property({ name: "usr_social_created_at", defaultRaw: `CURRENT_TIMESTAMP` })
  private createdAt!: Date;

  @Property({ name: "usr_social_updated_at", defaultRaw: `CURRENT_TIMESTAMP` })
  private updatedAt!: Date;

  private constructor() {}
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
