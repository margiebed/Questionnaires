import { Card } from "./../models/card.model";
import { Observable } from "rxjs";
import { Component, OnInit, Input } from "@angular/core";
import { CardsService } from "../core/services/cards.service";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.scss"],
})
export class CardsComponent {
  constructor(private cardsService: CardsService) {}
  cards$: Observable<Card[]> = this.cardsService.getQuestionnaresCard();

  openQuestionnaireModule(){
    
  }
}
