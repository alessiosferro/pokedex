import { useGetPokemonList } from '@/hooks/use-get-pokemon-list';
import { useFragment } from '@/gql/fragment-masking';
import { PokemonSpritesFragment } from '@/fragments/pokemon-v2-pokemon';
import { FC } from 'react';
import { useGetPokemonSprites } from '@/hooks/use-get-pokemon-sprites';

export default function Home() {
  const { data: pokemons } = useGetPokemonList();

  if (!pokemons) {
    return <p>loading...</p>;
  }

  return (
    <>
      <ul>
        {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.name} name={pokemon.name} pokemon={pokemon} />
        ))}
      </ul>
    </>
  );
}

const Pokemon: FC<{ name: string; pokemon: any }> = ({ name, pokemon }) => {
  const spriteFragment = useFragment(PokemonSpritesFragment, pokemon);
  const sprites = useGetPokemonSprites(
    spriteFragment.pokemon_v2_pokemonsprites[0].sprites
  );

  return (
    <li>
      <img src={sprites.other['official-artwork'].front_default} alt="" />

      {name}
    </li>
  );
};
