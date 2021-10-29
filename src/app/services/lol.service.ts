import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IChamp} from "../../models/champ";


@Injectable({
  providedIn: 'root'
})
export class LolService {

  constructor(private myHttpClient: HttpClient) { }

  public OneChamp(name: string): Observable<IChamp> {
    return this.myHttpClient.get<IChamp>(`http://ddragon.leagueoflegends.com/cdn/11.21.1/data/en_US/champion/${name}.json`);
  }

  public get AllChamp(): Observable<IChamp> {
    return this.myHttpClient.get<IChamp>("http://ddragon.leagueoflegends.com/cdn/11.21.1/data/en_US/champion.json");
  }
}
