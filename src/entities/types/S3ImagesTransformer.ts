import { S3Image } from "./S3Image";
import { Platform, Type } from "@mikro-orm/core";

export class S3ImagesTransformer extends Type<S3Image[], string> {
  convertToDatabaseValue(
    value: S3Image[],
    platform: Platform,
    fromQuery?: boolean
  ): string {
    return value.map((s3Image) => s3Image.key).join(",");
  }

  convertToJSValue(value: string, platform: Platform): S3Image[] {
    return value.split(",").map((key) => S3Image.create(key));
  }
}
