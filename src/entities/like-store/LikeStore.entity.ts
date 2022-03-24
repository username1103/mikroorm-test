import {
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Unique,
} from "@mikro-orm/core";
import { Store } from "../store/Store.entity";
import { User } from "../user/User.entity";

@Entity()
@Unique({ name: "unique_str_id_usr_id", properties: ["store", "user"] })
export class LikeStore {
  @PrimaryKey({ name: "like_str_id" })
  private id!: number;

  @ManyToOne({
    entity: () => Store,
    fieldName: "str_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    joinColumn: "str_id",
    referenceColumnName: "str_id",
    wrappedReference: true,
  })
  private store!: IdentifiedReference<Store>;

  @ManyToOne({
    entity: () => User,
    fieldName: "usr_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    index: "FK_like_store_usr_id_user_usr_id",
    joinColumn: "usr_id",
    referenceColumnName: "usr_id",
    wrappedReference: true,
  })
  private user!: IdentifiedReference<User>;

  private constructor() {}
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
