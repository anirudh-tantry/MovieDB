import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import VideoCard from "./VideoCard";

const VideosCard = (props) => {
  return (
    <div className="videos-row-contaner">
      <p>More trailers & vides</p>

      <div className="videos-cards">
        <Swiper
          grabCursor={true}
          spaceBetween={8}
          slidesPerView={"auto"}
          navigation={true}
          modules={[Navigation]}
        >
          {props.videos.map(
            (video, i) =>
              video.key && (
                <SwiperSlide className="videoSlider" key={i}>
                  <VideoCard key={video.id} type={"videos"} video={video} />
                </SwiperSlide>
              )
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default VideosCard;
