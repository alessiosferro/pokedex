import { NextPage } from 'next';

import weight from '@/assets/svg/weight.svg';
import ruler from '@/assets/svg/ruler.svg';
import arrowLeft from '@/assets/svg/arrow-left.svg';
import arrowDown from '@/assets/svg/arrow-down.svg';
import pokeball from '@/assets/svg/pokeball.svg';
import search from '@/assets/svg/search.svg';
import chevronRight from '@/assets/svg/chevron-right.svg';

import Image from 'next/image';

import { StyledChip } from '../src/components/atoms/Chip/Chip.styled';
import { pokemonTypes } from '../src/utils/pokemon-types';

const DesignSystem: NextPage = () => {
  return (
    <div>
      <h1>Pokemons</h1>
      <h2>Pokemons</h2>
      <h3>Pokemons</h3>
      <h4>Pokemons</h4>
      <h5>Pokemons</h5>
      <h6>Pokemons</h6>

      <small>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        aperiam assumenda delectus dignissimos, dolore dolores doloribus esse
        explicabo, facilis illo ipsam iste laudantium minima modi numquam
        quibusdam quis tenetur unde vel, veniam. Accusantium adipisci aliquid
        aperiam consectetur cupiditate dicta ducimus error exercitationem
        expedita facere itaque laboriosam nam non omnis optio possimus quo
        recusandae similique, sit totam velit veritatis vero! A animi at aut
        beatae consequatur cupiditate deleniti dicta dolore dolorum eligendi eos
        et eum illo, impedit nemo nostrum praesentium quaerat recusandae
        reiciendis repellendus reprehenderit sint vel? Atque culpa dolor et
        eveniet id ipsam ipsum necessitatibus non possimus repellendus! Esse,
        mollitia.
      </small>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam
        cum debitis delectus dicta dolores ducimus expedita incidunt ipsum iste
        labore laboriosam libero modi molestias omnis placeat provident quaerat
        qui quo rerum sint, suscipit veniam vero? Aperiam aut commodi dolorum
        est impedit in perferendis quasi quibusdam velit voluptates. Animi aut
        blanditiis cupiditate est et eveniet facere fugiat, impedit ipsa ipsam
        itaque iure labore laborum, maiores minus mollitia, omnis optio
        perferendis quia quibusdam quis quod reiciendis reprehenderit sequi sint
        unde voluptatem voluptatibus. Aspernatur ex nostrum numquam possimus
        quasi quidem rem suscipit. Deleniti ea incidunt maiores optio quod rerum
        soluta veritatis vitae.
      </p>

      <div>
        <h2>Icons</h2>
        <Image {...arrowDown} alt="" />
        <Image {...arrowLeft} alt="" />
        <Image {...chevronRight} alt="" />
        <Image {...pokeball} alt="" />
        <Image {...ruler} alt="" />
        <Image {...search} alt="" />
        <Image {...weight} alt="" />
      </div>

      <div>
        <h2>Chips</h2>
        {pokemonTypes.map((type) => (
          <StyledChip key={type} $variant={type} chipTitle={type} />
        ))}
      </div>
    </div>
  );
};

export default DesignSystem;
