import { graphql } from '@/gql/index';

export const pokemonListQuery = graphql(/* GraphQL */ `
  query getPokemonList {
    pokemon_v2_pokemon {
      name
      ...PokemonSprites
      ...PokemonTypes
      ...PokemonGameIndex
    }
  }
`);
