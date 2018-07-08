import { Component, OnInit } from '@angular/core';
import {ICard} from "../shared/card/card.interface";

@Component({
  selector: 'app-dental',
  templateUrl: './dental.component.html',
  styleUrls: ['./dental.component.scss']
})
export class DentalComponent implements OnInit {

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
