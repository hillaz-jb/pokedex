import {IPoster} from "./posterImdb";

export interface IMovie {
  id: string;
  imDbId: string;
  rank: string;
  title: string;
  year: string;
  image: string;
  imDbRating: string;
  posters: Array<IPoster>;
}
