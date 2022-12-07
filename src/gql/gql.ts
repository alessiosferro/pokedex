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
    "\n  fragment PokemonStats on pokemon_v2_pokemon {\n    pokemon_v2_pokemonstats {\n      base_stat\n      pokemon_v2_stat {\n        name\n      }\n    }\n  }\n": types.PokemonStatsFragmentDoc,
    "\n  fragment PokemonSprites on pokemon_v2_pokemon {\n    pokemon_v2_pokemonsprites {\n      sprites\n    }\n  }\n": types.PokemonSpritesFragmentDoc,
    "\n  fragment PokemonAbilities on pokemon_v2_pokemon {\n    pokemon_v2_pokemonabilities {\n      pokemon_v2_ability {\n        name\n      }\n    }\n  }\n": types.PokemonAbilitiesFragmentDoc,
    "\n  fragment PokemonTypes on pokemon_v2_pokemon {\n    pokemon_v2_pokemontypes {\n      pokemon_v2_type {\n        name\n      }\n    }\n  }\n": types.PokemonTypesFragmentDoc,
    "\n  fragment PokemonFlavorText on pokemon_v2_pokemon {\n    pokemon_v2_pokemonspecy {\n      pokemon_v2_pokemonspeciesflavortexts(\n        where: {\n          pokemon_v2_language: { name: { _eq: \"en\" } }\n          pokemon_v2_version: { name: { _eq: \"sword\" } }\n        }\n        limit: 1\n      ) {\n        flavor_text\n      }\n    }\n  }\n": types.PokemonFlavorTextFragmentDoc,
    "\n  fragment PokemonGameIndex on pokemon_v2_pokemon {\n    pokemon_v2_pokemongameindices(\n      where: { pokemon_v2_version: { name: { _eq: \"diamond\" } } }\n    ) {\n      game_index\n    }\n  }\n": types.PokemonGameIndexFragmentDoc,
    "\n  query getPokemonDetail($name: String) {\n    pokemon_v2_pokemon(where: { name: { _eq: $name } }) {\n      ...PokemonGameIndex\n      ...PokemonTypes\n      name\n      height\n      weight\n      ...PokemonFlavorText\n      ...PokemonStats\n      ...PokemonAbilities\n      ...PokemonSprites\n    }\n  }\n": types.GetPokemonDetailDocument,
    "\n  query getPokemonList {\n    pokemon_v2_pokemon {\n      name\n      ...PokemonSprites\n      ...PokemonTypes\n      ...PokemonGameIndex\n    }\n  }\n": types.GetPokemonListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PokemonStats on pokemon_v2_pokemon {\n    pokemon_v2_pokemonstats {\n      base_stat\n      pokemon_v2_stat {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment PokemonStats on pokemon_v2_pokemon {\n    pokemon_v2_pokemonstats {\n      base_stat\n      pokemon_v2_stat {\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PokemonSprites on pokemon_v2_pokemon {\n    pokemon_v2_pokemonsprites {\n      sprites\n    }\n  }\n"): (typeof documents)["\n  fragment PokemonSprites on pokemon_v2_pokemon {\n    pokemon_v2_pokemonsprites {\n      sprites\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PokemonAbilities on pokemon_v2_pokemon {\n    pokemon_v2_pokemonabilities {\n      pokemon_v2_ability {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment PokemonAbilities on pokemon_v2_pokemon {\n    pokemon_v2_pokemonabilities {\n      pokemon_v2_ability {\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PokemonTypes on pokemon_v2_pokemon {\n    pokemon_v2_pokemontypes {\n      pokemon_v2_type {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment PokemonTypes on pokemon_v2_pokemon {\n    pokemon_v2_pokemontypes {\n      pokemon_v2_type {\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PokemonFlavorText on pokemon_v2_pokemon {\n    pokemon_v2_pokemonspecy {\n      pokemon_v2_pokemonspeciesflavortexts(\n        where: {\n          pokemon_v2_language: { name: { _eq: \"en\" } }\n          pokemon_v2_version: { name: { _eq: \"sword\" } }\n        }\n        limit: 1\n      ) {\n        flavor_text\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment PokemonFlavorText on pokemon_v2_pokemon {\n    pokemon_v2_pokemonspecy {\n      pokemon_v2_pokemonspeciesflavortexts(\n        where: {\n          pokemon_v2_language: { name: { _eq: \"en\" } }\n          pokemon_v2_version: { name: { _eq: \"sword\" } }\n        }\n        limit: 1\n      ) {\n        flavor_text\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PokemonGameIndex on pokemon_v2_pokemon {\n    pokemon_v2_pokemongameindices(\n      where: { pokemon_v2_version: { name: { _eq: \"diamond\" } } }\n    ) {\n      game_index\n    }\n  }\n"): (typeof documents)["\n  fragment PokemonGameIndex on pokemon_v2_pokemon {\n    pokemon_v2_pokemongameindices(\n      where: { pokemon_v2_version: { name: { _eq: \"diamond\" } } }\n    ) {\n      game_index\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPokemonDetail($name: String) {\n    pokemon_v2_pokemon(where: { name: { _eq: $name } }) {\n      ...PokemonGameIndex\n      ...PokemonTypes\n      name\n      height\n      weight\n      ...PokemonFlavorText\n      ...PokemonStats\n      ...PokemonAbilities\n      ...PokemonSprites\n    }\n  }\n"): (typeof documents)["\n  query getPokemonDetail($name: String) {\n    pokemon_v2_pokemon(where: { name: { _eq: $name } }) {\n      ...PokemonGameIndex\n      ...PokemonTypes\n      name\n      height\n      weight\n      ...PokemonFlavorText\n      ...PokemonStats\n      ...PokemonAbilities\n      ...PokemonSprites\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPokemonList {\n    pokemon_v2_pokemon {\n      name\n      ...PokemonSprites\n      ...PokemonTypes\n      ...PokemonGameIndex\n    }\n  }\n"): (typeof documents)["\n  query getPokemonList {\n    pokemon_v2_pokemon {\n      name\n      ...PokemonSprites\n      ...PokemonTypes\n      ...PokemonGameIndex\n    }\n  }\n"];

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