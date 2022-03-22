import { User } from "../models/user.model";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { UtilsService } from "./utils.service";
export class AuthService {

  public errorMessageLogin?: string;
  public hasError: boolean = false;

  public RegisterUser(user: User): Promise<any> {
    const auth = getAuth();
    const DTB = getDatabase()

    return createUserWithEmailAndPassword(auth, user.email, user.password)
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

  public auth(email: string, password: string): void{
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((answer: any) => {
        this.hasError = false
          console.log(answer)
      })
      .catch((error: Error) =>
      {
        this.errorMessageLogin ="Usuário não encontrado. Verifique as Credenciais!"
        this.hasError = true
          console.log(error)
      })
  }
}
