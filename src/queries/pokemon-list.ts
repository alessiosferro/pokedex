import { graphql } from '@/gql/index';

export const pokemonListQuery = graphql(/* GraphQL */ `
  query getPokemonList($limit: Int, $order_by: [pokemon_v2_pokemon_order_by!]) {
    pokemon_v2_pokemon(limit: $limit, order_by: $order_by) {
      name
      pokemon_species_id
      ...PokemonSprites
      ...PokemonTypes
    }
  }
`);
