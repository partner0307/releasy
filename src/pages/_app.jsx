import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Page from '../components/layout/Page';
import Script from 'next/script';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import "styles/global.css";

export default function App({ Component, pageProps }) {
  const GA = process.env.NEXT_PUBLIC_GA_CODE;
  return (
    <React.Fragment>
      <Head>
        <title>
          Releasy, the hassle-free test management platform for agile teams
        </title>
        <meta
          name="description"
          content="Releasy allows your clients, even those without a technical background to test, validate and accept project releases with ease"
          key="description"
        />
        <meta
          property="og:url"
          content="https://www.releasyapp.io/"
          key="ogurl"
        />
        <meta property="og:type" content="website" key="ogtype" />
        <meta
          property="og:title"
          content="The hassle-free test management platform for agile teams"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Releasy allows your clients to test, validate and accept project releases with ease"
          key="ogdescription"
        />
        <meta
          property="og:image"
          content="https://releasyapp-crm.s3.amazonaws.com/public/landing/releasy-share.png"
          key="ogimage"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
          key="twittercard"
        />
        <meta
          property="twitter:domain"
          content="releasyapp.io"
          key="twitterdomain"
        />
        <meta name="twitter:site" content="@releasyappio" key="twittersite" />
        <meta
          name="twitter:creator"
          content="@releasyappio"
          key="twittercreator"
        />
        <meta
          property="twitter:url"
          content="https://www.releasyapp.io/"
          key="twitterurl"
        />
        <meta
          name="twitter:title"
          content="The hassle-free test management platform for agile teams"
          key="twittertitle"
        />
        <meta
          name="twitter:description"
          content="Releasy allows your clients to test, validate and accept project releases with ease"
          key="twitterdescription"
        />
        <meta
          name="twitter:image"
          content="https://releasyapp-crm.s3.amazonaws.com/public/landing/releasy-share.png"
          key="twitterimage"
        />
        <meta charSet="utf-8" />
      </Head>
      <Page>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA}', {
          page_path: window.location.pathname,
          });
          `,
          }}
        />
        <Script
          id="reddit-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);rdt('init','t2_56duef5v', {"optOut":false,"useDecimalCurrencyValues":true});rdt('track', 'PageVisit');
            `,
          }}
        />
        <Component {...pageProps} />
      </Page>
    </React.Fragment>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
