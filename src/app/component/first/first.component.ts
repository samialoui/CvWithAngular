import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
   name="sami";
   color="lightblue";
   isHidden=false;
   message='';
  constructor() { }

  ngOnInit(): void {
  }

  AjoutMot(newMot:string){
this.message= newMot;
  }

  changeColor(newColor:string){
    this.color=newColor;
  }
}
