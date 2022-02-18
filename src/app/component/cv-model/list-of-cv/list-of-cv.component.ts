import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from 'src/app/Model/Cv';


@Component({
  selector: 'app-list-of-cv',
  templateUrl: './list-of-cv.component.html',
  styleUrls: ['./list-of-cv.component.css']
})
export class ListOfCvComponent implements OnInit {
  @Input() listCv: Cv[]=[];
  @Output() selectedCv = new EventEmitter<Cv>();

  constructor() { }

  ngOnInit(): void {
  }

  selectCv(selectedCv:any){
    this.selectedCv.emit(selectedCv);
  }
}
