import React from 'react'
import Button from './Button';
import crypto from "../assets/Crypto.svg"

const Crypto = () =>  (
    <section className="  flex flex-col md:flex-row items-center justify-between md:pl-8">
      <div className='px-4 md:px-0 md:w-1/2'>
        <h4 className='text-[#ADF6F6] mt-10 mb-5 text-4xl font-semibold'>Live Crypto Market Updates</h4>
        <p className=" text-white mb-5">
        Stay ahead with real-time Bitcoin prices, market trends, and seamless conversions. Make informed decisions before funding your wallet with CredPal.
      </p>

      <div className="mb-6">
        <Button />
      </div>
      </div>

      

      <div>
        <img src={crypto} alt="" className='w-full md:h-[460px]'/>
      </div>
    </section>
  )


export default Crypto
