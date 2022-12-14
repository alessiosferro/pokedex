import styled, { css } from 'styled-components';
import { PokemonCard } from './PokemonCard';
import { IStyledPokemonCard } from './PokemonCard.model';

export const StyledPokemonCard = styled(PokemonCard)<IStyledPokemonCard>`
  width: 10.4rem;
  height: 11.2rem;
  border-radius: 0.8rem;
  border: 0.1rem solid;
  overflow: hidden;

  ${(props) => css`
    border-color: ${props.theme.colors[props.$variant]};
  `}

  .pokemon-number {
    display: block;
    padding: 0.4rem 0.8rem 0;
    text-align: right;

    &::before {
      content: '#';
    }

    ${(props) => css`
      color: ${props.theme.colors[props.$variant]};
      ${props.theme.typography.verySmall};
    `}
  }

  .pokemon-image {
    margin: 0 auto;
    display: block;
  }

  .pokemon-name {
    padding: 0.4rem 0.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: capitalize;
    text-align: center;

    ${(props) => css`
      color: ${props.theme.colors.lightGray};
      background-color: ${props.theme.colors[props.$variant]};
      ${props.theme.typography.small};
    `}
  }
`;
