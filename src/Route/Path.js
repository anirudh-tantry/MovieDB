import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Movie from "./Movie";
import Tv from "./Tv";
import Details from "./Details";
import Person from "./Person";

const Path = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/movie" element={<Movie />} />
      <Route path="/movie/:id" element={<Details />} />
      <Route exact path="/tv" element={<Tv />} />
      <Route path="/tv/:id" element={<Details />} />
      <Route path="/person/:id" element={<Person />} />
    </Routes>
  );
};

export default Path;
