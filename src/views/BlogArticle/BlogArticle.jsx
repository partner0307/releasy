import Container from 'components/layout/Container';
import { Main } from 'layouts';
import Head from 'next/head';
import React from 'react';
import Content from './component/Content/Content';


const BlogArticle = ({ article }) => {
  
  const title = `${article.ogTitle || article.title}`;
  const content = `${article.ogDescription || article.title}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} key="description" />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:type" content="article" key="ogtype" />

        <meta
          property="og:description"
          content={article.ogDescription || article.summary}
          key="ogdescription"
        />
        <meta
          property="og:url"
          content={`https://www.releasyapp.io/blog/${article.slug}`}
          key="ogurl"
        />
        <link
          rel="canonical"
          href={`https://www.releasyapp.io/blog/${article.slug}`}
        />
        {article.cover && article.cover && (
          <meta
            property="og:image"
            content={article.cover.formats.large.url}
            key="ogimage"
          />
        )}
      </Head>
      <Main>
            <Container>
                <Content article={article} />
            </Container>
      </Main>
    </>
  );
};

export default BlogArticle;
