import React from "react";
import "./College.css";

export default function College() {
  return (
    <div className="main">
      <div className="college-component">
        <div className="college-filter"></div>
        <div className="main-college">
          <div className="search">
            <div className="heading">Search School</div>
            <div className="input">
              <input type="text" />
              <button>Search</button>
            </div>
          </div>
          <div className="college-list"></div>
        </div>
      </div>
    </div>
  );
}
