import {
  Entity,
  IdentifiedReference,
  OneToOne,
  Property,
  wrap,
} from "@mikro-orm/core";
import { User } from "../user/User.entity";
import { CreateParams } from "./types";

@Entity({ tableName: "account" })
export class Account {
  @Property({ name: "acc_bank", length: 45 })
  private accountBank!: string;

  @Property({ name: "acc_name", length: 10, nullable: true })
  private accountName?: string;

  @Property({ name: "acc_number", length: 100 })
  private accountNumber!: string;

  @OneToOne({
    entity: () => User,
    fieldName: "usr_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    primary: true,
    joinColumn: "usr_id",
    inverseJoinColumn: "usr_id",
    wrappedReference: true,
  })
  private user!: IdentifiedReference<User>;

  private constructor() {}

  /* 생성로직 */
  static create({
    accountBank,
    accountName,
    accountNumber,
    user,
  }: CreateParams) {
    const account = new Account();
    account.accountBank = accountBank;
    account.accountName = accountName;
    account.accountNumber = accountNumber;
    account.user = wrap(user).toReference();
    return account;
  }

  /* Getter */
  getUser() {
    return this.user.load();
  }

  getBank() {
    return this.accountBank;
  }

  getNumber() {
    return this.accountNumber;
  }

  getName() {
    return this.accountName;
  }

  /* Setter */

  /* 비즈니스 로직 */
}
