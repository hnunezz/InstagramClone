import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output()
  public displayPanel: EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  public openLogin(): void{
    this.displayPanel.emit(1)
  }

}
