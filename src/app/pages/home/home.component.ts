import {Component, OnInit} from '@angular/core';
import { cardsData } from '../../../data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards = cardsData;

  constructor() {
  }
  ngOnInit() {}

}
