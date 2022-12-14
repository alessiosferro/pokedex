import { PokemonSpritesFragment, PokemonTypesFragment } from '@/gql/graphql';
import { ComponentProps } from 'react';

export interface IPokemonGrid extends ComponentProps<'ul'> {
  pokemons: ({
    __typename?: 'pokemon_v2_pokemon' | undefined;
    name: string;
    pokemon_species_id?: number | null | undefined;
  } & {
    ' $fragmentRefs'?:
      | {
          PokemonSpritesFragment: PokemonSpritesFragment;
          PokemonTypesFragment: PokemonTypesFragment;
        }
      | undefined;
  })[];
}
