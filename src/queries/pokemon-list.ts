import { graphql } from '@/gql/index';

export const pokemonListQuery = graphql(/* GraphQL */ `
  query getPokemonList($limit: Int, $offset: Int) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset) {
      name
      ...PokemonSprites
      ...PokemonTypes
      ...PokemonGameIndex
      ...PokemonFlavorText
    }
  }
`);
