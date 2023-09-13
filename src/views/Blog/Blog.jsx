import Container from 'components/layout/Container';
import { Main } from 'layouts';
import Head from 'next/head';

import React from 'react';
import Content from './component/Content';

const Blog = () => {
    const title = `Releasy blog: latest articles about Project delivery, Agile and User Acceptance Testing`;
    const description =
        'How-tos, tips, tactics, templates, and testing best practices.';
    
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} key="description" />
                <meta property="og:title" content={title} key="ogtitle" />
                <meta
                    property="og:description"
                    content={description}
                    key="ogdescription"
                />
                <meta
                    property="og:url"
                    content={`https://www.releasyapp.io/blog`}
                    key="ogurl"
                />
            </Head>
            <Main>
                <Container>
                    <Content />
                </Container>
            </Main>
        </>
    )
}

export default Blog;