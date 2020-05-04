import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-questionnaire-card',
  templateUrl: './questionnaire-card.component.html',
  styleUrls: ['./questionnaire-card.component.scss']
})
export class QuestionnaireCardComponent implements OnInit {
  @Input() card: Card;
  constructor() { }

  ngOnInit(): void {
  }

}
