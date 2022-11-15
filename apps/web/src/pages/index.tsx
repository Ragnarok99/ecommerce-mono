import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { BaseLayout } from 'src/layouts';
import HeaderGrids from 'src/components/Home/HeaderGrids';
import FlashSale from 'src/components/Home/FlashSale';
import OffersCarousel from 'src/components/Home/OffersCarousel';

const Home: NextPage = () => (
  <BaseLayout>
    <HeaderGrids />
    <FlashSale />
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
