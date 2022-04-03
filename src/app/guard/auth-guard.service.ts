import { CanActivate} from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "../Service/auth.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private auth: AuthService, private router: Router){ }

    canActivate(): boolean{
      return this.auth.authenticated();
    }

}
