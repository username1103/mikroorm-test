import { Get, HttpCode, JsonController } from "routing-controllers";
import { Service } from "typedi";
import { UserService } from "./user.service";

@Service()
@JsonController("/users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/")
  @HttpCode(200)
  async hello() {
    const result = await this.userService.create("test", "01050568216");
    return result;
  }

  @Get("/test")
  @HttpCode(200)
  async get() {
    const result = await this.userService.search("test");
    return result;
  }
}
