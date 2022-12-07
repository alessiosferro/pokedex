import { useQuery } from '@tanstack/react-query';
import { pokemonDetailQuery } from '@/queries/pokemon-detail';
import { PokeClient } from '../../pages/_app';

export const useGetPokemon = (pokemonName: string) => {
  return useQuery(['pokemon', pokemonName], async () => {
    const { pokemon_v2_pokemon } = await PokeClient.request(
      pokemonDetailQuery,
      {
        name: pokemonName,
      }
    );

    return pokemon_v2_pokemon;
  });
};
