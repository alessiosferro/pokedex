import { IChip } from './Chip.model';
import { FC } from 'react';

export const Chip: FC<IChip> = (props) => {
  return <div className={props.className}>{props.chipTitle}</div>;
};
