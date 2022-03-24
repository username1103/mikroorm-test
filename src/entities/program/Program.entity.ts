import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { ProgramStatus, ProgramStatusTransformer } from "./types";

@Entity({ tableName: "program" })
export class Program {
  @PrimaryKey({ name: "prg_id", autoincrement: true })
  private id!: number;

  @Property({ name: "prg_name", length: 45 })
  private name!: string;

  @Property({ name: "prg_subtitle", length: 100 })
  private subtitle!: string;

  @Property({ name: "prg_contents", columnType: "text", length: 65535 })
  private contents!: string;

  @Property({ name: "prg_img", columnType: "text", length: 65535 })
  private image!: string;

  @Property({
    name: "prg_status",
    columnType: "tinyint",
    default: 0,
    customType: new ProgramStatusTransformer(),
  })
  private status: ProgramStatus;

  private constructor() {}
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
