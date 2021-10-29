import { Component, OnInit } from '@angular/core';
import {LolService} from "../services/lol.service";
import {IChamp} from "../../models/champ";
import {IAllChamp} from "../../models/allChamp";
import {IAllChampKey} from "../../models/allChampKey";

@Component({
  selector: 'app-lol-champ',
  templateUrl: './lol-champ.component.html',
  styleUrls: ['./lol-champ.component.scss']
})
export class LolChampComponent implements OnInit {

  myArrayKey: Array<string> | null = null;
  myArrayAllChamp: Array<IAllChampKey> = [];

  constructor(private mylolservice: LolService, ) { }

  ngOnInit(): void {

    this.mylolservice.AllChamp.subscribe((myData: IChamp) => {
      this.myArrayKey = Object.keys(myData.data);
      for (let i= 0; i < this.myArrayKey.length; i++){
        this.myArrayAllChamp.push(myData.data[this.myArrayKey[i]]);
      }

      console.log(this.myArrayAllChamp[0].name);

    });
  }

  // FAIRE UN TRI SUR LE TABLEAU POUR UN INPUT MENU DEROULANT TRI PAR TAG

}
