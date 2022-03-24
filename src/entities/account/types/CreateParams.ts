import { User } from "../../user/User.entity";

export interface CreateParams {
  accountBank: string;
  accountName: string;
  accountNumber: string;
  user: User;
}
