import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GlobalpokedexComponent} from "./globalpokedex/globalpokedex.component";
import {PokedetailComponent} from "./pokedetail/pokedetail.component";
import {LolChampComponent} from "./lol-champ/lol-champ.component";
import {LolChampDetailsComponent} from "./lol-champ-details/lol-champ-details.component";

const routes: Routes = [
  { path: '', component: GlobalpokedexComponent },
  { path: 'detail/:id', component: PokedetailComponent },
  { path: 'lol', component: LolChampComponent },
  { path: 'lol/champion/:id', component: LolChampDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
