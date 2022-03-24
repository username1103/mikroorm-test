import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { S3Image } from "../types/S3Image";
import { S3ImagesTransformer } from "../types/S3ImagesTransformer";
import {
  StoreKit,
  StoreKitTransformer,
  StoreOpen,
  StoreStatus,
  StoreStatusTransformer,
} from "./types";

@Entity({ tableName: "store" })
export class Store {
  @PrimaryKey({ name: "str_id", autoincrement: true })
  private id!: number;

  @Property({ name: "str_name", length: 45 })
  private name!: string;

  @Property({ name: "str_phone", length: 45 })
  private phone!: string;

  @Property({ columnType: "json" })
  private strOpen!: StoreOpen;

  @Property({
    columnType: "tinyint",
    default: 1,
    customType: new StoreStatusTransformer(),
  })
  private strStatus: StoreStatus;

  @Property({ name: "str_image", length: 500 })
  private image!: string;

  @Property({ name: "str_launch_date", nullable: true })
  private launchDate?: Date;

  @Property({ name: "str_closed_date", nullable: true })
  private closedDate?: Date;

  @Property({ name: "str_contents", length: 300 })
  private contents!: string;

  @Property({ name: "str_with_sw", columnType: "tinyint", default: 0 })
  private strWithSw: number = 0;

  @Property({ name: "str_base", columnType: "text", length: 65535 })
  private strBase!: string;

  @Property({
    name: "str_kit",
    length: 10,
    default: "000",
    customType: new StoreKitTransformer(),
  })
  private kitTypes!: StoreKit;

  @Property({ name: "str_dressing_content", length: 300 })
  private dressingContent!: string;

  @Property({
    name: "str_images",
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
