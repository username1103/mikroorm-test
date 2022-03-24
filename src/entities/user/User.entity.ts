import {
  Entity,
  EntityRepositoryType,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { UserRepository } from "../../user/user.repository";
import { UserType, UserTypeTransformer } from "./types";

@Entity({ tableName: "user", customRepository: () => UserRepository })
export class User {
  [EntityRepositoryType]?: UserRepository;

  @PrimaryKey({ name: "usr_id" })
  private id!: number;

  @Property({ name: "usr_name", length: 30 })
  private name!: string;

  @Property({ name: "usr_phone", length: 30 })
  private phone!: string;

  @Property({ name: "usr_email", length: 200, nullable: true })
  private email?: string;

  @Property({ name: "usr_password", length: 100 })
  private password!: string;

  @Property({
    name: "usr_type",
    columnType: "tinyint",
    default: 0,
    customType: new UserTypeTransformer(),
  })
  private type: UserType;

  @Property({
    name: "usr_join_date",
    nullable: true,
    defaultRaw: `CURRENT_TIMESTAMP`,
  })
  private joinDate?: Date;

  @Property({ name: "usr_login_date", nullable: true })
  private loginDate?: Date;

  private constructor() {}

  /* 생성로직 */
  static create({
    name,
    phone,
    password,
    email,
    type,
    loginDate,
  }: {
    name: string;
    phone: string;
    password: string;
    email?: string;
    type: UserType;
    loginDate?: Date;
  }) {
    const user = new User();
    user.name = name;
    user.phone = phone;
    user.password = password;
    user.email = email;
    user.type = type;
    user.loginDate = loginDate;
  }

  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
