import React from "react";
import schoollogo from "../Category/selectcategoryimages/icons8-school-100.png";
import collegelogo from "../Category/selectcategoryimages/icons8-college-100.png";
import investorlogo from "../Category/selectcategoryimages/875bb98a-f031-4517-856e-9f1f83dc7b44.jpeg";
import "./SelectCategory.css";
import { Link } from "react-router-dom";
const SelectCategory = () => {
  return (
    <>
      <div className="selectcategory">
        <h1 className="selectcategory-heading">Select Your Category</h1>
        <div className="selectcategory-main">
          <div className="card">
            <div className="card__logo">
              <img src={schoollogo} alt="" srcset="" />
            </div>
            <div className="card__course">
              <h3>Find Perfect School</h3>
              <h3>For You</h3>
            </div>
            <div className="card__button">
              <Link to={"school"} className="btn" type="button">
                Explore School
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card__logo">
              <img src={collegelogo} alt="" srcset="" />
            </div>
            <div className="card__course">
              <h3>Find Perfect College</h3>
              <h3>For You</h3>
            </div>
            <div className="card__button">
              <Link to={"college"} className="btn" type="button">
                Explore College
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card__logo">
              <img src={investorlogo} alt="" srcset="" />
            </div>
            <div className="card__course">
              <h3>Find Perfect Investor</h3>
              <h3>For You</h3>
            </div>
            <div className="card__button">
              <Link to={"investor"} className="btn" type="button">
                Explore Investors
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectCategory;
