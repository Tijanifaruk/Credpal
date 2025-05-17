 import React from 'react';
import Button from './Button';

const Featured = () => (

  <section className="h-[460px] flex justify-center items-center px-10 py-10 bg-gradient-to-b from-[#007070] to-[#002222] rounded-2xl shadow-lg max-w-md mx-auto">
    <div className="text-center text-white space-y-6">
      <h4 className="text-3xl  font-bold">
        Unlock Your Financial Power
      </h4>
      <p className="text-[#9FF9F9] text-sm md:text-base leading-relaxed">
        Start building your credit score today with CredPal. Download the app
        and take charge of your financial future across Africa.
      </p>
      <div className=''>
        <Button />
      </div>
    </div>
  </section>
);

export default Featured;
