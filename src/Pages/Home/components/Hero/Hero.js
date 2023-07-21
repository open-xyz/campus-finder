import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import LeftLogo from "./HeroImages/left.png";
import RightLogo from "./HeroImages/right.png";
import Arrow from "./HeroImages/arrow.svg";
import Search from "./HeroImages/search.svg";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedValue, setSelectedValue] = useState("All");
  const [colleges, setColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [redirectToCollege, setRedirectToCollege] = useState("");
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4080/api/colleges")
      .then((response) => response.json())
      .then((data) => setColleges(data))
      .catch((error) => console.error("Error fetching colleges:", error));
  }, []);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const filterColleges = () => {
    let filtered = colleges.collegeList || [];
    if (
      searchQuery.length > 0 &&
      (selectedValue === "Colleges" || selectedValue === "All")
    ) {
      filtered = filtered.filter((college) =>
        college.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredColleges(filtered);

    // If there's only one college, set the college name for redirection
    if (filtered.length === 1) {
      setRedirectToCollege(filtered[0].name);
    }
  };

  // Use useEffect to handle redirection when redirectToCollege changes
  useEffect(() => {
    if (redirectToCollege) {
      // Redirect to the college page using the college name
      // You can use any routing mechanism suitable for your app
      // Here, we are using the Link component from react-router-dom
      window.location.href = `/colleges/${redirectToCollege}`;
    }
  }, [redirectToCollege]);

  const handleSearchClick = () => {
    setFlag(true);
    filterColleges();
  };

  return (
    <>
      <div className="hero-main">
        <div className="hero">
          <div className="hero__left">
            <img src={LeftLogo} alt="img" />
          </div>
          <div className="hero__middle">
            <div className="heading">
              Find & Search <br /> Your Dream{" "}
              <span>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    "School",
                    1000,
                    "College",
                    1000,
                    "Investor",
                    1000,
                    "Campus",
                    1000,
                  ]}
                  speed={{ type: "keyStrokeDelayInMs", value: 200 }}
                  style={{ fontSize: "3.5rem" }}
                  omitDeletionAnimation={true}
                />
              </span>
            </div>
            <div className="sub-heading">
              "Dream big, excel beyond limits - Welcome to Your Dream School!"
            </div>
            <div className="search-bar">
              <div className="custom-select">
                <select onChange={handleSelectChange} value={selectedValue}>
                  <option value="All">All</option>
                  <option value="Schools">Schools</option>
                  <option value="Colleges">Colleges</option>
                </select>

                <span className="custom-background"></span>
                <span className="custom-arrow">
                  <img src={Arrow} alt="arrow" />
                </span>
              </div>

              <div className="lines"></div>
              <img style={{ marginRight: "0.8rem" }} src={Search} alt="" />
              <input
                type="tel"
                id="phone"
                value={searchQuery}
                onChange={handleSearchChange}
                name="phone"
                placeholder="Search..."
              />
              <button onClick={handleSearchClick}>Search</button>
            </div>
          </div>
          <div className="hero__right">
            <img src={RightLogo} alt="img" />
          </div>
        </div>
      </div>
      <div className="college-list">
        {redirectToCollege.length === 0 && flag && <div>No college found</div>}
      </div>
    </>
  );
}
