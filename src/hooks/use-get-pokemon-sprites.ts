import { PokemonSprites } from '../model/pokemon-sprites';

export const useGetPokemonSprites = (sprites: string) => {
  return JSON.parse(sprites) as PokemonSprites;
};
