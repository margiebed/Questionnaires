import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Component, OnInit, Input, Inject } from "@angular/core";
import { Card } from "src/app/models/card.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
})
export class DetailsComponent {
  @Input() card: Card;

  constructor(
    private dialogRef: MatDialogRef<DetailsComponent>,
    private router: Router,

    @Inject(MAT_DIALOG_DATA) private data: Card
  ) {
    this.card = data;
  }

  close() {
    this.dialogRef.close();
  }

  goToEditQuestionnaireModal() {
    this.dialogRef.close();
    this.router.navigate(["/dashboard/cards", this.card.key]);
  }
}
