import { FC } from 'react';
import { Pokemon } from '../Pokemon/Pokemon';
import { IPokemonGrid } from './PokemonGrid.model';

export const PokemonGrid: FC<IPokemonGrid> = ({ pokemons, className }) => {
  return (
    <ul className={className}>
      {pokemons.map((pokemon) => (
        <Pokemon
          key={pokemon.name}
          name={pokemon.name}
          speciesId={pokemon.pokemon_species_id}
          pokemon={pokemon}
        />
      ))}
    </ul>
  );
};
