import { useGetPokemonList } from '@/hooks/use-get-pokemon-list';
import { StyledPokemonGrid } from '../src/components/molecules/PokemonGrid/PokemonGrid.styled';

export default function Home() {
  const { data: pokemons } = useGetPokemonList();

  if (!pokemons) {
    return <p>loading...</p>;
  }

  return <StyledPokemonGrid pokemons={pokemons} />;
}
