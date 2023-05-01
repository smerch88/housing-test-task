import { NextPage } from 'next';
import Head from 'next/head';
import { withLayout } from '@/layout/Layout';

import { Hero } from '@/page-components/Hero/Hero';
import { Recomendations } from '@/page-components/Recomendations/Recomendations';
import { Ready } from '@/page-components/Ready/Ready';

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
    </>
  );
};

export default withLayout(Home);
