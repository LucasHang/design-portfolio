import { AppProps } from 'next/app';
import { ContentFilterProvider } from '../contexts/contentFilter';

import '../styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ContentFilterProvider>
            <Component {...pageProps} />
        </ContentFilterProvider>
    );
}
