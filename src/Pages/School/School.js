import React from 'react'
import "../School/School.css"
import "../Home/components/Hero/Hero.css"
// import { TypeAnimation } from "react-type-animation";
import Arrow from "../Home/components/Hero/HeroImages/arrow.svg"
import Search from "../Home/components/Hero/HeroImages/search.svg"
const School = () => {
  return (
    <div>
      <div className="school-section">
      <div className="school-filter">
      <div className="filter__main">
      <div className="filter__heading"><h1><span>FILTERS</span></h1></div>
      </div>
      </div>
      <div className="school-main">
      <div className="school-search">
      <h1>Search School</h1>
      <div className="hero__middle">
          <div className="search-bar-school">
            <div className="custom-select">
              <select>
                <option value="">All</option>
                <option value="">Schools</option>
                <option value="">Colleges</option>
              </select>
              <span className="custom-background"></span>
              <span className="custom-arrow">
                <img src={Arrow} alt="arrow" />
              </span>
            </div>
            <div className="line"></div>
            <img style={{ marginRight: "0.8rem" }} src={Search} alt="" />
            <input type="tel" id="phone" name="phone" placeholder="Search..." />
            <button>Search</button>
          </div>
        </div>
      </div>
      <div className="school-result">
      search result
      </div>
      </div>

      </div>
    </div>
  )
}

export default School
