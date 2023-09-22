import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input()
  Id: string = "1";

  @Input()
  imageUrl: string = '';

  @Input()
  title: string = '';

  @Input()
  description: string = '';

  constructor(
  ) {
  }
  ngOnInit () {

  }
}
