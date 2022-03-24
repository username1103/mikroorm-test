// import { imageService } from "../../config/image.service";

export class S3Image {
  private _key: string;

  get key() {
    return this._key;
  }

  get signUrl() {
    return {
      key: this._key,
      // url: imageService.presign(this._key),
    };
  }

  static create(key: string): S3Image {
    if (key === "") {
      throw Error("Invalid Image Key");
    }

    const s3Image = new S3Image();
    s3Image._key = key;

    return s3Image;
  }
}
