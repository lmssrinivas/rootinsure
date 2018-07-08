import { Component, OnInit } from '@angular/core';
import {ICard} from "../shared/card/card.interface";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  cards: Array<ICard> = [];

  constructor() {
  }

  ngOnInit() {

    this.cards = [
      {
        thumbnail: '',
        title: 'Plan 1'
      },
      {
        thumbnail: '',
        title: 'Plan 2'
      },
      {
        thumbnail: '',
        title: 'Plan 3'
      }
    ]

  }
}
