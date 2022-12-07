import { useQuery } from '@tanstack/react-query';
import { PokeClient } from '../../pages/_app';
import { pokemonListQuery } from '@/queries/pokemon-list';

export const useGetPokemonList = () => {
  return useQuery(['pokemon-list'], async () => {
    const { pokemon_v2_pokemon } = await PokeClient.request(pokemonListQuery);

    return pokemon_v2_pokemon;
  });
};
