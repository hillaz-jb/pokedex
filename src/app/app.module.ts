import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalpokedexComponent } from './globalpokedex/globalpokedex.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { PokedetailComponent } from './pokedetail/pokedetail.component';
import { LolChampComponent } from './lol-champ/lol-champ.component';
import { LolChampDetailsComponent } from './lol-champ-details/lol-champ-details.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalpokedexComponent,
    PokedetailComponent,
    LolChampComponent,
    LolChampDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
