import { QuestionnaireFormComponent } from "./../questionnaire-form/questionnaire-form.component";
import { MatDialogRef } from "@angular/material/dialog";
import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-new-questionnaire",
  templateUrl: "./new-questionnaire.component.html",
  styleUrls: ["./new-questionnaire.component.scss"],
})
export class NewQuestionnaireComponent implements OnInit {
  @ViewChild("questionnaireForm") questionnaireForm: QuestionnaireFormComponent;

  constructor(private dialogRef: MatDialogRef<NewQuestionnaireComponent>) {}

  ngOnInit(): void {}
}
