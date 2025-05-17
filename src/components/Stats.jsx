import React from 'react';
import { stats } from "../constants";

const Stats = () => {
  return (
    <section className="flex justify-center gap-8 md:gap-32">
      {stats.map((stat) => (
        <div key={stat.id} className="text-center">
          <h2 className="text-white text-2xl md:text-4xl  font-semibold uppercase mb-2">
            {stat.value.endsWith('.svg') || stat.value.endsWith('.png') ? (
              <img src={stat.value} alt={stat.label} className="inline h-8 w-full  " />
            ) : (
              stat.value
            )}
          </h2>
          <p className="text-[#74F8D5] text-sm uppercase">{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
