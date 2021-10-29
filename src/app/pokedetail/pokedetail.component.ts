import { Component, OnInit } from '@angular/core';
import {IPokemon} from "../../models/pokemon";
import {IPokeByUrl} from "../../models/pokeByUrl";
import {IPokeSpecies} from "../../models/pokeSpecies";
import {SpokedexService} from "../services/spokedex.service";
import {ActivatedRoute} from "@angular/router";
import {IPokelist} from "../../models/pokelist";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.scss']
})
export class PokedetailComponent implements OnInit {

  myID!: number;
  myPoke: IPokemon | null = null;
  mySpecie: IPokeSpecies | null = null;

  constructor(private mySpokedex: SpokedexService, private attributeActivatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.attributeActivatedRoute.params.subscribe(param => {this.myID = param.id;
    });

    this.mySpokedex.OnePokemonX(this.myID).subscribe((data: IPokemon) => {
      this.myPoke = data;
    });

    this.mySpokedex.OnePokemonSpecies(this.myID).subscribe((data2: IPokeSpecies) => {
      this.mySpecie = data2;
    });
  }
}
