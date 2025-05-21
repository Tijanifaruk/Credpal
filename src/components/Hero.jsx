import React from 'react';
import robot from '../assets/Robot.svg';

const Hero = () => (
  <section className=' text-white flex flex-col mt-32 md:flex-row lg:items-center md:justify-between lg:mt-12'>
    
    <div className='text-center lg:text-left md:px-6 py-4 md:flex md:flex-col md:justify-center md:w-1/2 lg:w-1/2 '>
      <h1 className=' font-poppins font-semibold text-4xl lg:text-5xl md:text-left'>
        One App, 
        <span className='italic font-normal'>all your <br/> </span> 
        <span className='font-bold lg:tracking-tighter'>Financial Needs</span>
      </h1>
      <p className='px-7 md:px-0 mt-6 lg:mt-8 font-poppins text-sm md:text-left lg:w-2/3'>
  Pay, save, invest,and borrow—all in one
  seamless app designed to put you in control  of your money.
</p>

    </div>

    <div className='md:w-1/2 lg:w-1/2'>
      <img src={robot} alt="robot" className='animate-gentleBounce' />

    </div>

  </section>
);

export default Hero;
