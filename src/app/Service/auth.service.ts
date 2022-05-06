import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { User } from "../models/user.model";
import { UtilsService } from "./utils.service";

@Injectable()
export class AuthService {

  public errorMessageLogin?: string;
  public errorList?: string[];
  public hasError: boolean = false;
  public token: string | undefined | null;

  constructor(private router: Router, private utilsService: UtilsService) { }

  public RegisterUser(user: User): Promise<any> {
    const auth = getAuth();
    const DTB = getDatabase();

    return createUserWithEmailAndPassword(auth, user.email, user.password)
    .then(() => {
      set(ref(DTB, `users/${user.name}`), {
        name: user.name,
        email: user.email,
        user: user.user
      });

    })
    .catch((_) => {
        this.errorList = [];

        if (this.utilsService.validateEmail(user.email)) {
          this.errorList.push("Email inválido!");
        }

        if (this.utilsService.validatePassword(user.password)) {
          this.errorList.push("Senha inválida!");
        }
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
        this.errorList = [];
        this.errorList.push("Usuário não encontrado. Verifique as Credenciais!");
        this.hasError = true;
      })
  }

  public authenticated(): boolean {
    if (this.token === undefined && localStorage.getItem('userToken') != null)
      this.token = localStorage.getItem('userToken');

    if (this.token == undefined)
      this.router.navigate(['/']);

    return this.token !== undefined;
  }

  public logout(): void {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        localStorage.removeItem('userToken');
        this.token = undefined;
        this.router.navigate(['/']);
      })
  }
}
