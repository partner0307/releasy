import React from 'react';
import Faq from 'views/Faq';

import _ from 'lodash';

import StrapiClient from 'lib/Strapi';
export const getStaticProps = async () => {
  let faqs = null;
  const { data, error, meta } = await StrapiClient.from('faqs')
    .select(['category', 'question', 'answer'])
    .get();
  if (error) {
  } else {
    const groups = _.groupBy(data, (faq) => faq.category);
    faqs = groups;
  }

  return { props: { faqs } };
};

const FAQPage = ({ faqs }) => {
    return <Faq faqs={faqs} />
}

export default FAQPage;