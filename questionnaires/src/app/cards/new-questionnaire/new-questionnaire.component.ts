import { CardsService } from "./../../core/services/cards.service";
import { QuestionnaireFormComponent } from "./../questionnaire-form/questionnaire-form.component";
import { MatDialogRef } from "@angular/material/dialog";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-new-questionnaire",
  templateUrl: "./new-questionnaire.component.html",
  styleUrls: ["./new-questionnaire.component.scss"],
})
export class NewQuestionnaireComponent implements OnInit {
  @ViewChild("questionnaireForm") questionnaireForm: QuestionnaireFormComponent;

  constructor(
    private cardService: CardsService,
    private tost: MatSnackBar,
    private dialogRef: MatDialogRef<NewQuestionnaireComponent>
  ) {}

  ngOnInit(): void {}

  createQuestionnaire() {
    this.cardService
      .addQuestionnaresCard(this.questionnaireForm.form.value)
      .then(
        this.onCreatingSuccess.bind(this),
        this.onCreatingFailure.bind(this)
      );
  }

  private onCreatingSuccess() {
    this.dialogRef.close();
    this.tost.open("Kwestionariusz został dodany pomyślnie", "", {
      panelClass: "toast-success",
    });
  }

  private onCreatingFailure(error) {
    this.tost.open(error.message, "", { panelClass: "toast-error" });
  }

  close() {
    this.dialogRef.close();
  }
}
