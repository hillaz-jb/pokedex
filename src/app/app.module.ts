import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalpokedexComponent } from './globalpokedex/globalpokedex.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { PokedetailComponent } from './pokedetail/pokedetail.component';
import { LolChampComponent } from './lol-champ/lol-champ.component';
import { LolChampDetailsComponent } from './lol-champ-details/lol-champ-details.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule} from "@angular/forms";
import { IMDBTop250Component } from './imdbtop250/imdbtop250.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalpokedexComponent,
    PokedetailComponent,
    LolChampComponent,
    LolChampDetailsComponent,
    HomeComponent,
    NavbarComponent,
    IMDBTop250Component,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
