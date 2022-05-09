import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "../api/axios";
import request, { title } from "../api/request";
import Cards from "../components/Cards";
import star from "../assets/star.png";
import Casts from "../components/Casts";
// import VideosCards from "../components/VideosCards";
import PlayTrailer from "../components/PlayTrailer";

const Details = () => {
  const [movieDetails, setMovieDetails] = useState();
  const [isOpen, setIsopen] = useState(false);

  const { pathname } = useLocation();
  const pathnameArray = pathname.split("/");
  const type = pathnameArray[1];
  const id = pathnameArray[2];

  // display Watch trailer btn only if trailer is available
  const trailers =
    movieDetails &&
    movieDetails.videos.results.filter((video) => video.type === "Trailer");

  const onClickTrailer_btn = () => setIsopen((prevState) => !prevState);

  useEffect(() => {
    const getDetails = async () => {
      const req = await axios.get(request.GetData(type, id));
      const watchProviderReq = await axios.get(
        request.GetWatchProvider(type, id)
      );
      const watchProvider = watchProviderReq.data.results;

      setMovieDetails({ ...req.data, watchProvider });
      window.scrollTo(0, 0);
      return req;
    };
    getDetails();
  }, [id, type]);
  console.log(movieDetails);

  return (
    <>
      {movieDetails && (
        <div className="details">
          <div
            className="banner"
            style={{
              backgroundImage: `url(${request.originalImage(
                movieDetails.backdrop_path || movieDetails.poster_path
              )})`,
            }}
          ></div>
          <div className="details-container">
            <img
              className="poster-image"
              src={request.w500Image(movieDetails.poster_path)}
              alt="poster"
              // loading="lazy"
            />
            <div className="info-box">
              <h1>{movieDetails.title || movieDetails.name}</h1>
              <div className="genres">
                {movieDetails.genres.slice(0, 5).map((genre, i) => (
                  <span key={i} className="genre">
                    {genre.name}
                  </span>
                ))}
              </div>
              <div className="story-line">{movieDetails.overview}</div>
              <div className="ratings-and-trailer">
                {movieDetails.vote_average !== 0 && (
                  <span className="details-rating">
                    <img className="details-rating-star" src={star} alt="" />
                    {movieDetails.vote_average.toFixed(1).replace(/\.0+$/, "")}
                  </span>
                )}

                {trailers.length > 0 && (
                  <button
                    className="watch-trailer"
                    onClick={() => {
                      window.scrollTo(0, 0);
                      onClickTrailer_btn();
                    }}
                  >
                    watch trailer
                  </button>
                )}
              </div>
            </div>
          </div>
          {isOpen && (
            <PlayTrailer
              trailerkey={trailers[0].key}
              onClickTrailer_btn={onClickTrailer_btn}
            />
          )}

          <Casts castData={movieDetails.credits.cast} />
          {/* <VideosCards videos={movieDetails.videos.results.slice(0,15)} /> */}
          <Cards
            row_title={`Similar ${type}`}
            type={type}
            id={id}
            category={title[20]}
          />
        </div>
      )}
    </>
  );
};

export default Details;
