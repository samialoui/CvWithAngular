import { Component, Input, OnInit } from '@angular/core';
import { Cv } from 'src/app/Model/Cv';

@Component({
  selector: 'app-details-of-cv',
  templateUrl: './details-of-cv.component.html',
  styleUrls: ['./details-of-cv.component.css']
})
export class DetailsOfCvComponent implements OnInit {
  @Input() cv!: Cv;

  constructor() { }

  ngOnInit(): void {
  }

}
