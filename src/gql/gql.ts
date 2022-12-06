/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n    query getPokemonDetail($name: String) {\n        pokemon_v2_pokemon(where: {name: {_eq: $name}}) {\n            name\n            height\n            weight\n            pokemon_v2_pokemonstats {\n                base_stat\n                pokemon_v2_stat {\n                    name\n                }\n            }\n            pokemon_v2_pokemonsprites {\n                sprites\n            }\n            pokemon_v2_pokemonabilities {\n                pokemon_v2_ability {\n                    name\n                }\n            }\n            pokemon_v2_pokemontypes {\n                pokemon_v2_type {\n                    name\n                }\n            }\n            pokemon_v2_pokemonspecy {\n                pokemon_v2_pokemonspeciesflavortexts(where: {pokemon_v2_language: {name: {_eq: \"en\"}}, pokemon_v2_version: {name: {_eq: \"sword\"}}}, limit: 1) {\n                    flavor_text\n                }\n            }\n            pokemon_v2_pokemongameindices(where: {pokemon_v2_version: {name: {_eq: \"diamond\"}}}) {\n                pokemon_v2_version {\n                    name\n                }\n                game_index\n            }\n        }\n    }\n": types.GetPokemonDetailDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getPokemonDetail($name: String) {\n        pokemon_v2_pokemon(where: {name: {_eq: $name}}) {\n            name\n            height\n            weight\n            pokemon_v2_pokemonstats {\n                base_stat\n                pokemon_v2_stat {\n                    name\n                }\n            }\n            pokemon_v2_pokemonsprites {\n                sprites\n            }\n            pokemon_v2_pokemonabilities {\n                pokemon_v2_ability {\n                    name\n                }\n            }\n            pokemon_v2_pokemontypes {\n                pokemon_v2_type {\n                    name\n                }\n            }\n            pokemon_v2_pokemonspecy {\n                pokemon_v2_pokemonspeciesflavortexts(where: {pokemon_v2_language: {name: {_eq: \"en\"}}, pokemon_v2_version: {name: {_eq: \"sword\"}}}, limit: 1) {\n                    flavor_text\n                }\n            }\n            pokemon_v2_pokemongameindices(where: {pokemon_v2_version: {name: {_eq: \"diamond\"}}}) {\n                pokemon_v2_version {\n                    name\n                }\n                game_index\n            }\n        }\n    }\n"): (typeof documents)["\n    query getPokemonDetail($name: String) {\n        pokemon_v2_pokemon(where: {name: {_eq: $name}}) {\n            name\n            height\n            weight\n            pokemon_v2_pokemonstats {\n                base_stat\n                pokemon_v2_stat {\n                    name\n                }\n            }\n            pokemon_v2_pokemonsprites {\n                sprites\n            }\n            pokemon_v2_pokemonabilities {\n                pokemon_v2_ability {\n                    name\n                }\n            }\n            pokemon_v2_pokemontypes {\n                pokemon_v2_type {\n                    name\n                }\n            }\n            pokemon_v2_pokemonspecy {\n                pokemon_v2_pokemonspeciesflavortexts(where: {pokemon_v2_language: {name: {_eq: \"en\"}}, pokemon_v2_version: {name: {_eq: \"sword\"}}}, limit: 1) {\n                    flavor_text\n                }\n            }\n            pokemon_v2_pokemongameindices(where: {pokemon_v2_version: {name: {_eq: \"diamond\"}}}) {\n                pokemon_v2_version {\n                    name\n                }\n                game_index\n            }\n        }\n    }\n"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;