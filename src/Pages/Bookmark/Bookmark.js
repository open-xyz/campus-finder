import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Bookmark.css";
import Dot from "../College/collegeImages/dot.svg";
import Location from "../College/collegeImages/location.svg";
import Cookies from "js-cookie";

const Bookmark = () => {
  const [filteredColleges, setFilteredColleges] = useState([]);

  useEffect(() => {
    const token = Cookies.get("token");
    fetch("http://localhost:4080/api/collegecart", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setFilteredColleges(data.savedColleges);
        } else {
          // Handle the case where data.success is false (API call was not successful)
          console.error("Error fetching bookmarked colleges");
        }
      })
      .catch((error) => {
        console.error("Error fetching bookmarked colleges:", error);
      });
  }, []);
  return (
    <div className="mains">
      <div className="lists">
        <div className="college-list">
          {filteredColleges.length > 0 ? (
            filteredColleges.map((college) => (
              <div className="college-card" key={college._id}>
                <div className="rank">
                  <div className="rank-ranks">{college.college.ranking}</div>
                  <div className="rank-ranking-institute">
                    <div>NIRF '23</div>
                    <div>(All India)</div>
                  </div>
                </div>
                <div className="image">
                  <img
                    src={college.college.images.logo_img}
                    alt="college_logo"
                  />
                </div>
                <div className="collge-info">
                  <Link to={`/colleges/${college.college.name}`}>
                    <div className="collge-name">{college.college.name}</div>
                  </Link>

                  <div className="info-two">
                    <div className="locations">
                      <div className="img">
                        <img src={Location} alt="location" />
                      </div>
                      <div className="address">
                        {college.college.location &&
                          college.college.location.city}
                      </div>
                    </div>
                    <div className="verticalline">|</div>
                    <div className="rating">
                      <div className="rate">
                        {college.college.ratings.toFixed(1)}
                      </div>
                      <div className="star-rating">
                        {Array.from(
                          {
                            length: Math.floor(
                              college.college.ratings.toFixed(1)
                            ),
                          },
                          (_, i) => (
                            <span className="star" key={i}></span>
                          )
                        )}
                      </div>
                    </div>
                    <div className="verticalline">|</div>
                    <div className="college-fees">
                      <span>Fees:</span> ₹ {college.college.fees.BE}
                    </div>
                  </div>
                  <div className="info-three">
                    <div className="salary">
                      <span>Salary:</span> ₹ {college.college.package}
                    </div>
                  </div>
                  <div className="info-four">
                    <div className="admission">
                      <Link to={`/colleges/${college.college.name}`}>
                        Admission
                      </Link>
                    </div>
                    <div className="dot">
                      <img src={Dot} alt="dot" />
                    </div>
                    <Link to={`/colleges/${college.college.name}`}>
                      Courses & Fees
                    </Link>
                    <div className="dot">
                      <img src={Dot} alt="dot" />
                    </div>
                    <Link to={`/colleges/${college.college.name}`}>
                      Placement
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No College Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
