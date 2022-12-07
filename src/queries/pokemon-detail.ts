import { graphql } from '../gql';

export const pokemonDetailQuery = graphql(/* GraphQL */ `
  query getPokemonDetail($name: String) {
    pokemon_v2_pokemon(where: { name: { _eq: $name } }) {
      ...PokemonGameIndex
      ...PokemonTypes
      ...PokemonDetail
      ...PokemonFlavorText
      ...PokemonStats
      ...PokemonAbilities
      ...PokemonSprites
    }
  }
`);

export const PokemonStatsFragment = graphql(/* GraphQL */ `
  fragment PokemonStats on pokemon_v2_pokemon {
    pokemon_v2_pokemonstats {
      base_stat
      pokemon_v2_stat {
        name
      }
    }
  }
`);

export const PokemonSpritesFragment = graphql(/* GraphQL */ `
  fragment PokemonSprites on pokemon_v2_pokemon {
    pokemon_v2_pokemonsprites {
      sprites
    }
  }
`);

export const PokemonAbilitiesFragment = graphql(/* GraphQL */ `
  fragment PokemonAbilities on pokemon_v2_pokemon {
    pokemon_v2_pokemonabilities {
      pokemon_v2_ability {
        name
      }
    }
  }
`);

export const PokemonTypesFragment = graphql(/* GraphQL */ `
  fragment PokemonTypes on pokemon_v2_pokemon {
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
      }
    }
  }
`);

export const PokemonFlavorTextFragment = graphql(/* GraphQL */ `
  fragment PokemonFlavorText on pokemon_v2_pokemon {
    pokemon_v2_pokemonspecy {
      pokemon_v2_pokemonspeciesflavortexts(
        where: { pokemon_v2_language: { name: { _eq: "en" } }, pokemon_v2_version: { name: { _eq: "sword" } } }
        limit: 1
      ) {
        flavor_text
      }
    }
  }
`);

export const PokemonGameIndexFragment = graphql(/* GraphQL */ `
  fragment PokemonGameIndex on pokemon_v2_pokemon {
    pokemon_v2_pokemongameindices(where: { pokemon_v2_version: { name: { _eq: "diamond" } } }) {
      game_index
    }
  }
`);

export const PokemonNameFragment = graphql(/* GraphQL */ `
  fragment PokemonName on pokemon_v2_pokemon {
    name
  }
`);

export const PokemonDetailFragment = graphql(/* GraphQL */ `
  fragment PokemonDetail on pokemon_v2_pokemon {
    ...PokemonName
    height
    weight
  }
`);
