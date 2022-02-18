import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from 'src/app/Model/Cv';

@Component({
  selector: 'app-item-of-list',
  templateUrl: './item-of-list.component.html',
  styleUrls: ['./item-of-list.component.css']
})
export class ItemOfListComponent implements OnInit {
  @Input() cv!:Cv;
  @Output() selectedCv= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
selectCv(){
  this.selectedCv.emit(this.cv);
}
}
