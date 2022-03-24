import {
  Entity,
  IdentifiedReference,
  ManyToOne,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Store } from "../store/Store.entity";
import { S3Image } from "../types/S3Image";
import { S3ImagesTransformer } from "../types/S3ImagesTransformer";
import {
  ProductDay,
  ProductDayTransformer,
  ProductStatus,
  ProductStatusTransformer,
  ProductVeganType,
  ProductVeganTypeTransformer,
} from "./types";

@Entity({ tableName: "product" })
export class Product {
  @PrimaryKey({ name: "prd_id", autoincrement: true })
  private id!: number;

  @Property({ name: "name", length: 45 })
  private name!: string;

  @ManyToOne({
    entity: () => Store,
    fieldName: "str_id",
    onUpdateIntegrity: "cascade",
    onDelete: "cascade",
    index: "FK_product_str_id_store_str_id",
    joinColumn: "str_id",
    referenceColumnName: "str_id",
    wrappedReference: true,
  })
  private store!: IdentifiedReference<Store>;

  @Property({ name: "prd_amount", length: 45 })
  private amount!: string;

  @Property({ name: "prd_contents", length: 100 })
  private contents!: string;

  @Property({
    name: "prd_veg",
    columnType: "tinyint",
    default: 0,
    customType: new ProductVeganTypeTransformer(),
  })
  private veganType: ProductVeganType;

  @Property({ name: "prd_price", default: 0 })
  private price: number = 0;

  @Property({
    name: "prd_day",
    length: 10,
    default: "0000000",
    customType: new ProductDayTransformer(),
  })
  private enableDays!: ProductDay;

  @Property({
    name: "prd_img",
    length: 100,
    comment: "프로덕트 이미지(추후 제거 예정)",
  })
  private image!: string;

  @Property({
    name: "prd_status",
    columnType: "tinyint",
    default: 0,
    customType: new ProductStatusTransformer(),
  })
  private status: ProductStatus;

  @Property({
    name: "prd_images",
    length: 15000,
    customType: new S3ImagesTransformer(),
  })
  private images!: S3Image[];

  private constructor() {}
  /* 생성로직 */
  /* Getter */
  /* Setter */
  /* 비즈니스 로직 */
}
