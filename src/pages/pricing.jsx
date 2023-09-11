import React from 'react';
import { Pricing } from 'views';
import axios from 'lib/axios';

export const getStaticProps = async () => {
    let plans = null;
    const result = await axios.get('/stripe/plans');
    plans = result.data.plans;
    return { props: { plans } };
  };

const PricingPage = ({ plans }) => {
    return <Pricing plans={plans} />
}

export default PricingPage;