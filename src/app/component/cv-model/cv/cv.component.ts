import { Component, OnInit } from '@angular/core';
import { Cv } from 'src/app/Model/Cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  listCv:Cv[]=[];
  selectedCv!:Cv;

  constructor() { }

  ngOnInit(): void {
    this.listCv=[
      new Cv(1,"wissal","toumi",21,"student","13476409","rotating_card_profile.png"),
      new Cv(1,"karim","selmi",31,"teacher","12014720","rotating_card_profile2.png"),
      new Cv(1,"sami","aloui",25,"student","14582014","rotating_card_profile3.png")

    ];
  }

  selectCv(cv:any){
    this.selectedCv=cv;
  }

}
