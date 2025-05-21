
 'use client'
import React, { useRef } from 'react'
import { motion} from 'framer-motion'
import { useInView } from 'framer-motion'
import { RiArrowRightSLine } from 'react-icons/ri'
import { services } from '../constants'

// Service Card Component
const ServiceCard = ({ service, index }) => {
  const Icon = service.icon
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
      className={`rounded-xl py-12 px-12 ${service.bgColor} text-gray-800 md:w-1/4`}
    >
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

// Main Services Component
const Services = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row  justify-center w-full mx-auto p-4">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} index={index} />
      ))}
    </div>
  )
}

export default Services


