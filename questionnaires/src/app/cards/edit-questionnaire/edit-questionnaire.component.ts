import { Card } from "src/app/models/card.model";
import { QuestionnaireFormComponent } from "./../questionnaire-form/questionnaire-form.component";
import { CardsService } from "./../../core/services/cards.service";
import { Component, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { tap } from "rxjs/operators";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-edit-questionnaire",
  templateUrl: "./edit-questionnaire.component.html",
  styleUrls: ["./edit-questionnaire.component.scss"],
})
export class EditQuestionnaireComponent {
  @ViewChild("questionnaireForm", { static: false })
  questionnaireForm: QuestionnaireFormComponent;
  card: Card;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tost: MatSnackBar,
    private cardService: CardsService
  ) {}

  ngAfterViewInit() {
    this.loadCard();
  }

  editQuestionnaireForm() {
    this.cardService
      .editCard(this.card.key, this.questionnaireForm.form.value)
      .then(this.onEditSuccess.bind(this), this.onEditFailure.bind(this));
  }

  private onEditSuccess() {
    this.router.navigate(["/dashboard"]);
    this.tost.open("Kwestionariusz został edytowany pomyślnie", "", {
      panelClass: "toast-success",
    });
  }
  private onEditFailure(error) {
    this.tost.open(error.message, "", { panelClass: "toast-error" });
  }

  private loadCard() {
    const key = this.route.snapshot.params["key"];
    this.cardService
      .getCard(key)
      .pipe(tap((card) => this.questionnaireForm.setCard(card)))
      .subscribe((card) => (this.card = card));
  }
}
