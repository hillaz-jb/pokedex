import {AfterContentChecked, AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {SpokedexService} from "../services/spokedex.service";
import {IPokemon} from "../../models/pokemon";
import {IPokeByUrl} from "../../models/pokeByUrl";
import {IPokelist} from "../../models/pokelist";
import {IPokeSpecies} from "../../models/pokeSpecies";
import {ISpeciesByID} from "../../models/specieByID";
import {forkJoin} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-globalpokedex',
  templateUrl: './globalpokedex.component.html',
  styleUrls: ['./globalpokedex.component.scss']
})
export class GlobalpokedexComponent implements OnInit {
  myID!: number;
  arrayPoke: Array<IPokeByUrl> | null = null;
  myArrayPokemon: Array<IPokemon> | null = null;
  myArraySpecies: Array<IPokeSpecies>;

  constructor(private mySpokedex: SpokedexService) {
    this.myArraySpecies = [];
  }

  ngOnInit(): void {

    /*
    this.mySpokedex.OnePokemon.subscribe((data: IPokemon) => {
      this.myPoke = data;
      console.log(this.myPoke);
    });
    */

    this.mySpokedex.SomePokemon.subscribe((data: IPokelist) => {
      this.arrayPoke = data.results;
    });
    /*
    for (let i = 1; i < 13; i ++){
      this.mySpokedex.OnePokemonX(i).subscribe((data: IPokemon) => {
        this.myArrayPokemon.push(data);
        this.myArrayPokemon.sort((n1,n2) => {
          if (n1.id > n2.id) {
            return 1;
          }
          if (n1.id < n2.id) {
            return -1;
          }
          return 0;
        });
      });
    }
    */

    //OU (UTILISE MOINS DE RESSOURCES)

    this.mySpokedex.SomePokemon.subscribe((data: IPokelist) => {
      const dataObservable = data.results.map((pokemon: IPokeByUrl) => {
        return this.mySpokedex.OnePokemonX(parseInt(this.getId(pokemon)));
      });
      forkJoin(dataObservable).subscribe((fullPokemon) => {
        this.myArrayPokemon = fullPokemon;
      });
    })

    this.mySpokedex.SomePokemon.subscribe((data: IPokelist) => {
      const dataObservable = data.results.map((pokemon: IPokeByUrl) => {
        return this.mySpokedex.OnePokemonSpecies(parseInt(this.getId(pokemon)));
      });
        forkJoin(dataObservable).subscribe((color) => {
        this.myArraySpecies = color;
      });
    })

  }

  public getId(pokemon: IPokeByUrl): string {
    const result = pokemon.url.match(/^https:\/\/pokeapi\.co\/api\/v2\/pokemon\/([0-9]+)\/?$/);
    if (result) {
      return result[1];
    }
    return '';
  }

}
