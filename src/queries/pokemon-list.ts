import { graphql } from '../gql';

export const pokemonListQuery = graphql(/* GraphQL */ `
  query getPokemonList {
    pokemon_v2_pokemon {
      ...PokemonName
      ...PokemonTypes
      ...PokemonGameIndex
    }
  }
`);
