import { Observable } from "rxjs";
import { Component, OnInit, Input, Inject } from "@angular/core";
import { CardsService } from "../core/services/cards.service";
import { MatDialog } from "@angular/material/dialog";
import { NewQuestionnaireComponent } from "./new-questionnaire/new-questionnaire.component";
import { Router } from "@angular/router";
import { Card } from "../models/card.model";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.scss"],
})
export class CardsComponent {
  constructor(
    private cardsService: CardsService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  cards$: Observable<Card[]> = this.cardsService.getQuestionnaresCard();
  cards: Card[] = [];

  openQuestionnaireModal() {
    this.dialog.open(NewQuestionnaireComponent);
  }

  goToEditQuestionnaireModal(card: Card) {
    this.router.navigate(["/dashboard/cards", card.key]);
  }
}
