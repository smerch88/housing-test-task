import { NextPage } from 'next';
import Head from 'next/head';
import { withLayout } from '@/layout/Layout';

import { Hero } from '@/page-components/Hero/Hero';
import { Recomendations } from '@/page-components/Recomendations/Recomendations';
import { Ready } from '@/page-components/Ready/Ready';
import { Review } from '@/page-components/Review/Review';
import { Tips } from '@/page-components/Tips/Tips';
import { Subscribe } from '@/page-components/Subscribe/Subscribe';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Housing</title>
      </Head>
      <Hero />
      <Recomendations />
      <Ready />
      <Review />
      <Tips />
      <Subscribe />
    </>
  );
};

export default withLayout(Home);
