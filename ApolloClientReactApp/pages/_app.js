import { useApollo } from '../graphql/apolloClient';
import { ApolloProvider } from '@apollo/client';
import Logo from '../components/logo';

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState, pageProps);

  return (
    <ApolloProvider client={apolloClient}>
        <Logo />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}