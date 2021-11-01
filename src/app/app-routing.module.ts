import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GlobalpokedexComponent} from "./globalpokedex/globalpokedex.component";
import {PokedetailComponent} from "./pokedetail/pokedetail.component";
import {LolChampComponent} from "./lol-champ/lol-champ.component";
import {LolChampDetailsComponent} from "./lol-champ-details/lol-champ-details.component";
import {HomeComponent} from "./home/home.component";
import {IMDBTop250Component} from "./imdbtop250/imdbtop250.component";
import {MovieComponent} from "./movie/movie.component";

const routes: Routes = [
  { path: 'pokedex', component: GlobalpokedexComponent },
  { path: 'detail/:id', component: PokedetailComponent },
  { path: 'lol', component: LolChampComponent },
  { path: 'lol/champion/:id', component: LolChampDetailsComponent },
  { path: '', component: HomeComponent },
  { path: 'imdb', component: IMDBTop250Component },
  { path: 'imdb/:id', component: MovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
