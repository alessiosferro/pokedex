import { graphql } from '../gql';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { pokemonDetailQuery } from '@/queries/pokemon-detail';

export const useGetPokemonDetail = (pokemonName: string) => {
  return useQuery(['pokemon-list', pokemonName], async () => {
    const { pokemon_v2_pokemon } = await request('https://beta.pokeapi.co/graphql/v1beta', pokemonDetailQuery, {
      name: pokemonName,
    });

    return pokemon_v2_pokemon;
  });
};
