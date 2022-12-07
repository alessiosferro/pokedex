export interface DreamWorld {
  front_default: string;
  front_female?: any;
}

export interface Home {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface OfficialArtwork {
  front_default: string;
}

export interface Other {
  dream_world: DreamWorld;
  home: Home;
  'official-artwork': OfficialArtwork;
}

export interface RedBlue {
  front_default: string;
  front_gray: string;
  back_default: string;
  back_gray: string;
  front_transparent: string;
  back_transparent: string;
}

export interface Yellow {
  front_default: string;
  front_gray: string;
  back_default: string;
  back_gray: string;
  front_transparent: string;
  back_transparent: string;
}

export interface GenerationI {
  'red-blue': RedBlue;
  yellow: Yellow;
}

export interface Crystal {
  front_default: string;
  front_shiny: string;
  back_default: string;
  back_shiny: string;
  front_transparent: string;
  front_shiny_transparent: string;
  back_transparent: string;
  back_shiny_transparent: string;
}

export interface Gold {
  front_default: string;
  front_shiny: string;
  back_default: string;
  back_shiny: string;
  front_transparent: string;
}

export interface Silver {
  front_default: string;
  front_shiny: string;
  back_default: string;
  back_shiny: string;
  front_transparent: string;
}

export interface GenerationIi {
  crystal: Crystal;
  gold: Gold;
  silver: Silver;
}

export interface Emerald {
  front_default: string;
  front_shiny: string;
}

export interface FireredLeafgreen {
  front_default: string;
  front_shiny: string;
  back_default: string;
  back_shiny: string;
}

export interface RubySapphire {
  front_default: string;
  front_shiny: string;
  back_default: string;
  back_shiny: string;
}

export interface GenerationIii {
  emerald: Emerald;
  'firered-leafgreen': FireredLeafgreen;
  'ruby-sapphire': RubySapphire;
}

export interface DiamondPearl {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
}

export interface HeartgoldSoulsilver {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
}

export interface Platinum {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
}

export interface GenerationIv {
  'diamond-pearl': DiamondPearl;
  'heartgold-soulsilver': HeartgoldSoulsilver;
  platinum: Platinum;
}

export interface Animated {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
}

export interface BlackWhite {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  animated: Animated;
}

export interface GenerationV {
  'black-white': BlackWhite;
}

export interface OmegarubyAlphasapphire {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface XY {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface GenerationVi {
  'omegaruby-alphasapphire': OmegarubyAlphasapphire;
  'x-y': XY;
}

export interface UltraSunUltraMoon {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface Icons {
  front_default: string;
  front_female?: any;
}

export interface GenerationVii {
  'ultra-sun-ultra-moon': UltraSunUltraMoon;
  icons: Icons;
}

export interface Icons2 {
  front_default: string;
  front_female?: any;
}

export interface GenerationViii {
  icons: Icons2;
}

export interface Versions {
  'generation-i': GenerationI;
  'generation-ii': GenerationIi;
  'generation-iii': GenerationIii;
  'generation-iv': GenerationIv;
  'generation-v': GenerationV;
  'generation-vi': GenerationVi;
  'generation-vii': GenerationVii;
  'generation-viii': GenerationViii;
}

export interface PokemonSprites {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  other: Other;
  versions: Versions;
}
