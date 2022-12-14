import { ComponentProps } from 'react';
import { PokemonVariant } from '../../../model/pokemon-variant';

export interface IPokemonCard extends ComponentProps<'div'> {
  speciesId: number;
  imageUrl: string;
  name: string;
}

export interface IStyledPokemonCard {
  $variant: PokemonVariant;
}
