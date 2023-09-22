import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { cardsData } from "../../../data";

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css']
})
export class CardContentComponent implements OnInit {

  @Input()
  imageUrl: string = 'https://casaeconstrucao.org/wp-content/uploads/2016/09/sinteco-como-aplicar.jpg';

  @Input()
  title: string = 'O que é sinteco?';

  @Input()
  description: string = 'O sinteco é um verniz para madeira que traz em sua composição formol e ureia. Sua função é revestir pisos, sendo encontrado nos acabamentos brilhante, fosco e acetinado.';

  constructor(
    private route: ActivatedRoute,
  ) {}
  ngOnInit () {
      this.route.paramMap.subscribe(value => {
        const cardId = value.get("Id");
        const cardContent = cardsData.find(card => card.id === cardId) ;
        if (cardContent) {
          this.title = cardContent.title;
          this.description = cardContent.description;
          this.imageUrl = cardContent.imageUrl;
        }
      })
  }
}
