import React from 'react';
import Privacy from 'views/Privacy';
import StrapiClient from 'lib/Strapi';
import FallbackSpinner from 'components/spinner';
export const getStaticProps = async () => {
    let privacy = null;
    const { data, error, meta } = await StrapiClient.from('privacy-policies')
        .select(['content', 'publishedAt', 'version'])
        .sortBy([{ field: 'version', order: 'desc' }])
        .paginate(1, 1)
        .get();
    if (data.length > 0) {
        privacy = data;
    }

    return { props: { privacy } };
};

const PrivacyPage = ({ privacy }) => {
  if (!privacy) {
    return <FallbackSpinner />;
  }
  return <Privacy privacy={privacy} />;
};

export default PrivacyPage;
