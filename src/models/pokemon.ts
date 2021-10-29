export interface IPokemon {
  name: string;
  id: number;
  sprites: {
    other: {
      'official-artwork': {
        'front_default': string;
      }
    }
  }
}
