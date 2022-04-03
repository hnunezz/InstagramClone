import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { User } from "../models/user.model";

@Injectable()
export class AuthService {

  public errorMessageLogin?: string;
  public hasError: boolean = false;
  public token?: string | null;

  constructor(private router: Router) { }

  public RegisterUser(user: User): Promise<any> {
    const auth = getAuth();
    const DTB = getDatabase()

    return createUserWithEmailAndPassword(auth, user.email, user.password)
      .then(() => {
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

  public auth(email: string, password: string): void {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        this.hasError = false
        auth.currentUser?.getIdToken()
          .then((idToken: string) => {
            this.token = idToken;
            localStorage.setItem('userToken', idToken);
            this.router.navigate(['/home']);
          })
      })
      .catch((error: Error) => {
        this.errorMessageLogin = "Usuário não encontrado. Verifique as Credenciais!";
        this.hasError = true;
        console.log(error);
      })
  }

  public authenticated(): boolean {
    if (this.token === undefined && localStorage.getItem('userToke') != null) {
      this.token = localStorage.getItem('userToken');
    }

    return this.token !== undefined;
  }
}
