import { MaterialModule } from './../material/material.module';
import { CardsComponent } from './cards.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireCardComponent } from './questionnaire-card/questionnaire-card.component';
import { NewQuestionnaireComponent } from './new-questionnaire/new-questionnaire.component';



@NgModule({
  declarations: [CardsComponent, QuestionnaireCardComponent, NewQuestionnaireComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  entryComponents:[CardsComponent],
  exports:[CardsComponent]
})
export class CardsModule { }
