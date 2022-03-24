export class ProductDay {
  private Mon: number;

  private Tue: number;

  private Wed: number;

  private Thu: number;

  private Fri: number;

  private Sat: number;

  private Sun: number;

  constructor(prd_day: string) {
    [this.Mon, this.Tue, this.Wed, this.Thu, this.Fri, this.Sat, this.Sun] =
      prd_day.split("").map((value) => parseInt(value, 10));
  }

  toString() {
    return [
      this.Mon,
      this.Tue,
      this.Wed,
      this.Thu,
      this.Fri,
      this.Sat,
      this.Sun,
    ].join("");
  }
}
