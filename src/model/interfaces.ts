export interface DatatableParams {
  limit: number;
  order_by: string;
  direction: 'asc' | 'desc';
}

export interface PokemonListDatatableParams extends DatatableParams {
  order_by: 'pokemon_species_id' | 'name';
}
