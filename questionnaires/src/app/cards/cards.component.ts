import { Card } from "./../models/card.model";
import { Observable } from "rxjs";
import { Component, OnInit, Input } from "@angular/core";
import { CardsService } from "../core/services/cards.service";
import { MatDialog } from '@angular/material/dialog';
import { NewQuestionnaireComponent } from './new-questionnaire/new-questionnaire.component';

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.scss"],
})
export class CardsComponent {
  constructor(private cardsService: CardsService,
    private dialog: MatDialog) {}
  cards$: Observable<Card[]> = this.cardsService.getQuestionnaresCard();

  openQuestionnaireModal() {
    this.dialog.open(NewQuestionnaireComponent)
  }
}
