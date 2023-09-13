import React from 'react';
import StrapiClient from 'lib/Strapi';
import Terms from 'views/Terms';

export const getStaticProps = async () => {
  let terms = null;
  const { data, error, meta } = await StrapiClient.from('terms')
    .select(['content', 'publishedAt', 'version'])
    .sortBy([{ field: 'version', order: 'desc' }])
    .paginate(1, 1)
    .get();
  if (data.length > 0) {
    terms = data;
  }

  return { props: { terms } };
};

const TermsPage = ({ terms }) => {
    return <Terms terms={terms} />
}

export default TermsPage;