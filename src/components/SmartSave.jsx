// import React from 'react'
// import  Button from './Button';
// import savings from "../assets/SmartSave.svg"

// const SmartSave = () =>  (
//     <section className="p-4 flex flex-col md:flex-row items-center justify-between md:px-8 ">

//       <div className=' md:w-1/2 '>
//       <h3 className='text-[#ADF6F6] mt-10 mb-5 text-4xl font-semibold'>Smart Saving Made Simple </h3> 
//       <p className="text-white  mb-5">Take control of your savings effortlessly. Set a budget, track your progress, and automate transfers, helping you reach your financial goals with ease.</p>


//       <div className="mb-6">
//         <Button />
//       </div>
//       </div>

      

//       <div>
//         <img src={savings} alt="saveImg" className='w-full md:h-[460px] ' />
//       </div>

//     </section>
//   )


// export default SmartSave


import React, { useRef } from 'react';
import Button from './Button';
import savings from "../assets/SmartSave.svg";

// Import motion and useInView from Framer Motion
import { motion, useInView } from 'framer-motion';

const SmartSave = () => {
  // Create a ref for the entire section to track its position on screen
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger only once when it enters view

  return (
    // Main section layout: flex column on mobile, row on desktop
    <section 
      className="p-4 flex flex-col md:flex-row items-center justify-between md:px-8"
      ref={ref} // Attach the ref to trigger animation on scroll
    >
      {/* Left side: Text content with slide-in from the left */}
      <motion.div
        className="md:w-1/2"
        initial={{ x: -100, opacity: 0 }} // Start hidden and offset left
        animate={isInView ? { x: 0, opacity: 1 } : {}} // Animate in when visible
        transition={{ duration: 0.8 }} // Animation duration
      >
        <h3 className='text-[#ADF6F6] mt-10 mb-5 text-4xl font-semibold'>
          Smart Saving Made Simple
        </h3>
        <p className="text-white mb-5">
          Take control of your savings effortlessly. Set a budget, track your progress, and automate transfers, helping you reach your financial goals with ease.
        </p>

        <div className="mb-6">
          <Button />
        </div>
      </motion.div>

      {/* Right side: Image with slide-in from the right */}
      <motion.div
        initial={{ x: 100, opacity: 0 }} // Start hidden and offset right
        animate={isInView ? { x: 0, opacity: 1 } : {}} // Animate in when visible
        transition={{ duration: 0.8 }} // Animation duration
      >
        <img src={savings} alt="saveImg" className='w-full md:h-[460px]' />
      </motion.div>
    </section>
  );
};

export default SmartSave;
