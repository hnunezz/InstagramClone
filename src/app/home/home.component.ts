import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public modalView:boolean;

  constructor(private auth: AuthService) {
    this.modalView = false;
  }

  ngOnInit(): void {
  }

  public logout(): void{
    this.auth.logout()
  }

}
