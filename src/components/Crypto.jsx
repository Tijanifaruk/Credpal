import React from 'react';
import Button from './Button';
import crypto from "../assets/Crypto.svg";

// Import motion and useInView hook from Framer Motion
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Crypto = () => {
  // Create a ref to track when the section enters the viewport
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once when in view

  return (
    // Wrapper section: flex layout for mobile and desktop
    <section 
      className="flex flex-col md:flex-row items-center justify-between md:pl-8"
      ref={ref} // Attach the ref to this section
    >

      {/* Left side: Text content with slide-in from left animation */}
      <motion.div
        className="px-4 md:px-0 md:w-1/2"
        initial={{ x: -100, opacity: 0 }} // start left & hidden
        animate={isInView ? { x: 0, opacity: 1 } : {}} // animate when in view
        transition={{ duration: 0.8 }} // animation speed
      >
        <h4 className='text-[#ADF6F6] mt-10 mb-5 text-4xl font-semibold'>
          Live Crypto Market Updates
        </h4>

        <p className="text-white mb-5">
          Stay ahead with real-time Bitcoin prices, market trends, and seamless conversions. Make informed decisions before funding your wallet with CredPal.
        </p>

        <div className="mb-6">
          <Button />
        </div>
      </motion.div>

      {/* Right side: Image with slide-in from right animation */}
      <motion.div
        initial={{ x: 100, opacity: 0 }} // start right & hidden
        animate={isInView ? { x: 0, opacity: 1 } : {}} // animate when in view
        transition={{ duration: 0.8 }} // animation speed
      >
        <img src={crypto} alt="crypto banner" className='w-full md:h-[460px]' />
      </motion.div>
    </section>
  );
};

export default Crypto;
