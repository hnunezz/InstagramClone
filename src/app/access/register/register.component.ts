import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UtilsService } from 'src/app/Service/utils.service';
import { AuthService } from 'src/app/Service/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output()
  public displayPanel: EventEmitter<number> = new EventEmitter()

  public hasError: string[] = [];

  public formRegisterUser: FormGroup = new FormGroup({
    'email': new FormControl('', Validators.compose([Validators.required])),
    'name': new FormControl('', Validators.compose([Validators.required])),
    'user': new FormControl('', Validators.compose([Validators.required])),
    'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]))
  })


  constructor(public UtilsService: UtilsService, public AuthService: AuthService) { }

  ngOnInit(): void {
  }

  public openLogin(): void {
    this.displayPanel.emit(1)
  }

  public submitRegister(): void {

    this.hasError = [];
    const user: User = new User(
      this.formRegisterUser.value.email,
      this.formRegisterUser.value.name,
      this.formRegisterUser.value.user,
      this.formRegisterUser.value.password
    )

    if (this.UtilsService.validateEmail(user.email)) {
      this.hasError.push("Email Inválido!");
    }

    if (this.UtilsService.validatePassword(user.password)) {
      this.hasError.push("Senha Inválida!");
    }

    if(this.hasError.length < 0){
      this.AuthService.RegisterUser(user)
        .then(() => {
            this.openLogin();
            this.formRegisterUser.reset();
            this.hasError = []

        })
    }
    }
}

