import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import { GraphQLClient } from 'graphql-request';
import { ThemeProvider } from 'styled-components';

export const PokeClient = new GraphQLClient(
  'https://beta.pokeapi.co/graphql/v1beta'
);

const queryClient = new QueryClient();

const theme = {
  colors: {
    rock: '#b69e31',
    ghost: '#70559b',
    steel: '#b7b9d0',
    water: '#6493eb',
    grass: '#74cb48',
    psychic: '#fb5584',
    ice: '#9ad6df',
    dark: '#75574c',
    fairy: '#e69eac',
    normal: '#aaa67f',
    fighting: '#c12239',
    flying: '#a891ec',
    poison: '#a43e9e',
    ground: '#dec16b',
    bug: '#a7b723',
    fire: '#f67d31',
    electric: '#f9cf30',
    dragon: '#7037ff',
    darkGray: '#212121',
    mediumGray: '#666',
    lightGray: '#fff',
    background: '#f7f7f7',
  },
  typography: {
    verySmall: {
      lineHeight: 12,
      fontSize: 8,
    },
    small: {
      lineHeight: 16,
      fontSize: 10,
    },
    smaller: {
      lineHeight: 16,
      fontSize: 12,
    },
    regular: {
      lineHeight: 16,
      fontSize: 14,
    },
    big: {
      fontSize: 24,
      lineHeight: 32,
    },
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
