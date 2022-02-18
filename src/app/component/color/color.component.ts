import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
colorDefault = 'red';
bgc = this.colorDefault;
  constructor() { }

  ngOnInit(): void {
  }

  changeColor(newColor: string){
    this.bgc = newColor;
  }

}
