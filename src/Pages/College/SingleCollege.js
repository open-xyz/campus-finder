import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCollegeContext } from "../../context/collegeContext";
import "./SingleCollege.css";
import Arrow from "./collegeImages/arrow.svg";

export default function SingleCollege() {
  const { collegeName } = useParams();
  // const colleges = useCollegeContext();
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4080/api/colleges")
      .then((response) => response.json())
      .then((data) => setColleges(data))
      .catch((error) => console.error("Error fetching colleges:", error));
  }, []);

  const [filteredColleges, setFilteredColleges] = useState([]);
  useEffect(() => {
    setFilteredColleges(colleges.collegeList || []);
  }, [colleges]);

  // Find the selected college based on the collegeName parameter
  const selectedCollege = filteredColleges.find(
    (college) => college.name === collegeName
  );

  if (!selectedCollege) {
    // Handle the case where the selected college is not found
    return <div>College not found.</div>;
  }

  return (
    <div className="component_main">
      <div className="college_section">
        <div className="image_section">
          <div className="college_image">
            <img
              src="https://images.shiksha.com/mediadata/images/1552028673phpB2zOPK_g.jpg"
              alt=""
            />
          </div>
          <div className="college_info">
            <div className="logo"></div>
            <div className="college_name">
              <div className="name"></div>
              <div className="additional_data">
                <div className="location"></div>
                <div className="ownership"></div>
                <div className="university"></div>
              </div>
            </div>
            <div className="save"></div>
          </div>
        </div>
        {/* About College */}
        <div className="about_college">
          <h1>About College</h1>
          <p></p>
        </div>
        <div className="split_section">
          <div className="split_section_left">
            <div className="left_content">
              <div className="exam">
                <h1>Accepted Exams: </h1>
                <p></p>
              </div>
              <div className="course">
                <h1>Course Offered: </h1>
                <p></p>
              </div>
              <div className="fees">
                <h1>Fees: </h1>
                <p></p>
                <h2></h2>
              </div>
            </div>
          </div>
          <div className="split_section_right">
            <div className="right_content">
              <div className="top_section">
                <div className="message"></div>
                <div className="info">
                  <p></p>
                  <h1>Contact Information</h1>
                </div>
              </div>
              <div className="address">
                <h1>Address</h1>
                <p></p>
              </div>
              <div className="phone">
                <h1>Phone</h1>
                <p></p>
              </div>
              <div className="email">
                <h1>E-mail</h1>
                <p></p>
              </div>
              <button>
                Go to College Website <img src={Arrow} alt="arrow" />{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="reviews_heading"></div>
        <div className="reviews"></div>
      </div>
    </div>
  );
}
