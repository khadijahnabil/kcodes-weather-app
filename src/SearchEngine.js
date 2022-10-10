import React from "react";

import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div className="search-engine">
      <form>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
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
            <button className="btn shadow-sm current-button">Current</button>
          </div>
        </div>
      </form>
    </div>
  );
}
