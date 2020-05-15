import { DetailsComponent } from "./details/details.component";
import { Card } from "./../models/card.model";
import { Observable } from "rxjs";
import { Component, OnInit, Input, Inject } from "@angular/core";
import { CardsService } from "../core/services/cards.service";
import { MatDialog } from "@angular/material/dialog";
import { NewQuestionnaireComponent } from "./new-questionnaire/new-questionnaire.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.scss"],
})
export class CardsComponent {
  cards$: Observable<Card[]> = this.cardsService.getQuestionnaresCard();

  constructor(private cardsService: CardsService, private dialog: MatDialog) {}

  openQuestionnaireModal() {
    this.dialog.open(NewQuestionnaireComponent);
  }

  showDetails(card) {
    this.dialog.open(DetailsComponent, { data: card });
  }
}
