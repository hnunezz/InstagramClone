import { User } from "../models/user.model";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export class AuthService{
  public RegisterUser(user: User): void{

      const auth = getAuth();

      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((answer: any) => {
          console.log(answer)
        })
        .catch((error: Error) => {
          console.log(error)
        })
      }
}
