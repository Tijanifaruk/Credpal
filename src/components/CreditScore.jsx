// import React from 'react'
// import Button from './Button'
// import CreditRate from "../assets/CreditRate.svg"


// const CreditScore = () => (
//     <section className="p-2 md:px-8 flex flex-col md:flex-row items-center justify-between ">
       
//        <div className='px-4 md:px-0 md:w-1/2 '>
//         <h4 className='text-[#ADF6F6] mt-10 mb-5 text-4xl font-semibold'>Build Credit While You Spend</h4>
//         <p className="text-white text-light mb-5">Fund your CredPal virtual card and enjoy seamless payments anywhere, online or offline. Every transaction helps grow your credit profile while unlocking exciting rewards and benefits.</p>

//         <div className='mb-6'>
//           <Button />
//         </div>
//        </div>

//        <div>
//         <img src={CreditRate} alt="credit rate image"  />
//        </div>
//     </section>
//   )


// export default CreditScore


import React, { useRef } from 'react';
import Button from './Button';
import CreditRate from "../assets/CreditRate.svg";

// Import motion and useInView for animation on scroll
import { motion, useInView } from 'framer-motion';

const CreditScore = () => {
  // Reference to track when section enters viewport
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // only animate once

  return (
    <section
      className="p-2 md:px-8 flex flex-col md:flex-row items-center justify-between"
      ref={ref}
    >
      {/* LEFT SIDE: Text block with slide-in from left */}
      <motion.div
        className="px-4 md:px-0 md:w-1/2"
        initial={{ x: -100, opacity: 0 }}              // off-screen left
        animate={isInView ? { x: 0, opacity: 1 } : {}} // animate into view
        transition={{ duration: 0.8 }}                 // smooth duration
      >
        <h4 className='text-[#ADF6F6] mt-10 mb-5 text-4xl font-semibold'>Build Credit While You Spend</h4>
        <p className="text-white text-light mb-5">
          Fund your CredPal virtual card and enjoy seamless payments anywhere, online or offline. Every transaction helps grow your credit profile while unlocking exciting rewards and benefits.
        </p>

        <div className='mb-6'>
          <Button />
        </div>
      </motion.div>

      {/* RIGHT SIDE: Image with slide-in from right */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}              // off-screen right
        animate={isInView ? { x: 0, opacity: 1 } : {}} // animate into view
        transition={{ duration: 0.8 }}                 // smooth duration
      >
        <img src={CreditRate} alt="credit rate image" />
      </motion.div>
    </section>
  );
};

export default CreditScore;
