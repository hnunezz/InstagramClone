import { User } from "../models/user.model";

export class AuthService{
  public RegisterUser(user: User): void{
    console.log("chegamos na service,", user)
  }
}
