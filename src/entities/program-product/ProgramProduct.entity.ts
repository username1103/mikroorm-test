import {
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Unique,
} from "@mikro-orm/core";
import { Product } from "../product/Product.entity";
import { Program } from "../program/Program.entity";

@Entity({ tableName: " prgram_product" })
@Unique({ name: "unique_prg_id_prd_id", properties: ["program", "product"] })
export class ProgramProduct {
  @PrimaryKey({ name: "prg_prd_id", autoincrement: true })
  private id!: number;

  @ManyToOne({
    entity: () => Program,
    fieldName: "prg_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    joinColumn: "prg_id",
    referenceColumnName: "prg_id",
    wrappedReference: true,
  })
  private program!: IdentifiedReference<Program>;

  @ManyToOne({
    entity: () => Product,
    fieldName: "prd_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    nullable: true,
    index: "FK_program_product_prd_id_product_prd_id",
    joinColumn: "prd_id",
    referenceColumnName: "prd_id",
    wrappedReference: true,
  })
  private product?: IdentifiedReference<Product>;

  private constructor() {}
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
