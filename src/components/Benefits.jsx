import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { cards } from "../constants";

const swiperAnimationSettings = {
  modules: [Autoplay],
  spaceBetween: 12,
  slidesPerView: "auto",
  autoplay: { delay: 2000, disableOnInteraction: false },
  loop: true,
  speed: 1000,
};

const Benefits = () => {
  return (
    <div className="w-full px-4 py-12">
      <Swiper {...swiperAnimationSettings} className="!px-4">
        {cards.map((card) => (
          <SwiperSlide
            key={card.id}
            style={{ width: "400px", height: "180px" }}
            className="rounded-2xl"
          >
            <div
              className="bg-gradient-to-br from-[#09535D] to-[#14101D] rounded-2xl text-white p-6 shadow-md flex flex-col justify-between h-full"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  {/* Top: Icon + Title + Optional Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2 w-full">
                      {card.iconComponent && (
                        <img
                          src={card.iconComponent}
                          alt="icon"
                          className="w-5 h-5 shrink-0"
                        />
                      )}
                      <h3
                        className="text-lg font-semibold truncate w-full"
                        title={card.title}
                      >
                        {card.title}
                      </h3>
                    </div>
                    {card.badgeImage && (
                      <img
                        src={card.badgeImage}
                        alt="New"
                        className="w-14 h-auto shrink-0"
                      />
                    )}
                  </div>

                  {/* Bottom: Content */}
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
