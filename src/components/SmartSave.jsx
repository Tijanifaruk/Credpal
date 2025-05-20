import React from 'react'
import  Button from './Button';
import savings from "../assets/SmartSave.svg"

const SmartSave = () =>  (
    <section className="p-4 flex flex-col md:flex-row items-center justify-between md:px-8 ">

      <div className=' md:w-1/2 '>
      <h3 className='text-[#ADF6F6] mt-10 mb-5 text-4xl font-semibold'>Smart Saving Made Simple </h3> 
      <p className="text-white  mb-5">Take control of your savings effortlessly. Set a budget, track your progress, and automate transfers, helping you reach your financial goals with ease.</p>


      <div className="mb-6">
        <Button />
      </div>
      </div>

      

      <div>
        <img src={savings} alt="saveImg" className='w-full md:h-[460px] ' />
      </div>

    </section>
  )


export default SmartSave
