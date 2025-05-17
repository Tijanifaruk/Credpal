import React from 'react';
import robot from '../assets/Robot.svg';

const Hero = () => (
  <section className=' text-white flex flex-col mt-32 lg:flex-row lg:items-center lg:mt-12'>
    
    <div className='text-center lg:text-left '>
      <h1 className='font-poppins text-[45px] md:text-[75px]  lg:text-[89px] font-medium '>
        One App, 
        <span className='italic text-[38px] font-normal'>all your <br/> </span> 
        <span className='font-bold lg:text-[80px] lg:tracking-tighter'>Financial Needs</span>
      </h1>
      <p className='px-7 md:px-0 md:text-[20px]'>
  Pay, save, invest,and borrow—all in one
  seamless app <br className="hidden md:block lg:hidden " />
 designed to put you in control  of your money.
</p>

    </div>

    <div>
      <img src={robot} alt="robot" />
    </div>

  </section>
);

export default Hero;
