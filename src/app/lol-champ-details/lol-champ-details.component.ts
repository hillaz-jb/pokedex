import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IChamp} from "../../models/champ";
import {LolService} from "../services/lol.service";
import {IAllChampKey} from "../../models/allChampKey";

@Component({
  selector: 'app-lol-champ-details',
  templateUrl: './lol-champ-details.component.html',
  styleUrls: ['./lol-champ-details.component.scss']
})
export class LolChampDetailsComponent implements OnInit {
  myID: string = "";
  myChamp: IAllChampKey | null = null;
  constructor(private mylolservice: LolService, private attributeActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.attributeActivatedRoute.params.subscribe(param => {this.myID = param.id;
    });
    console.log(this.myID);
    this.mylolservice.OneChamp(this.myID).subscribe((data: IChamp) => {
      this.myChamp = data.data[this.myID];

    });

  }
  setTagColor(tag: string): string{
    if(this.myChamp !== null){
      for(let theTag of this.myChamp.tags){
        if(tag === 'Marksman'){
          return '#b3b315'
        }
        if(tag === 'Support'){
          return '#6679c0'
        }
        if(tag === 'Fighter'){
          return 'blue'
        }
      }
    }
    return ""
  }

}
