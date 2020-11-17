import React from "react";
import "./movieCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";

const MovieCard = props => {
  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
        <img
          className="card-img-tag center "
          alt={props.movie.title}
          src={
            props.movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`
              : "./film-poster-placeholder.png"
          }
        />
        <div className="card-body">
          <h4 className="card-title ">{props.movie.title}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            <span> {props.movie.release_date}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {props.movie.vote_average}</span>
          </p>
        </div>
        <div className="card-footer">
          <button type="button" className="btn w-100 btn-primary">
            Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard ;