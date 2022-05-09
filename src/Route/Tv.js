import React from "react";
import {title} from "../api/request";
import Cards from "../components/Cards";

const Tv = () => {
  return (
    <div className="tv main-page">
      <Cards row_title="Popular Tv shows" type="tv" category={title[2]} />
      <Cards row_title="Streaming on Netflix" type="tv" category={title[5]} />
      <Cards row_title="Sci-Fi & Fantasy" type="tv" category={title[8]} />
      <Cards
        row_title="Streaming on Prime Video"
        type="tv"
        category={title[6]}
      />
      <Cards row_title="Action & Adventure" type="tv" category={title[11]} />
      <Cards row_title="Top-rated Tv shows" type="tv" category={title[3]} />
      <Cards row_title="Hindi Tv shows" type="tv" category={title[17]} />
      <Cards row_title="Comedy" type="tv" category={title[10]} />
    </div>
  );
};

export default Tv;
