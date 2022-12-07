import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import { GraphQLClient } from 'graphql-request';

export const PokeClient = new GraphQLClient('https://beta.pokeapi.co/graphql/v1beta');

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
