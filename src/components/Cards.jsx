import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "../api/axios";
import request from "../api/request";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Cards = (props) => {
  const [cardsData, setCardsData] = useState([]);
  const { type, category, row_title, id } = props;

  useEffect(() => {
    const fetchData = async () => {
      const url = id ? request[category](type, id) : request[category](type);
      const req = await axios.get(url);
      setCardsData(req.data.results);
      // console.log(req.data.results);
      return req;
    };
    fetchData();
  }, [category, type, id]);

  return (
    <div
      className="movie-row"
      style={{ display: cardsData.length > 0 ? "" : "none" }}
    >
      <p className="row-title">{row_title}</p>
      <div className="movie-cards">
        <Swiper
          grabCursor={true}
          slidesPerView={"auto"}
          navigation={true}
          modules={[Navigation]}
        >
          {cardsData.map((data, i) => (
            <SwiperSlide className="swiperSlide" key={i}>
              <Card key={data.id} type={type || data.media_type} data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Cards;
