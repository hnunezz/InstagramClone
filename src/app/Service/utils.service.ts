import { Injectable } from '@angular/core';
import { FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public validateEmail(email: string): boolean{
      var Regex = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;

      if (!Regex.test(email) || email == "" || email == null){
        return true;
      }
      else
      {
        return false;
      }
    }

  public validatePassword(password: string): boolean{
    if(password.length < 6 || password == null || password == undefined){
      return true;
    }
    return false;
  }
}

