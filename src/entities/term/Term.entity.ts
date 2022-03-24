import { Entity, PrimaryKey, Property, t } from "@mikro-orm/core";
import { TermType, TermTypeTransformer } from "./types";
import { TermContent } from "./types/TermContent";

@Entity()
export class Term {
  @PrimaryKey({ name: "term_id", autoincrement: true })
  private id!: number;

  @Property({ name: "term_title", length: 100 })
  private title!: string;

  @Property({ name: "term_wdate", defaultRaw: `CURRENT_TIMESTAMP` })
  private created_at!: Date;

  @Property({ name: "term_group" })
  private group!: number;

  @Property({ name: "term_contents", columnType: "json" })
  private contents!: TermContent[];

  @Property({
    name: "term_required",
    columnType: "tinyint",
    default: 0,
    customType: new TermTypeTransformer(),
  })
  private type: TermType;

  private constructor() {}

  /* 생성로직 */
  static create({
    title,
    group,
    contents,
    type,
  }: {
    title: string;
    group: number;
    contents: TermContent[];
    type: TermType;
  }) {
    const term = new Term();
    term.title = title;
    term.group = group;
    term.contents = contents;
    term.type = type;
    return term;
  }
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
