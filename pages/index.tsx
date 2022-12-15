import { useGetPokemonList } from '@/hooks/use-get-pokemon-list';
import { StyledPokemonGrid } from '../src/components/molecules/PokemonGrid/PokemonGrid.styled';
import { useScrollPosition } from '@/hooks/use-scroll-position';
import { useEffect } from 'react';

export default function Home() {
  const { data: pokemons } = useGetPokemonList({
    limit: 9,
  });

  const scrollPosition = useScrollPosition();

  useEffect(() => {}, [scrollPosition]);

  if (!pokemons) {
    return <p>loading...</p>;
  }

  return <StyledPokemonGrid pokemons={pokemons} />;
}
