import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IChamp} from "../../models/champ";
import {IIMDB250} from "../../models/IMDB250";
import {IMovie} from "../../models/movie";

@Injectable({
  providedIn: 'root'
})
export class IMDBService {

  myArrayMovieService: Array<IMovie> = [];

  constructor(private myHttpClient: HttpClient) {
    this.AllMovies.subscribe((myData: IIMDB250) => {
      for (let i= 0; i < myData.items.length; i++){
        this.myArrayMovieService.push(myData.items[i]);
      }
    });

  }

  public get AllMovies(): Observable<IIMDB250> {
    return this.myHttpClient.get<IIMDB250>("https://imdb-api.com/en/API/Top250Movies/k_flo0rvql");
  }

  public getPosters(idMovie: string): Observable<IMovie> {
    return this.myHttpClient.get<IMovie>(`https://imdb-api.com/en/API/Posters/k_flo0rvql/${idMovie}`);
  }
}
