import Container from 'components/layout/Container';
import { Main } from 'layouts';
import Head from 'next/head';
import React from 'react';
import Content from './component/Content';

const Faq = ({ faqs }) => {
    const title = `Releasy - Frequently Asked Questions`;
    const description =
        'Releasy FAQ - Have a question? Search our FAQ for answers to anything you might ask.';
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta property="og:title" content={title} key="ogtitle" />
                <meta
                    property="og:description"
                    content={description}
                    key="ogdescription"
                />
                <meta name="description" content={description} key="description" />
                <meta
                    property="og:url"
                    content={`https://www.releasyapp.io/faq`}
                    key="ogurl"
                />
                <link rel="canonical" href={`https://www.releasyapp.io/faq`} />
            </Head>
            <Main>
                <Container>
                    <Content faqs={faqs} />
                </Container>
            </Main>
        </>
    )
}

export default Faq;