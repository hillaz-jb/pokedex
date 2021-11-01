import { Component, OnInit } from '@angular/core';
import {LolService} from "../services/lol.service";
import {IChamp} from "../../models/champ";
import {IAllChampKey} from "../../models/allChampKey";

@Component({
  selector: 'app-lol-champ',
  templateUrl: './lol-champ.component.html',
  styleUrls: ['./lol-champ.component.scss']
})
export class LolChampComponent implements OnInit {

  myArrayKey: Array<string> | null = null;
  myArrayAllChamp: Array<IAllChampKey> = [];
  selectedOption: string = 'All';

  constructor(private mylolservice: LolService, ) { }

  ngOnInit(): void {

    this.mylolservice.AllChamp.subscribe((myData: IChamp) => {
      this.myArrayKey = Object.keys(myData.data);
      for (let i= 0; i < this.myArrayKey.length; i++){
        this.myArrayAllChamp.push(myData.data[this.myArrayKey[i]]);
      }
    });
  }

  sortbytag(tag: string): Array<IAllChampKey>{
    if(tag != 'All'){
      return this.myArrayAllChamp.filter(tagArray => tagArray.tags.includes(tag));
    }
    return this.myArrayAllChamp;
  }

}
