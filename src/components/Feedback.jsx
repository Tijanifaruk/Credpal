import React from 'react';
import { feedback } from '../constants'; 

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="bg-[#105a5884] rounded-xl p-6 text-white flex flex-col justify-between h-[280px] shadow-md">
    <div>
      <div className="text-5xl text-[#1E9BFF] mb-3">“</div>
      <p className="text-sm text-white leading-relaxed">{content}</p>
    </div>
    <div className="flex items-center mt-4">
      {img && <img src={img} alt={name} className="w-10 h-10 rounded-full mr-3" />}
      <div>
        {name && <p className="font-semibold">{name}</p>}
        <p className="text-gray-400 text-sm">{title}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <section className="bg-gradient-to-b from-[rgba(7,12,23,0.68)] to-[#050b32ac] px-4 py-10 rounded-xl max-w-md mx-auto">
    <h2 className="text-[#bceded] text-3xl font-bold text-center leading-relaxed">Trusted by Our Customers</h2>
    <p className="text-gray-300 text-center text-sm mt-2 mb-6">
      Discover why users choose CredPal and hear their stories firsthand.
    </p>

    <div className="space-y-6">
      {feedback.map((fb) => (
        <FeedbackCard key={fb.id} {...fb} />
      ))}
    </div>
  </section>
);

export default Testimonials;
