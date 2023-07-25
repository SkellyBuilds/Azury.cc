import '../public/css/nprogress.css';
import '../public/css/global.css';
import '../public/js/main';
import type { AppProps } from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';
import ReactDOM from 'react-dom';
import toast, { Toaster } from 'react-hot-toast';

import Header from '../components/Static/Header';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head children={
                <>
                    <title>Azury Industries</title>
                    <link rel="icon" href="/img/favicon.png" type="image/x-icon" />
                    <link href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css" rel="stylesheet" />
                    <link rel="shortcut icon" href="/img/favicon.png" type="image/x-icon"> 
                    <meta charset="UTF-8">
                    <meta name="theme-color" content="#60a5fa"> 
                    <link rel="icon" href="/img/favicon.png" type="image/x-icon">
                    <meta name="twitter:image" content="/img/favicon.png">
                    <link rel="canonical" href="https://azury.cc/">
                    <meta name="publisher" content="2023 Azury Industries" />
                    <meta name="author" content="Azury Industries", "https://azury.cc/">
                </>
            } />
            <main className="min-h-[100vh] max-w-screen-lg p-5 w-full md:py-10 md:w-10/12 lg:py-10 lg:w-10/12 mx-auto transition-all duration-300">
                <Header />
                <Component {...pageProps} />
                <Toaster />
            </main>
        </>
    );
};
