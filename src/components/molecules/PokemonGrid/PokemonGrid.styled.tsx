import styled from 'styled-components';
import { PokemonGrid } from './PokemonGrid';

export const StyledPokemonGrid = styled(PokemonGrid)`
  margin: 0 auto;
  max-width: fit-content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 11.2rem);
  grid-gap: 0.8rem;
  align-items: flex-start;
  padding: 2.4rem 1.6rem 0;
  min-height: 100vh;
`;
