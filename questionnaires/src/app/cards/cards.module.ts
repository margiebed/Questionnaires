import { MaterialModule } from "./../material/material.module";
import { CardsComponent } from "./cards.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { QuestionnaireCardComponent } from "./questionnaire-card/questionnaire-card.component";
import { NewQuestionnaireComponent } from "./new-questionnaire/new-questionnaire.component";
import { QuestionnaireFormComponent } from "./questionnaire-form/questionnaire-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditQuestionnaireComponent } from "./edit-questionnaire/edit-questionnaire.component";
import { DetailsComponent } from "./details/details.component";

@NgModule({
  declarations: [
    CardsComponent,
    QuestionnaireCardComponent,
    NewQuestionnaireComponent,
    QuestionnaireFormComponent,
    EditQuestionnaireComponent,
    DetailsComponent,
  ],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  entryComponents: [NewQuestionnaireComponent, DetailsComponent],
  exports: [CardsComponent],
})
export class CardsModule {}
