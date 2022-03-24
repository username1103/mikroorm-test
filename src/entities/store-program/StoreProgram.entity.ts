import {
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Unique,
} from "@mikro-orm/core";
import { Program } from "../program/Program.entity";
import { Store } from "../store/Store.entity";

@Entity({ tableName: "store_program" })
@Unique({ name: "unique_str_id_prg_id", properties: ["store", "program"] })
export class StoreProgram {
  @PrimaryKey({ name: "str_prg_id", autoincrement: true })
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
    entity: () => Program,
    fieldName: "prg_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    index: "FK_store_program_prg_id_program_prg_id",
    joinColumn: "prg_id",
    referenceColumnName: "prg_id",
    wrappedReference: true,
  })
  private program!: IdentifiedReference<Program>;

  private constructor() {}
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
