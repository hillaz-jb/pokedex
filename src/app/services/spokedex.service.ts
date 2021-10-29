import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPokemon} from "../../models/pokemon";
import {IPokeByUrl} from "../../models/pokeByUrl";
import {IPokelist} from "../../models/pokelist";
import {IPokeSpecies} from "../../models/pokeSpecies";
//import {IPokemonList} from "../../models/pokemonList";

@Injectable({
  providedIn: 'root'
})
export class SpokedexService {

  constructor(private myHttpClient: HttpClient) { }

  public get OnePokemon(): Observable<IPokemon> {
    return this.myHttpClient.get<IPokemon>("https://pokeapi.co/api/v2/pokemon/25");

  }

  public get SomePokemon(): Observable<IPokelist> {
    return this.myHttpClient.get<IPokelist>("https://pokeapi.co/api/v2/pokemon?limit=12&offset=0");
  }

  public OnePokemonX(nb: number): Observable<IPokemon> {
    return this.myHttpClient.get<IPokemon>("https://pokeapi.co/api/v2/pokemon/"+nb);
  }

  public OnePokemonSpecies(nb: number): Observable<IPokeSpecies> {
    return this.myHttpClient.get<IPokeSpecies>("https://pokeapi.co/api/v2/pokemon-species/"+nb);
  }
}
