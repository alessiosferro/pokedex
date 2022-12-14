import { FC } from 'react';
import { useFragment } from '@/gql/fragment-masking';
import {
  PokemonSpritesFragment,
  PokemonTypesFragment,
} from '@/fragments/pokemon-v2-pokemon';
import { useGetPokemonSprites } from '@/hooks/use-get-pokemon-sprites';
import { StyledPokemonCard } from '../../atoms/PokemonCard/PokemonCard.styled';
import { PokemonVariant } from '../../../model/pokemon-variant';
import { IPokemon } from './Pokemon.model';

export const Pokemon: FC<IPokemon> = ({ pokemon }) => {
  const spriteFragment = useFragment(PokemonSpritesFragment, pokemon);
  const typeFragment = useFragment(PokemonTypesFragment, pokemon);

  const sprites = useGetPokemonSprites(
    spriteFragment.pokemon_v2_pokemonsprites[0].sprites
  );

  const type = typeFragment.pokemon_v2_pokemontypes[0].pokemon_v2_type
    ?.name as PokemonVariant;

  return (
    <StyledPokemonCard
      $variant={type}
      name={pokemon.name}
      speciesId={pokemon.pokemon_species_id}
      imageUrl={sprites?.other?.['official-artwork']?.front_default}
    />
  );
};
