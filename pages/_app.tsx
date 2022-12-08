import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import { GraphQLClient } from 'graphql-request';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/utils/global-style';
import { theme } from '../src/utils/theme';

export const PokeClient = new GraphQLClient(
  'https://beta.pokeapi.co/graphql/v1beta'
);

const queryClient = new QueryClient();

const globalStyle = createGlobalStyle`
  
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
