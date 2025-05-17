import React from 'react';
import Button from './Button';
import scan1 from '../assets/Scan1.svg';
import scan2 from '../assets/Scan2.svg';
import scan3 from '../assets/Scan3.svg';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // only core styles now
import { Autoplay } from 'swiper/modules';

const Payment = () => (
  <section className="p-2 flex flex-col  items-center justify-between">
    <div className="">
      <h3 className="text-[#ADF6F6] mt-10 mb-5 text-4xl font-semibold">
        Fast, Secure & Flexible Payments
      </h3>
      <p className="text-white font-light mb-5">
        Pay for purchases, subscriptions, and more with ease. Now with Bitcoin support and Buy Now, Pay Later (BNPL) options, CredPal makes transactions faster, safer, and more flexible than ever, allowing you to shop now and spread payments over time with ease.
      </p>

      <div className="mb-6">
        <Button />
      </div>
    </div>

    <div className="w-full max-w-sm">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={scan1} alt="scan and pay 1" className="w-full h-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={scan2} alt="scan and pay 2" className="w-full h-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={scan3} alt="scan and pay 3" className="w-full h-auto" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
);

export default Payment;
