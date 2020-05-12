import { Card } from "./../models/card.model";
import { Observable } from "rxjs";
import { Component, OnInit, Input, Inject } from "@angular/core";
import { CardsService } from "../core/services/cards.service";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { NewQuestionnaireComponent } from "./new-questionnaire/new-questionnaire.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.scss"],
})
export class CardsComponent implements OnInit {
  cards: Card[] = [];

  constructor(
    private cardsService: CardsService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    this.getCards();
  }

  getCards() {
    this.cardsService
      .getQuestionnaresCard()
      .subscribe((card) => (this.cards = card));
  }

  openQuestionnaireModal() {
    this.dialog.open(NewQuestionnaireComponent);
  }

  goToEditQuestionnaireModal(card: Card) {
    this.router.navigate(["/dashboard/cards", card.key]);
  }
}
