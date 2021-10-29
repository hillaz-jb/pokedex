import {IAllChampKey} from "./allChampKey";

export interface IChamp {
  data: {
    [key: string]: IAllChampKey
  }
}
