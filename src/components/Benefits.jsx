import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { cards } from "../constants"; //  array  path

const Benefits = () => (
  <div className="w-full px-4 py-12">
    <Swiper
      modules={[Autoplay]}
      spaceBetween={12}
      slidesPerView={"auto"}
      autoplay={{ delay: 0, disableOnInteraction: false }}
      loop={true}
      speed={1000}
    >
      {cards.map((card) => (
        <SwiperSlide 
  key={card.id}
  style={{ width: "320px" }}
  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl text-white p-6 shadow-md flex flex-col h-[340px]"
>
  <div className="flex flex-col justify-between h-full"> 
    <div>
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
          <img src={card.badgeImage} alt="New" className="w-14 h-auto shrink-0" />
        )}
      </div>

      <p
  className={`text-sm text-gray-200 leading-relaxed ${
    card.id === "new2" ? "mb-11" : ""
  }`}
>
  {card.content}
</p>
    </div>
  </div>
</SwiperSlide>


      ))}
    </Swiper>
  </div>
);

export default Benefits;
