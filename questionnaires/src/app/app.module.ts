import { MaterialModule } from './material/material.module';
import { environment } from './../environments/environment';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsComponent } from './cards/cards.component';
import { CardsModule } from './cards/cards.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
CardsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
