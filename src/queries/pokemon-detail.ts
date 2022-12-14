import { graphql } from '@/gql/gql';

export const pokemonDetailQuery = graphql(/* GraphQL */ `
  query getPokemonDetail($name: String) {
    pokemon_v2_pokemon(where: { name: { _eq: $name } }) {
      name
      height
      weight
      ...PokemonTypes
      ...PokemonFlavorText
      ...PokemonStats
      ...PokemonAbilities
      ...PokemonSprites
    }
  }
`);
