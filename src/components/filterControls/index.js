import React from "react";
import "./filterControls.css";

const FilterControls = props => {
  const genres = [
    {id: 1, name: "Animation"},
    {id: 2, name: "Comedy"},
    {id: 3, name: "Thriller"}
  ]

  return (
      <div className="row bg-warning">
        <div className="col-md-12">
          <h4>
            <span>List Filtering:</span>
            <input
              type="text"
              placeholder="Title Search"
            />
            <span>Genre:</span>
            <select id="genre">
              {genres.map(genre => {
                return (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                );
              })}
            </select>
          </h4>
        </div>
      </div>
  );
};
export default FilterControls;