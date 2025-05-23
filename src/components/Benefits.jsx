import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
// Importing cards data for benefits display
import { cards } from "../constants";

// Configuration settings for Swiper carousel animations and behavior
const swiperAnimationSettings = {
  modules: [Autoplay], // Enable autoplay module
  spaceBetween: 12, // Space between slides
  slidesPerView: "auto", // Slides visible depends on container width
  autoplay: { delay: 2000, disableOnInteraction: false }, // Autoplay every 2 seconds
  loop: true, // Loop slides infinitely
  speed: 1000, // Slide transition speed
};

const Benefits = () => {
  return (
    // Container  for the benefits section
    <div className="w-full px-4 py-12">
      {/* Swiper carousel with configured settings */}
      <Swiper {...swiperAnimationSettings} className="!px-4">
        {/* Map through cards array to create each slide */}
        {cards.map((card) => (
          <SwiperSlide
            key={card.id}
            style={{ width: "400px", height: "180px" }} // Fixed slide size
            className="rounded-2xl"
          >
            {/* Card container  */}
            <div
              className="bg-gradient-to-br from-[#09535D] to-[#14101D] rounded-2xl text-white p-6 shadow-md flex flex-col justify-between h-full"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  {/* Top section: Icon, Title and optional Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2 w-full">
                      {/* Display icon image if exists */}
                      {card.iconComponent && (
                        <img
                          src={card.iconComponent}
                          alt="icon"
                          className="w-5 h-5 shrink-0"
                        />
                      )}
                      {/* Title of the card */}
                      <h3
                        className="text-lg font-semibold truncate w-full"
                        title={card.title}
                      >
                        {card.title}
                      </h3>
                    </div>
                    {/* Display badge image if exists */}
                    {card.badgeImage && (
                      <img
                        src={card.badgeImage}
                        alt="New"
                        className="w-14 h-auto shrink-0"
                      />
                    )}
                  </div>

                  {/* Bottom section: Content description */}
                  <p
                    className={`text-sm text-gray-200 leading-relaxed ${
                      card.id === "new2" ? "mb-2" : ""
                    }`}
                  >
                    {card.content}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Benefits;
