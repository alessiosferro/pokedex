import { useGetPokemonList } from '@/hooks/use-get-pokemon-list';
import { useFragment } from '@/gql/fragment-masking';
import {
  PokemonFlavorTextFragment,
  PokemonSpritesFragment,
} from '@/fragments/pokemon-v2-pokemon';
import { FC } from 'react';
import { useGetPokemonSprites } from '@/hooks/use-get-pokemon-sprites';
import Image from 'next/image';

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
  const flavorFragment = useFragment(PokemonFlavorTextFragment, pokemon);

  const sprites = useGetPokemonSprites(
    spriteFragment.pokemon_v2_pokemonsprites[0].sprites
  );

  return (
    <li
      style={{
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
      }}
    >
      <h3 style={{ textAlign: 'center' }}>{name}</h3>
      <p style={{ textAlign: 'center' }}>
        {
          flavorFragment.pokemon_v2_pokemonspecy
            ?.pokemon_v2_pokemonspeciesflavortexts[0]?.flavor_text
        }
      </p>
      {sprites.other['official-artwork'].front_default && (
        <Image
          style={{ margin: '0 auto' }}
          width={500}
          height={500}
          src={sprites.other['official-artwork'].front_default}
          alt=""
        />
      )}
    </li>
  );
};
