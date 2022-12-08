import { PokemonVariant } from '../../../model/pokemon-variant';
import { ComponentProps } from 'react';

export interface IChip extends ComponentProps<'div'> {
  chipTitle: string;
}

export interface IStyledChip {
  $variant: PokemonVariant;
}
