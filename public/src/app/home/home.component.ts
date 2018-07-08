import {Component, OnInit} from '@angular/core';
import {ICard} from "../shared/card/card.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards: Array<ICard> = [];

  constructor() {
  }

  ngOnInit() {

    this.cards = [
      {
        thumbnail: './assets/images/medical.jpg',
        title: 'Medical'
      },
      {
        thumbnail: './assets/images/dental.jpg',
        title: 'Dental'
      },
      {
        thumbnail: './assets/images/car.jpg',
        title: 'Car'
      }
    ]

  }

}
