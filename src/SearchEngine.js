import React from "react";

import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div className="search-engine">
      <form id="search-city-form">
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              id="search-text-input"
              className="form-control"
              placeholder="Enter a city"
              autoFocus="on"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              className="btn shadow-sm search-button"
              value="Search"
            />
          </div>
          <div className="col-2">
            <button
              className="btn shadow-sm current-button"
              id="current-location-button"
            >
              Current
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
