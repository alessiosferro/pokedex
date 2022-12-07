import { useQuery } from '@tanstack/react-query';

export const useGetPokemonList = () => {
  return useQuery(['pokemon-list'], async () => {});
};
