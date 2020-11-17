import React from "react";
import Movie from "../movieCard/";
import "./movieList.css";

const MovieList = props => {
  const movieCards = props.movies.map(m => (
    <Movie key={m.id} movie={m} />
  ));
  return <div className="row movies bg-info">{movieCards}</div>;
};

export default MovieList;