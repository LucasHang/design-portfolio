import { AppProps } from 'next/app';

import 'keen-slider/keen-slider.min.css';
import '../styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
