import {graphql} from "../gql";
import {useQuery} from "@tanstack/react-query";
import request from "graphql-request";

const query = graphql(/* GraphQL */`
    query getPokemonDetail($name: String) {
        pokemon_v2_pokemon(where: {name: {_eq: $name}}) {
            name
            height
            weight
            pokemon_v2_pokemonstats {
                base_stat
                pokemon_v2_stat {
                    name
                }
            }
            pokemon_v2_pokemonsprites {
                sprites
            }
            pokemon_v2_pokemonabilities {
                pokemon_v2_ability {
                    name
                }
            }
            pokemon_v2_pokemontypes {
                pokemon_v2_type {
                    name
                }
            }
            pokemon_v2_pokemonspecy {
                pokemon_v2_pokemonspeciesflavortexts(where: {pokemon_v2_language: {name: {_eq: "en"}}, pokemon_v2_version: {name: {_eq: "sword"}}}, limit: 1) {
                    flavor_text
                }
            }
            pokemon_v2_pokemongameindices(where: {pokemon_v2_version: {name: {_eq: "diamond"}}}) {
                pokemon_v2_version {
                    name
                }
                game_index
            }
        }
    }
`)


export const useGetPokemonDetail = (pokemonName: string) => {
	return useQuery(['pokemon-list', pokemonName], async () => {
		const { pokemon_v2_pokemon } = await request('https://beta.pokeapi.co/graphql/v1beta', query, {
          name: pokemonName
      });

		return pokemon_v2_pokemon;
	})
}