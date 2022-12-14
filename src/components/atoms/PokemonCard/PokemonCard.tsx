import { FC } from 'react';
import { IPokemonCard } from './PokemonCard.model';
import Image from 'next/image';

export const PokemonCard: FC<IPokemonCard> = (props) => {
  const { imageUrl, name, className, speciesId } = props;

  return (
    <div className={className}>
      {speciesId && <small className="pokemon-number">{speciesId}</small>}
      {imageUrl && (
        <Image
          width={72}
          height={72}
          className="pokemon-image"
          src={imageUrl}
          alt={`${name} official artwork`}
        />
      )}
      {name && <div className="pokemon-name">{name}</div>}
    </div>
  );
};
