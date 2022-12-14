import { useQuery } from '@tanstack/react-query';
import { PokeClient } from '../../pages/_app';
import { pokemonListQuery } from '@/queries/pokemon-list';
import { PokemonListDatatableParams } from '../model/interfaces';

export const useGetPokemonList = (
  {
    limit,
    order_by,
    direction,
  }: PokemonListDatatableParams = {} as PokemonListDatatableParams
) => {
  return useQuery(['pokemon-list'], async () => {
    const { pokemon_v2_pokemon } = await PokeClient.request(pokemonListQuery, {
      limit,
      order_by: {
        [order_by]: direction,
      },
    });

    return pokemon_v2_pokemon;
  });
};
