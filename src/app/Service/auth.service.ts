import { User } from "../models/user.model";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

export class AuthService{
  public RegisterUser(user: User): void{

      const auth = getAuth();
      const DTB = getDatabase()

      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((answer: any) => {
           set(ref(DTB, `users/${user.name}`), {
             name: user.name,
             email: user.email,
             user: user.user
           });


        })
        .catch((error: Error) => {
          console.log(error)
        })
      }
}
