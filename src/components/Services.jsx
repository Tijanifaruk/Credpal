'use client' 
import React, { useRef } from 'react'
import { motion} from 'framer-motion'
// Importing useInView hook for scroll-based animations
import { useInView } from 'framer-motion'
import { RiArrowRightSLine } from 'react-icons/ri'
import { services } from '../constants'

// Service Card Component - renders individual service with animation and icon
const ServiceCard = ({ service, index }) => {
  const Icon = service.icon
  // Create ref to track if the card is in view
  const ref = useRef(null)
  // Detect if this card is in the viewport; updates continuously (not once)
  const isInView = useInView(ref, { once: false })

  return (
    // Animated div for slide-in effect from right with fade-in
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }} // Initial hidden state off to the right
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }} // Animate to visible when in view
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }} // Stagger animation by index
      className={`rounded-xl py-12 px-12 ${service.bgColor} text-gray-800 md:w-1/4`}
    >
      {/* Icon for the service with specified color */}
      <div className="mb-6" style={{ color: service.iconColor }}>
        <Icon size={60} />
      </div>
      <h3 className="text-3xl font-bold mb-6">{service.title}</h3>
      <p className="text-lg text-gray-600 mb-8">{service.content}</p>
      <div className="flex items-center font-semibold text-black cursor-pointer text-2xl">
        Learn More <RiArrowRightSLine size={25} />
      </div>
    </motion.div>
  )
}

// Main Services Component - renders all service cards in a flex container
const Services = () => {
  return (
    // Container with responsive flex layout and spacing
    <div className="flex flex-col gap-4 md:flex-row  justify-center w-full mx-auto p-4">
      {/* Map over services array and render ServiceCard for each */}
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} index={index} />
      ))}
    </div>
  )
}

export default Services

