// TODO: remove this and fix the import issue
/* eslint-disable import/no-unresolved */
import React from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import Slider Images
import slider1 from '../../assets/images/slider1.png';
import slider2 from '../../assets/images/slider2.png';
import slider3 from '../../assets/images/slider3.png';

const Slider: React.FC = () => (
  <Swiper
    slidesPerView="auto"
    centeredSlides
    spaceBetween={30}
    loop
    autoplay={{
      delay: 2800,
    }}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination, Autoplay]}
    className="mySwiper"
  >
    <SwiperSlide>
      <Image src={slider3} />
      <div className="activa_hover" />
    </SwiperSlide>
    <SwiperSlide>
      <Image src={slider2} />
      <div className="activa_hover" />
    </SwiperSlide>
    <SwiperSlide>
      <Image src={slider1} />
      <div className="activa_hover" />
    </SwiperSlide>
  </Swiper>
);
export default Slider;
