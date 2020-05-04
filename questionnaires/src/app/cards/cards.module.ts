import { MaterialModule } from './../material/material.module';
import { CardsComponent } from './cards.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireCardComponent } from './questionnaire-card/questionnaire-card.component';



@NgModule({
  declarations: [CardsComponent,QuestionnaireCardComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[CardsComponent]
})
export class CardsModule { }
