import React from "react";
import "../School/School.css";
import "../Home/components/Hero/Hero.css";
// import { TypeAnimation } from "react-type-animation";
import Arrow from "../Home/components/Hero/HeroImages/arrow.svg";
import Search from "../Home/components/Hero/HeroImages/search.svg";
const School = () => {
  return (
    <div>
      <div className="school-section">
        <div className="school-filter">
          <div className="filter__main">
            <div className="filter__heading">
              <h1>
                <span>FILTERS</span>
              </h1>
            </div>
            <div className="filter__clear">
              <h1>
                <span>Clear All</span>
              </h1>
              <button className="filter__clear">X</button>
            </div>
          </div>
          <div className="filter-ownership">
          <div className="ownership__heading">
          <h1>School Ownership</h1></div>
          <div className="ownership__type">
          <div>
      <input type="checkbox" id="govern_owned" name="govern_owned"/>
      <label for="govern_owned">Public</label>
    </div>

    <div>
      <input type="checkbox" id="private_owned" name="private_owned"/>
      <label for="private_owned">Private</label>
    </div>
          </div>
          </div>
          <div className="filter-ownership">
          <div className="ownership__heading">
          <h1>School Board</h1></div>
          <div className="ownership__type">
          <div>
      <input type="checkbox" id="state_board" name="state_board"/>
      <label for="state_board">State</label>
    </div>

    <div>
      <input type="checkbox" id="cbsc_board" name="cbsc_board"/>
      <label for="cbsc_board">CBSC</label>
    </div>
    <div>
      <input type="checkbox" id="icsc_board" name="icsc_board"/>
      <label for="icsc_board">ICSC</label>
    </div>
    <div>
      <input type="checkbox" id="ig_board" name="ig_board"/>
      <label for="ig_board">IG</label>
    </div>
          </div>
          </div>
          <div className="filter-ownership">
          <div className="ownership__heading">
          <h1>School Fees</h1></div>
          <div className="ownership__type">
          <div>
      <input type="checkbox" id="lessthanten" name="lessthanten"/>
      <label for="lessthanten"> 10K </label>
    </div>

    <div>
      <input type="checkbox" id="tentotwenty" name="tentotwenty"/>
      <label for="tentotwenty">10K - 20K</label>
    </div>
    <div>
    <input type="checkbox" id="twentytothirty" name="twentytothirty"/>
    <label for="twentytothirty">20K- 30K</label>
  </div>
  <div>
  <input type="checkbox" id="thirtytoforty" name="thirtytoforty"/>
  <label for="thirtytoforty">30K -40K</label>
</div>
<div>
<input type="checkbox" id="fortytofifty" name="fortytofifty"/>
<label for="fortytofifty">40K -50K</label>
</div>
<div>
<input type="checkbox" id="abovefifty" name="abovefifty"/>
<label for="abovefifty">50K</label>
</div>
          </div>
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
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Search..."
                />
                <button>Search</button>
              </div>
            </div>
          </div>
          <div className="school-result">search result</div>
        </div>
      </div>
    </div>
  );
};

export default School;
