
import React from 'react';
// Importing an array of statistics data from constants file
import { stats } from "../constants";

const Stats = () => {
  return (
    <section className="flex justify-center gap-x-8 md:gap-x-44">
      {/* Loop through each stat object in the stats array */}
      {stats.map((stat) => (
        // Container for each individual stat, centered text
        <div key={stat.id} className="text-center">
          <h2 className="text-white text-2xl md:text-4xl  font-semibold uppercase mb-2">
            {/* Conditional rendering: if stat value is an image filename, render image, otherwise render text */}
            {stat.value.endsWith('.svg') || stat.value.endsWith('.png') ? (
              <img src={stat.value} alt={stat.label} className="inline h-6 w-full  " />
            ) : (
              stat.value
            )}
          </h2>
          {/* Label text below the value, styled with specific color and uppercase */}
          <p className="text-[#74F8D5] text-sm uppercase">{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;

