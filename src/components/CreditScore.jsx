import React from 'react'
import Button from './Button'
import CreditRate from "../assets/CreditRate.svg"


const CreditScore = () => (
    <section className="p-2 flex flex-col  items-center justify-between">
       
       <div>
        <h4 className='text-[#ADF6F6] mt-10 mb-5 text-4xl font-semibold'>Build Credit While You Spend</h4>
        <p className="text-white text-light mb-5">Fund your CredPal virtual card and enjoy seamless payments anywhere, online or offline. Every transaction helps grow your credit profile while unlocking exciting rewards and benefits.</p>

        <div className='mb-6'>
          <Button />
        </div>
       </div>

       <div>
        <img src={CreditRate} alt="credit rate image" />
       </div>
    </section>
  )


export default CreditScore
