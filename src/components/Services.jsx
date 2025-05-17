import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { services } from '../constants';

const Services = () => {
  return (
    <div className="flex flex-col gap-4 max-w-md mx-auto p-4">
      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <div
            key={index}
            className={`rounded-xl py-12 px-12 ${service.bgColor} text-gray-800`}
          >
            <div className="mb-6" style={{ color: service.iconColor }}>
              <Icon size={60} /> 
            </div>
            <h3 className="text-3xl font-bold mb-6">{service.title}</h3>
            <p className="text-lg text-gray-600 mb-8">{service.content}</p>
            <div className="flex items-center font-semibold text-black cursor-pointer text-2xl">
              Learn More <RiArrowRightSLine size={25}/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
