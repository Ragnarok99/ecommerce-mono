import React from 'react';
import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

import BaseLayout from 'src/layouts/BaseLayout';
import Swiper from 'src/components/Swiper';

import banner1 from 'src/assets/webp/banner-1.webp';
import banner2 from 'src/assets/webp/banner-2.webp';
import banner3 from 'src/assets/webp/banner-3.webp';
import banner4 from 'src/assets/webp/banner-4.webp';
import banner5 from 'src/assets/webp/banner-5.webp';
import banner6 from 'src/assets/webp/banner-6.webp';

const Home: NextPage = () => (
  <BaseLayout>
    <div className="mx-auto mb-12 grid max-w-[1920px] grid-cols-2 gap-2 px-2.5 sm:grid-cols-9 md:mb-14 md:gap-2.5 xl:mb-16">
      <div className="col-span-full mx-auto sm:col-span-5">
        <a
          className="group relative flex h-full justify-center overflow-hidden"
          href="/"
        >
          <Image objectFit="cover" height={400} src={banner1} />
        </a>
      </div>
      <div className="col-span-1 mx-auto sm:col-span-2">
        <a
          className="group relative flex h-full justify-center overflow-hidden"
          href="/"
        >
          <Image objectFit="cover" height={400} src={banner2} />
        </a>
      </div>
      <div className="col-span-1 mx-auto sm:col-span-2">
        <a
          className="group relative flex h-full justify-center overflow-hidden"
          href="/"
        >
          <Image objectFit="cover" height={400} src={banner3} />
        </a>
      </div>
      <div className="col-span-1 mx-auto sm:col-span-2">
        <a
          className="group relative flex h-full justify-center overflow-hidden"
          href="/"
        >
          <Image objectFit="cover" height={400} src={banner4} />
        </a>
      </div>
      <div className="col-span-1 mx-auto sm:col-span-2">
        <a
          className="group relative flex h-full justify-center overflow-hidden"
          href="/"
        >
          <Image objectFit="cover" height={400} src={banner5} />
        </a>
      </div>
      <div className="col-span-full mx-auto sm:col-span-5">
        <a
          className="group relative flex h-full justify-center overflow-hidden"
          href="/"
        >
          <Image objectFit="cover" height={400} src={banner6} />
        </a>
      </div>
    </div>
    <div className="mx-auto mb-12 grid max-w-[1920px] grid-cols-2 gap-2 px-2.5 sm:grid-cols-9 md:mb-14 md:gap-2.5 xl:mb-16">
      <Swiper />
    </div>
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
