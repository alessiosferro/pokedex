import styled from 'styled-components';
import { PokemonGrid } from './PokemonGrid';

export const StyledPokemonGrid = styled(PokemonGrid)`
  margin: 2rem auto 0;
  max-width: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.8rem;
`;
