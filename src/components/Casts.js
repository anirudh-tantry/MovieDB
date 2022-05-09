import React from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Casts = (props) => {
  const { castData } = props;
  const casts = castData && castData.slice(0, 10);
  return (
    <div className="casts-row">
      <p className="row-title">Casts</p>
      <div className="movie-cards">
        <Swiper
          grabCursor={true}
          spaceBetween={8}
          slidesPerView={"auto"}
          navigation={true}
          modules={[Navigation]}
        >
          {casts.map((cast, i) => (
            <SwiperSlide className="swiperSlide" key={i}>
              <Card key={cast.id} type={"person"} data={cast} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Casts;
