import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output()
  public displayPanel: EventEmitter<number> = new EventEmitter();

  public formLoginUser: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'password': new FormControl(null)
  })

  constructor(public AuthService: AuthService) { }

  ngOnInit(): void {
  }

  public openRegister(): void {
    this.AuthService.hasError = false;
    this.AuthService.errorList = [];
    this.displayPanel.emit(0);
  }

  public authLogin(): void {
    this.AuthService.auth(this.formLoginUser.value.email, this.formLoginUser.value.password)
  }

}
