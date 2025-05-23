import React, { useRef } from 'react';
import Button from './Button';
import savings from "../assets/SmartSave.svg";

// Import motion and useInView from Framer Motion for animation on scroll
import { motion, useInView } from 'framer-motion';

const SmartSave = () => {
  // Create a reference to the section element to detect when it's in view
  const ref = useRef(null);
  // Check if the section is in the viewport, trigger only once
  const isInView = useInView(ref, { once: true });

  return (
    <section 
      className="p-4 flex flex-col md:flex-row items-center justify-between md:px-8"
      ref={ref} // Attached ref for scroll detection
    >
      {/* Left side: Text content with animation sliding in from the left */}
      <motion.div
        className="md:w-1/2"
        initial={{ x: -100, opacity: 0 }} // Initial hidden state off to the left
        animate={isInView ? { x: 0, opacity: 1 } : {}} // Animate to visible when in view
        transition={{ duration: 0.8 }} // Animation speed
      >
        <h3 className='text-[#ADF6F6] mt-10 mb-5 text-4xl font-semibold'>
          Smart Saving Made Simple
        </h3>
        <p className="text-white mb-5">
          Take control of your savings effortlessly. Set a budget, track your progress, and automate transfers, helping you reach your financial goals with ease.
        </p>

        {/* Button component */}
        <div className="mb-6">
          <Button />
        </div>
      </motion.div>

      {/* Right side: Image with animation sliding in from the right */}
      <motion.div
        initial={{ x: 100, opacity: 0 }} // Initial hidden state off to the right
        animate={isInView ? { x: 0, opacity: 1 } : {}} // Animate to visible when in view
        transition={{ duration: 0.8 }} // Animation speed
      >
        {/* Savings illustration image */}
        <img src={savings} alt="saveImg" className='w-full md:h-[460px]' />
      </motion.div>
    </section>
  );
};

export default SmartSave;
