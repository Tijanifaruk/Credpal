

import React, { useState, useRef } from 'react';
import NgnCard from '../assets/NgnCard.svg'; // NGN card image
import UsdCard from '../assets/UsdCard.svg'; // USD card image
import Button from './Button'; // Reusable Button component
import { motion, useInView } from 'framer-motion'; // Animation and scroll view hook

const VirtualCard = () => {
  const [selectedCard, setSelectedCard] = useState('ngn'); // State to track which card is selected (NGN or USD)
  const ref = useRef(null); // Ref for the section to check if it is in view
  const isInView = useInView(ref, { once: true }); // Hook to determine if the section is visible on the screen

  const isFlipped = selectedCard === 'usd'; // Determines if the card should be flipped to show the USD side

  return (
    // Section container with responsive padding and layout
    <section
      className="px-2  flex flex-col md:flex-row justify-between md:mb-10 md:px-8"
      ref={ref}
    >
      {/* Left Side: Text Content and Button with animation */}
      <motion.div
        className="px-4 md:px-0 md:w-1/2 max-w-3xl w-full"
        initial={{ x: -100, opacity: 0 }} // Starting animation position
        animate={isInView ? { x: 0, opacity: 1 } : {}} // Animate when in view
        transition={{ duration: 0.8 }} // Animation duration
      >
        <h2 className="text-[#ADF6F6] mt-10 mb-5 text-4xl font-semibold">Virtual Cards</h2>
        <p className="text-white text-light mb-5">
          Create a virtual credit or cash card that lets you make secure online purchases, track your spending in real time, and see exactly where your money goes, available in countries like the United States, United Kingdom, Canada, Nigeria, India, South Africa, and more. With advanced security features, you can set spending limits, control your expenses, and easily replenish your card whenever needed.
        </p>
        <div className="mb-6">
          <Button /> {/* Call to action button */}
        </div>
      </motion.div>

      {/* Right Side: Card Display with flip animation */}
      <motion.div
        className="md:w-1/2 w-full flex flex-col items-center justify-center md:items-end md:justify-end mt-6 md:mt-0"
        initial={{ x: 100, opacity: 0 }} // Starting animation position
        animate={isInView ? { x: 0, opacity: 1 } : {}} // Animate when in view
        transition={{ duration: 0.8 }} // Animation duration
      >
        <div className="bg-[#b4cffa] py-8 rounded-xl shadow-md w-full max-w-md">
          {/* Toggle Buttons to switch between NGN and USD cards */}
          <div className="flex justify-center space-x-2 mb-6">
            <button
              className={`px-4 py-2 rounded-md font-medium transition ${
                selectedCard === 'ngn' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'
              }`}
              onClick={() => setSelectedCard('ngn')} // Set selected card to NGN
            >
              NGN Virtual Card
            </button>
            <button
              className={`px-4 py-2 rounded-md font-medium transition ${
                selectedCard === 'usd' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'
              }`}
              onClick={() => setSelectedCard('usd')} // Set selected card to USD
            >
              USD Virtual Card
            </button>
          </div>

          {/* Card Flip Animation */}
          <div className="relative w-[360px] h-[220px] mx-auto perspective-[1000px]">
            <motion.div
              className="absolute w-full h-full"
              style={{
                transformStyle: 'preserve-3d', // Maintain 3D perspective
              }}
              animate={{ rotateY: isFlipped ? 180 : 0 }} // Rotate card on Y axis based on selected card
              transition={{ duration: 0.8 }} // Animation duration
            >
              {/* Front of the card (NGN) */}
              <div
                className="absolute w-full h-full rounded-lg backface-hidden"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <img
                  src={NgnCard}
                  alt="NGN Virtual Card"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Back of the card (USD) */}
              <div
                className="absolute w-full h-full rounded-lg"
                style={{
                  transform: 'rotateY(180deg)', // Rotate back of card
                  backfaceVisibility: 'hidden',
                }}
              >
                <img
                  src={UsdCard}
                  alt="USD Virtual Card"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VirtualCard; 
