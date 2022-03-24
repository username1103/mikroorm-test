import { IsArray, Matches } from "class-validator";

export class StoreOpen {
  @IsArray()
  @Matches(/^([01][0-9]|2[0-3]):([0-5][0-9])$/, { each: true })
  mon: string[] = [];

  @IsArray()
  @Matches(/^([01][0-9]|2[0-3]):([0-5][0-9])$/, { each: true })
  tue: string[] = [];

  @IsArray()
  @Matches(/^([01][0-9]|2[0-3]):([0-5][0-9])$/, { each: true })
  wed: string[] = [];

  @IsArray()
  @Matches(/^([01][0-9]|2[0-3]):([0-5][0-9])$/, { each: true })
  thu: string[] = [];

  @IsArray()
  @Matches(/^([01][0-9]|2[0-3]):([0-5][0-9])$/, { each: true })
  fri: string[] = [];

  @IsArray()
  @Matches(/^([01][0-9]|2[0-3]):([0-5][0-9])$/, { each: true })
  sat: string[] = [];

  @IsArray()
  @Matches(/^([01][0-9]|2[0-3]):([0-5][0-9])$/, { each: true })
  sun: string[] = [];
}
