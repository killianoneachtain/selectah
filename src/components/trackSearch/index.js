import React from "react";
import "./trackSearch.css";

const TrackSearch = props => {
  
  return (
      <div className="row bg-warning">
        <div className="col-md-12">
          <h4>
            <span>Enter a Song To Search:</span>
            <input
              type="text"
              placeholder="Song Search"
              id="input_track"
            />
          </h4>
        </div>
      </div>
  );
};
export default TrackSearch;