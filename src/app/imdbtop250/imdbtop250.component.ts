import { Component, OnInit } from '@angular/core';
import {IChamp} from "../../models/champ";
import {IMDBService} from "../services/imdb.service";
import {IIMDB250} from "../../models/IMDB250";
import {IMovie} from "../../models/movie";

@Component({
  selector: 'app-imdbtop250',
  templateUrl: './imdbtop250.component.html',
  styleUrls: ['./imdbtop250.component.scss']
})
export class IMDBTop250Component implements OnInit {
  myArrayMovie: Array<IMovie> = [];

  constructor(private myImdbService: IMDBService) {
    this.myArrayMovie = this.myImdbService.myArrayMovieService;
  }

  ngOnInit(): void {

  }

  limitedshow(rankMin: number, rankMax: number): Array<IMovie>{
    return this.myArrayMovie.filter(cropArray => parseInt(cropArray.rank) >= rankMin && parseInt(cropArray.rank) <= rankMax);
  }

}
