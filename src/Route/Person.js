import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "../api/axios";
import request from "../api/request";

const Person = () => {
  const [castDetails, setCastDetails] = useState({});
  const { pathname } = useLocation();
  const pathnameArray = pathname.split("/");
  const type = pathnameArray[1];
  const id = pathnameArray[2];

  const birthday = castDetails.birthday && castDetails.birthday.split("-");
  const dob = birthday && `${birthday[2]}-${birthday[1]}-${birthday[0]}`;

  useEffect(() => {
    const getCastData = async () => {
      const req = await axios.get(request.GetCastData(type, id));
      setCastDetails(req.data);
      console.log(req.data);
    };
    getCastData();
  }, [type, id]);

  return (
    <div className="main-page person">
      <img
        className="poster-image"
        src={request.w500Image(castDetails.profile_path)}
        alt="Poster"
      />
      <div className="cast-info">
        <h1>{castDetails.name}</h1>
        <p> {`Date of Birth: ${dob}`}</p>
        <p> {`Birth Place: ${castDetails.place_of_birth}`}</p>
      </div>
      <div className="biography">
        <h3>Biography:</h3>
        <p>{castDetails.biography}</p>
      </div>
    </div>
  );
};

export default Person;
