import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Bookmark.css";
import Dot from "../College/collegeImages/dot.svg";
import Location from "../College/collegeImages/location.svg";

export default function Bookmark() {
  const [filteredColleges, setFilteredColleges] = useState([]);
  useEffect(() => {
    const storedData = localStorage.getItem("savedColleges");
    const parsedData = JSON.parse(storedData);
    setFilteredColleges(parsedData);
  }, []);
  return (
    <div className="mains">
      <div className="lists">
        <div className="college-list">
          {filteredColleges.length > 0 ? (
            filteredColleges.map((college, index) => (
              <div className="college-card" key={index}>
                <div className="rank">
                  <div className="rank-ranks">{college.ranking}</div>
                  <div className="rank-ranking-institute">
                    <div>NIRF '23</div>
                    <div>(All India)</div>
                  </div>
                </div>
                <div className="image">
                  <img src={college.images.logo_img} alt="college_logo" />
                </div>
                <div className="collge-info">
                  <Link to={`/colleges/${college.name}`}>
                    <div className="collge-name">{college.name}</div>
                  </Link>

                  <div className="info-two">
                    <div className="locations">
                      <div className="img">
                        <img src={Location} alt="location" />
                      </div>
                      <div className="address">
                        {college.location && college.location.city}
                      </div>
                    </div>
                    <div className="verticalline">|</div>
                    <div className="rating">
                      <div className="rate">{college.ratings.toFixed(1)}</div>
                      <div className="star-rating">
                        {Array.from(
                          { length: Math.floor(college.ratings.toFixed(1)) },
                          (_, i) => (
                            <span className="star" key={i}></span>
                          )
                        )}
                      </div>
                    </div>
                    <div className="verticalline">|</div>
                    <div className="college-fees">
                      <span>Fees:</span> ₹ {college.fees.BE}
                    </div>
                  </div>
                  <div className="info-three">
                    <div className="salary">
                      <span>Salary:</span> ₹ {college.package}
                    </div>
                  </div>
                  <div className="info-four">
                    <div className="admission">
                      <Link to={`/colleges/${college.name}`}>Admission</Link>
                    </div>
                    <div className="dot">
                      <img src={Dot} alt="dot" />
                    </div>
                    <Link to={`/colleges/${college.name}`}>Courses & Fees</Link>
                    <div className="dot">
                      <img src={Dot} alt="dot" />
                    </div>
                    <Link to={`/colleges/${college.name}`}>Placement</Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No College Foud</p>
          )}
        </div>
      </div>
    </div>
  );
}
