import React from 'react'
import Button from './Button';
import crypto from "../assets/Crypto.svg"

const Crypto = () =>  (
    <section className="p-2 flex flex-col  items-center justify-between">
      <div>
        <h4 className='text-[#ADF6F6] mt-10 mb-5 text-4xl font-semibold'>Live Crypto Market Updates</h4>
        <p className="text-light text-white mb-5">
        Stay ahead with real-time Bitcoin prices, market trends, and seamless conversions. Make informed decisions before funding your wallet with CredPal.
      </p>

      <div className="mb-6">
        <Button />
      </div>
      </div>

      

      <div>
        <img src={crypto} alt="" />
      </div>
    </section>
  )


export default Crypto
