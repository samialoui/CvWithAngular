import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  firstname="sami";
  name="aloui";
  age="25";
  job="student";
  image="rotating_card_profile2.png";
  constructor() { }

  ngOnInit(): void {
  }

}
