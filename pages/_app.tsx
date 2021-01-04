import type { AppProps } from 'next/app';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com',
  cache: new InMemoryCache(),
});

// import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
