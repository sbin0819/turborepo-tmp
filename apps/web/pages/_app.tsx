import React from 'react';
import type { AppProps } from 'next/app';

import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import GlobalStyle from '@/style/global';

export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = React.useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <GlobalStyle />
                <Component {...pageProps} />
            </Hydrate>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}
