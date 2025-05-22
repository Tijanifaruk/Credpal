// import React, { useState } from 'react';
// import NgnCard from '../assets/NgnCard.svg';
// import UsdCard from '../assets/UsdCard.svg';
// import Button from './Button';

// const VirtualCard = () => {
//   const [selectedCard, setSelectedCard] = useState('ngn');

//   const getCardImage = () => {
//     return selectedCard === 'ngn' ? NgnCard : UsdCard;
//   };

//   return (
//     <section className="px-2 md:px-0 flex flex-col md:flex-row  justify-between md:mb-10 md:px-8">
//       {/* LEFT SIDE: Text */}
//       <div className="px-4 md:px-0 md:w-1/2  max-w-3xl w-full  ">
//         <h2 className="text-[#ADF6F6] mt-10 mb-5 text-4xl font-semibold">Virtual Cards</h2>
//         <p className="text-white text-light mb-5">
//           Create a virtual credit or cash card that lets you make secure online purchases, track your spending in real time, and see exactly where your money goes, available in countries like the United States, United Kingdom, Canada, Nigeria, India, South Africa, and more. With advanced security features, you can set spending limits, control your expenses, and easily replenish your card whenever needed.
//         </p>

//         <div className="mb-6">
//           <Button />
//         </div>
//       </div>

//       {/* RIGHT SIDE: Toggle + Image */}
//       <div className="md:w-1/2 w-full flex flex-col items-center justify-center md:items-end md:justify-end mt-6 md:mt-0">
//         <div className="bg-[#b4cffa] py-8  rounded-xl shadow-md w-full max-w-md">
//           {/* Toggle Buttons */}
//           <div className="flex justify-center space-x-2 mb-6">
//             <button
//               className={`px-4 py-2 rounded-md font-medium transition ${
//                 selectedCard === 'ngn' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'
//               }`}
//               onClick={() => setSelectedCard('ngn')}
//             >
//               NGN Virtual Card
//             </button>
//             <button
//               className={`px-4 py-2 rounded-md font-medium transition ${
//                 selectedCard === 'usd' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'
//               }`}
//               onClick={() => setSelectedCard('usd')}
//             >
//               USD Virtual Card
//             </button>
//           </div>

//           {/* Card Image */}
//           <div className="flex justify-center">
//             <img
//               src={getCardImage()}
//               alt={`${selectedCard.toUpperCase()} Virtual Card`}
//               className="w-[360px] h-auto rounded-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VirtualCard;


import React, { useState, useRef } from 'react';
import NgnCard from '../assets/NgnCard.svg';
import UsdCard from '../assets/UsdCard.svg';
import Button from './Button';

// Import motion and useInView for scroll-triggered animation
import { motion, useInView } from 'framer-motion';

const VirtualCard = () => {
  const [selectedCard, setSelectedCard] = useState('ngn');

  // Function to return selected card image
  const getCardImage = () => {
    return selectedCard === 'ngn' ? NgnCard : UsdCard;
  };

  // Create a ref for the section and track if it's in view
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    // Section container with scroll tracking ref
    <section
      className="px-2 md:px-0 flex flex-col md:flex-row justify-between md:mb-10 md:px-8"
      ref={ref}
    >
      {/* LEFT SIDE: Text content with slide-in from left */}
      <motion.div
        className="px-4 md:px-0 md:w-1/2 max-w-3xl w-full"
        initial={{ x: -100, opacity: 0 }}           // Start left and hidden
        animate={isInView ? { x: 0, opacity: 1 } : {}} // Animate when in view
        transition={{ duration: 0.8 }}              // Smooth animation
      >
        <h2 className="text-[#ADF6F6] mt-10 mb-5 text-4xl font-semibold">Virtual Cards</h2>
        <p className="text-white text-light mb-5">
          Create a virtual credit or cash card that lets you make secure online purchases, track your spending in real time, and see exactly where your money goes, available in countries like the United States, United Kingdom, Canada, Nigeria, India, South Africa, and more. With advanced security features, you can set spending limits, control your expenses, and easily replenish your card whenever needed.
        </p>

        <div className="mb-6">
          <Button />
        </div>
      </motion.div>

      {/* RIGHT SIDE: Card toggle & image with slide-in from right */}
      <motion.div
        className="md:w-1/2 w-full flex flex-col items-center justify-center md:items-end md:justify-end mt-6 md:mt-0"
        initial={{ x: 100, opacity: 0 }}            // Start right and hidden
        animate={isInView ? { x: 0, opacity: 1 } : {}} // Animate when in view
        transition={{ duration: 0.8 }}              // Smooth animation
      >
        <div className="bg-[#b4cffa] py-8 rounded-xl shadow-md w-full max-w-md">
          {/* Toggle Buttons */}
          <div className="flex justify-center space-x-2 mb-6">
            <button
              className={`px-4 py-2 rounded-md font-medium transition ${
                selectedCard === 'ngn' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'
              }`}
              onClick={() => setSelectedCard('ngn')}
            >
              NGN Virtual Card
            </button>
            <button
              className={`px-4 py-2 rounded-md font-medium transition ${
                selectedCard === 'usd' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'
              }`}
              onClick={() => setSelectedCard('usd')}
            >
              USD Virtual Card
            </button>
          </div>

          {/* Card Image */}
          <div className="flex justify-center">
            <img
              src={getCardImage()}
              alt={`${selectedCard.toUpperCase()} Virtual Card`}
              className="w-[360px] h-auto rounded-lg"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VirtualCard;
