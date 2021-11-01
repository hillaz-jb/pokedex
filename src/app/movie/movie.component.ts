import { Component, OnInit } from '@angular/core';
import {IMDBService} from "../services/imdb.service";
import {ActivatedRoute} from "@angular/router";
import {IMovie} from "../../models/movie";
import {IChamp} from "../../models/champ";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  myID: string = '';
  myArrayMovie: Array<IMovie> = [];
  myPosterUrl: string = '';

  constructor(private myImdbService: IMDBService, private myActivatedRoute: ActivatedRoute) {
    this.myArrayMovie = this.myImdbService.myArrayMovieService;
  }

  ngOnInit(): void {
    this.myActivatedRoute.params.subscribe(param => {this.myID = param.id;
    });

    this.myImdbService.getPosters(this.myID).subscribe((data: IMovie) => {
      this.myPosterUrl = data.posters[0].link;

    });
  }

  theMovie(): IMovie{
    return this.myArrayMovie.filter(array => array.id === this.myID)[0];
  }

}
