import React from "react";

const Header = ({ numMovies }) => {
  return (
    <div className="row">
      <div className="col-md-6 offset-4">
        <h2>
          All Movies{" "}
          <span className="badge badge-pill badge-success">{numMovies}</span>
        </h2>
      </div>
    </div>
  );
};

export default Header;