import {
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Property,
  Unique,
  wrap,
} from "@mikro-orm/core";
import { Term } from "../term/Term.entity";
import { User } from "../user/User.entity";
import { AgreementStatus, AgreementStatusTransformer } from "./types";

@Entity({ tableName: "agreement" })
@Unique({ name: "Unique_usr_id_term_id", properties: ["user", "term"] })
export class Agreement {
  @PrimaryKey({ name: "ag_id", autoincrement: true })
  private id!: number;

  @ManyToOne({
    entity: () => User,
    fieldName: "usr_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    joinColumn: "usr_id",
    referenceColumnName: "usr_id",
    wrappedReference: true,
  })
  private user!: IdentifiedReference<User>;

  @ManyToOne({
    entity: () => Term,
    fieldName: "term_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    index: "FK_agreement_term_id_term_term_id",
    joinColumn: "term_id",
    referenceColumnName: "term_id",
    wrappedReference: true,
  })
  private term!: IdentifiedReference<Term>;

  @Property({
    name: "ag_isagree",
    columnType: "tinyint",
    customType: new AgreementStatusTransformer(),
  })
  private status!: AgreementStatus;

  @Property({ name: "ag_date", defaultRaw: `CURRENT_TIMESTAMP` })
  private created_at!: Date;

  private constructor() {}

  /* 생성로직 */
  static create({
    status,
    user,
    term,
  }: {
    status: AgreementStatus;
    user: User;
    term: Term;
  }) {
    const agreement = new Agreement();
    agreement.status = status;
    agreement.term = wrap(term).toReference();
    agreement.user = wrap(user).toReference();

    return agreement;
  }
}
