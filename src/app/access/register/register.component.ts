import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UtilsService } from 'src/app/Service/utils.service';
import { AuthService } from 'src/app/Service/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public formRegisterUser: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'name': new FormControl(null),
    'user': new FormControl(null),
    'password': new FormControl(null)
  })

  @Output()
  public displayPanel: EventEmitter<number> = new EventEmitter()

  constructor(public UtilsService: UtilsService, public AuthService: AuthService) { }

  ngOnInit(): void {
  }

  public openLogin(): void {
    this.displayPanel.emit(1)
  }

  public submitRegister(): void {

    const user: User = new User(
      this.formRegisterUser.value.email,
      this.formRegisterUser.value.name,
      this.formRegisterUser.value.user,
      this.formRegisterUser.value.password
    )

    this.AuthService.RegisterUser(user)
      .then(() => {
        this.openLogin()
        alert("usuario cadastrado com sucesso")
      })
  }

}

