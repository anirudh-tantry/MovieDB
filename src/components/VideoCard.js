import React from "react";

const VideoCard = (props) => {
    const { video } = props;
  return (
    <div className="trailer-page">
      <iframe
        className="iframe-trailer"
        allowFullScreen
        src={`https://www.youtube.com/embed/${video.key}`}
        title="video"
        autoplay="true"
      ></iframe>
    </div>
  );
};

export default VideoCard;
