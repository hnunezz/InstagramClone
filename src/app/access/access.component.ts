import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss']
})
export class AccessComponent implements OnInit {

  public changeVisualization: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public displayPanel(event: number): void{
    this.changeVisualization = event == 0 ? true : false
  }

}
