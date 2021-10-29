import {IAllChampKey} from "./allChampKey";

export interface IAllChamp {
  data: {
    [key: string]: IAllChampKey
  };
}
