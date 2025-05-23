import React from 'react';
import Button from './Button';
// Importing images for payment scans
import scan1 from '../assets/Scan1.svg';
import scan2 from '../assets/Scan2.svg';
import scan3 from '../assets/Scan3.svg';

// Import Swiper React components and styles for carousel functionality
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import { Autoplay } from 'swiper/modules';

const Payment = () => (
  <section className="z-0 flex flex-col md:flex-row items-center justify-between md:px-8  mt-14">
    {/* Left side text content */}
    <div className="md:w-1/2 px-4 md:px-0 ">
      <h3 className="text-[#ADF6F6] mt-0 mb-5   md:mb-8 text-4xl font-semibold ">
        Fast, Secure & Flexible Payments
      </h3>
      <p className="text-white  mb-5 leading-6">
        Pay for purchases, subscriptions, and more with ease. Now with Bitcoin support and Buy Now, Pay Later (BNPL) options, CredPal makes transactions faster, safer, and more flexible than ever, allowing you to shop now and spread payments over time with ease.
      </p>

      {/* Button component for user action */}
      <div className="mb-6">
        <Button />
      </div>
    </div>

    {/* Right side image slider using Swiper */}
    <div className="w-full max-w-sm">
      <Swiper
        spaceBetween={30} // space between slides
        centeredSlides={true} // center active slide
        autoplay={{ // auto slide configuration
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]} // enable autoplay module
        className="mySwiper"
      >
        {/* image on slides*/}
        <SwiperSlide>
          <img src={scan1} alt="scan and pay 1" className="w-full h-[460px] " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={scan2} alt="scan and pay 2" className="w-full h-[460px] " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={scan3} alt="scan and pay 3" className="w-full h-[460px] " />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
);

export default Payment;
