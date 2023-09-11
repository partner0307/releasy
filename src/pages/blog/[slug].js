import BlogArticle from 'views/BlogArticle';

import StrapiClient from 'lib/Strapi';
import Head from 'next/head';
import FallbackSpinner from 'components/spinner';

export async function getStaticPaths() {
  const { data, error, meta } = await StrapiClient.from('articles')
    .select(['slug'])
    .sortBy([{ field: 'publishedAt', order: 'desc' }])
    .populate()
    .paginate(1, 1000)
    .get();

  const paths = data.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  let article = null;
  const { data, error, meta } = await StrapiClient.from('articles')
    .select()
    .equalTo('slug', params.slug)
    .populate()
    .get();
  if (data.length > 0) {
    article = data[0];
  }

  return { props: { article } };
}

const BlogArticlePage = ({ article }) => {
  if (!article) {
    return <FallbackSpinner />;
  }

  return (
    <>
      <BlogArticle article={article} />
    </>
  );
};

export default BlogArticlePage;
