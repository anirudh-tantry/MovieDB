import React from "react";
import Request from "../api/request";
import star from "../assets/star.png";
import { Link } from "react-router-dom";

const Card = (props) => {
  const {
    id,
    title,
    name,
    character,
    vote_average,
    poster_path,
    profile_path,
    release_date,
    first_air_date,
  } = props.data;
  const link = `/${props.type}/${id}`;
  const release_year =
    release_date || first_air_date
      ? release_date
        ? release_date.slice(0, 4)
        : first_air_date.slice(0, 4)
      : "";

  return (
    <Link to={link}>
      <div className="card">
        <div className="poster">
          <img
            className="poster"
            src={Request.w500Image(poster_path || profile_path)}
            alt="Poster"
            loading="lazy"
          />
          {vote_average > 0 && (
            <span className="info-rating">
              <img className="info-rating-star" src={star} alt="" />
              {vote_average.toFixed(1).replace(/\.0+$/, "")}
            </span>
          )}
        </div>
        {release_year && <span className="year-released">{release_year}</span>}
        <div className="info">
          <p className="info-name">{title || name}</p>
          {character && <p className="character-name"> {`( ${character} )`}</p>}
        </div>
      </div>
    </Link>
  );
};

export default Card;
