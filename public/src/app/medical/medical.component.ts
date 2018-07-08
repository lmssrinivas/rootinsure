import { Component, OnInit } from '@angular/core';
import {ICard} from "../shared/card/card.interface";

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.scss']
})
export class MedicalComponent implements OnInit {

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
