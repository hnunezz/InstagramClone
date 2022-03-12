import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output()
  public displayPanel: EventEmitter<number> = new EventEmitter();

  public formRegisterUser: FormGroup = new FormGroup({
    'user': new FormControl(null),
    'password': new FormControl(null)
  })

  public hasError: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  public openRegister(): void{
    this.displayPanel.emit(0)
  }

}
