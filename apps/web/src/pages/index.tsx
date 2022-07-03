import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import BaseLayout from '../layouts/BaseLayout';
import HeaderGrids from '../components/Home/HeaderGrids';
import OffersCarousel from '../components/Home/OffersCarousel';

const Home: NextPage = () => (
  <BaseLayout>
    <HeaderGrids />
    <OffersCarousel />
  </BaseLayout>
);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Home;
