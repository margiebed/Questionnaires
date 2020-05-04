import { Card } from './../../models/card.model';
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CardsService {
  private API_URL = "questionnaires";
  constructor(private db: AngularFireDatabase) {}

  getQuestionnaresCard(): Observable<Card[]> {
    return this.db
      .list<Card>(this.API_URL)
      .snapshotChanges()
      .pipe(map((response) => response.map((card) => this.assignKey(card))));
  }
  private assignKey(card) {
    return { ...card.payload.val(), key: card.key };
  }
}
