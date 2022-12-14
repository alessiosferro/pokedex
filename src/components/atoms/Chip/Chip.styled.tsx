import styled, { css } from 'styled-components';
import { IStyledChip } from './Chip.model';
import { Chip } from './Chip';

export const StyledChip = styled(Chip)<IStyledChip>`
  padding: 0.2rem 0.8rem;
  border-radius: 1rem;
  display: inline-block;
  font-weight: 700;

  ${(props) => css`
    color: ${props.theme.colors.lightGray};
    background-color: ${props.theme.colors[props.$variant]};

    ${props.theme.typography.small}
  `}
`;
