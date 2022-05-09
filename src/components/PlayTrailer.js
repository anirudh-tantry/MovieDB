import React from "react";

const PlayTrailer = (props) => {
  return (
    <div className="overlay" onClick={props.onClickTrailer_btn}>
      <div className="pop-up" onClick={(e) => e.stopPropagation()}>
        <span onClick={props.onClickTrailer_btn}>X </span>
        <iframe
          style={{ border: "none" }}
          allowFullScreen
          src={`https://www.youtube.com/embed/${props.trailerkey}?autoplay=1`}
          title="video"
          autoplay="true"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
};

export default PlayTrailer;
