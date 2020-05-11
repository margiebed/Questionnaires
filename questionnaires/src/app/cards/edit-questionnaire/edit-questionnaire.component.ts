import { Card } from "src/app/models/card.model";
import { QuestionnaireFormComponent } from "./../questionnaire-form/questionnaire-form.component";
import { CardsService } from "./../../core/services/cards.service";
import { Component, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { tap } from "rxjs/internal/operators";

@Component({
  selector: "app-edit-questionnaire",
  templateUrl: "./edit-questionnaire.component.html",
  styleUrls: ["./edit-questionnaire.component.scss"],
})
export class EditQuestionnaireComponent {
  @ViewChild("questionnaireForm") questionnaireForm: QuestionnaireFormComponent;
  card: Card;
  constructor(
    private route: ActivatedRoute,
    private cardService: CardsService
  ) {}

  ngAfterViewInit() {
    this.loadCard();
  }

  private loadCard() {
    const key = this.route.snapshot.params["key"];
    this.cardService
      .getCard(key)
      .pipe(tap((card) => this.questionnaireForm.setCard(card)))
      .subscribe((card) => (this.card = this.card));
  }
}
