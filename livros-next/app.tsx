import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app';
import './styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp