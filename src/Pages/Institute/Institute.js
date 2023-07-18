import React, { useEffect, useState } from "react";
import "../Institute/Institute.css";
import Banner from "../Institute/Institute_logo/viva-institute-of-technology-vit-thane.jpg";
import Logo from "../Institute/Institute_logo/download.png";
import Mail from "../Institute/Institute_logo/image 17.png";
import Rating from "../Institute/Institute_logo/image 18.png";
import Star from "../Institute/Institute_logo/ic_round-star.svg";
import Profile from "../Institute/Institute_logo/carbon_user-avatar-filled.svg";
import { useParams } from "react-router-dom";
import { useCollegeContext } from "../../context/collegeContext";
const Institute = () => {
  const { collegeName } = useParams();
  const collegeContext = useCollegeContext();
  // const [colleges, setColleges] = useState([]);
  const [savedColleges, setSavedColleges] = useState([]);

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

  const [isCollegeSaved, setIsCollegeSaved] = useState(() => {
    const sv = localStorage.getItem("savedColleges");
    const savedColleges = JSON.parse(sv);
    return (
      savedColleges &&
      savedColleges.some((savedCollege) => savedCollege.name === collegeName)
    );
  });

  useEffect(() => {
    setColleges(collegeContext);
  }, [collegeContext]);

  useEffect(() => {
    const savedCollegesData = localStorage.getItem("savedColleges");
    if (savedCollegesData) {
      setSavedColleges(JSON.parse(savedCollegesData));
    }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("savedColleges", JSON.stringify(savedColleges));
  // }, [savedColleges]);

  const selectedCollege = filteredColleges.find(
    (college) => college.name === collegeName
  );

  const handleSave = () => {
    if (isCollegeSaved) {
      // College is already saved, so remove it
      const updatedSavedColleges = savedColleges.filter(
        (savedCollege) => savedCollege.name !== selectedCollege.name
      );
      setSavedColleges(updatedSavedColleges);
      localStorage.setItem(
        "savedColleges",
        JSON.stringify(updatedSavedColleges)
      );
      setIsCollegeSaved(false);
    } else {
      // College is not saved, so add it
      const updatedSavedColleges = [...savedColleges, selectedCollege];
      setSavedColleges(updatedSavedColleges);
      localStorage.setItem(
        "savedColleges",
        JSON.stringify(updatedSavedColleges)
      );
      setIsCollegeSaved(true);
    }
  };

  if (!selectedCollege) {
    return <div>College not found.</div>;
  }

  return (
    <div style={{ backgroundColor: "#F3F2EF" }}>
      <div class="institute-main ">
        <div className="institute-banner-section container mx-auto mt-8">
          <img
            className="institute-banner rounded-lg"
            src={selectedCollege.images.college_img[0]}
            alt=""
            srcset=""
          />
          <img
            src={selectedCollege.images.logo_img}
            className="institute-logo border-2 border-black rounded-lg ml-6 mb-6"
            alt=""
            srcset=""
          />
          <div className="banner-detail mt-4">
            <div className="banner-detail__name">
              <h1>
                <span className="font-bold text-3xl">
                  {selectedCollege.name}
                </span>{" "}
              </h1>
              <div className="small-detail">
                <h1 className="small-detail-address ml-1">
                  <i class="fa-solid fa-location-dot"></i>{" "}
                  <span>Virar, Palghar</span>
                </h1>
                <div className="small-detail-govern ml-3 rounded">Private</div>
                <div className="small-detail-university ml-3 ">
                  University {savedColleges.length}{" "}
                </div>
              </div>
            </div>
            <button
              onClick={handleSave}
              className="btn save-btn border-2 border-red-900"
            >
              <i class="fa-regular fa-bookmark">
                <span className="ml-2">
                  {isCollegeSaved ? "SAVED" : "SAVE"}
                </span>
              </i>
            </button>
          </div>
        </div>
        <div className="institute-aboutus container mx-auto mt-8">
          <div class="container mx-auto px-4">
            <h1 class="text-3xl font-bold mt-8 mb-4">About Institute</h1>
            <p class="text-lg text-gray-700">
              {selectedCollege["About College"]}
            </p>
          </div>
        </div>
        <div className="institute-information container mx-auto mt-8">
          <div className="information-left">
            <div className="exam-info">
              <h5>
                <span className="exam-info-span font-bold">
                  Accepted Exams:
                </span>
              </h5>
              <h3>
                <span className="exam-info-span2">JEE MAIN , MHT-CET</span>
              </h3>
            </div>
            <hr />
            <div className="course-info">
              <h5>
                <span className="course-info-span font-bold">
                  Courses Offered:
                </span>
              </h5>
              <h3>
                <span className="course-info-span2">BE , M-TECH</span>
              </h3>
            </div>
            <hr />
            <div className="institute-fees">
              <h5>
                <span className="fees-info-span font-bold">Fees:</span>
              </h5>
              <h3>
                <span className="fees-info-span2">
                  Bachlor of Technology(BE)
                </span>
              </h3>
              <h5>
                <span className="fees-info-span font-bold">10000</span>
              </h5>
              <h3>
                <span className="fees-info-span2">
                  Master in Technology(MCA)
                </span>
              </h3>
              <h5>
                <span className="fees-info-span font-bold">110000</span>
              </h5>
            </div>
          </div>

          <div className="information-right">
            <div className="contact-info info-common">
              <div className="contact-img">
                <img src={Mail} alt="" />
              </div>
              <div className="contact-detail">
                <h4>
                  <span>Viva Institute Of Techhology</span>
                </h4>
                <h1>
                  <span>Contact Information</span>
                </h1>
              </div>
            </div>
            <div className="address-info info-common">
              <div className="address-heading common-head">Address: </div>
              <div className="address-detail common-main">
                <h4>
                  <span>{selectedCollege["College Address"]}</span>
                </h4>
              </div>
            </div>
            <hr />
            <div className="phone-info info-common">
              <div className="contact-img common-head">Phone: </div>
              <div className="contact-detail common-main">
                <h4>
                  <span>{selectedCollege.Phone}</span>
                </h4>
              </div>
            </div>
            <hr />
            <div className="email-info info-common">
              <div className="contact-img common-head">E-Mail: </div>
              <div className="contact-detail common-main">
                <h4>
                  <span> {selectedCollege.Email} </span>
                </h4>
              </div>
            </div>
            <div className="button-to-webite">
              <a target="_blank" href={selectedCollege["College Link"]}>
                <button className="btn">Go To College Website</button>
              </a>
            </div>
          </div>
        </div>
        <div className="institute-rating container mx-auto mt-8">
          <div className="left-rating">
            <div className="rating-img">
              <img src={Rating} alt="" srcset="" />
            </div>
            <div className="rating-detail">
              <h5>
                <span>Viva Institute Of Technology</span>
              </h5>
              <h1>
                <span className="font-extrabold">
                  Stuents Rating And Review
                </span>
              </h1>
            </div>
          </div>
          <div className="right-rating">
            <div className="rating-svg">
              <img src={Star} alt="" srcset="" />
              <h1>
                <span>1.1</span>/5
              </h1>
            </div>
          </div>
        </div>
        <div className="reviews container mx-auto mt-8">
          <div className="reviewer-name">
            <div className="profile-logo">
              <img src={Profile} alt="" srcset="" />
            </div>
            <div className="identity">
              <h1>
                <span>Gaurav Madusudan Harayan</span>
              </h1>
              <h2>
                <span>B.E. in Computer Engineering - Batch of 2023</span>
              </h2>
            </div>
          </div>
          <div className="summarized-review">
            <h1>
              <span>No Good Placements As Shown</span>
            </h1>
          </div>
          <div className="placements-review">
            <p>
              <span>Placements: </span>Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quaerat porro minima repudiandae reiciendis
              dolor incidunt veniam atque nam earum quae odit officia dolore
              eveniet praesentium velit error qui tempora, vel perspiciatis
              beatae asperiores optio corporis cumque. Beatae assumenda, saepe
              ratione pariatur ex cumque? Suscipit officiis dolor in vitae
              consequuntur vel.
            </p>
          </div>
          <div className="infrastructure-review">
            <p>
              <span>Infrastructure: </span>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quaerat porro minima repudiandae
              reiciendis dolor incidunt veniam atque nam earum quae odit officia
              dolore eveniet praesentium velit error qui tempora, vel
              perspiciatis beatae asperiores optio corporis cumque. Beatae
              assumenda, saepe ratione pariatur ex cumque? Suscipit officiis
              dolor in vitae consequuntur vel.
            </p>
          </div>
        </div>
        <div className="reviews container mx-auto mt-8">
          <div className="reviewer-name">
            <div className="profile-logo">
              <img src={Profile} alt="" srcset="" />
            </div>
            <div className="identity">
              <h1>
                <span>Gaurav Madusudan Harayan</span>
              </h1>
              <h2>
                <span>B.E. in Computer Engineering - Batch of 2023</span>
              </h2>
            </div>
          </div>
          <div className="summarized-review">
            <h1>
              <span>No Good Placements As Shown</span>
            </h1>
          </div>
          <div className="placements-review">
            <p>
              <span>Placements: </span>Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quaerat porro minima repudiandae reiciendis
              dolor incidunt veniam atque nam earum quae odit officia dolore
              eveniet praesentium velit error qui tempora, vel perspiciatis
              beatae asperiores optio corporis cumque. Beatae assumenda, saepe
              ratione pariatur ex cumque? Suscipit officiis dolor in vitae
              consequuntur vel.
            </p>
          </div>
          <div className="infrastructure-review">
            <p>
              <span>Infrastructure: </span>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quaerat porro minima repudiandae
              reiciendis dolor incidunt veniam atque nam earum quae odit officia
              dolore eveniet praesentium velit error qui tempora, vel
              perspiciatis beatae asperiores optio corporis cumque. Beatae
              assumenda, saepe ratione pariatur ex cumque? Suscipit officiis
              dolor in vitae consequuntur vel.
            </p>
          </div>
        </div>
        <div className="faq container mx-auto mt-8">
          <div class="container mx-auto px-4">
            <h1 class="text-3xl font-bold mt-8 mb-4">
              Frequently Asked Questions
            </h1>

            <div class="accordion">
              {/* <!-- FAQ Item 1 --> */}
              <div class="accordion-item">
                <h2 class="accordion-title">
                  <button class="flex justify-between items-center w-full py-2 px-4 bg-gray-200 hover:bg-gray-300">
                    <span class="text-lg font-medium">Question 1?</span>
                    <span class="accordion-icon">&#43;</span>
                  </button>
                </h2>
                <div class="accordion-content">
                  <p class="text-gray-700">Answer to Question 1.</p>
                </div>
              </div>

              {/* <!-- FAQ Item 2 --> */}
              <div class="accordion-item">
                <h2 class="accordion-title">
                  <button class="flex justify-between items-center w-full py-2 px-4 bg-gray-200 hover:bg-gray-300">
                    <span class="text-lg font-medium">Question 2?</span>
                    <span class="accordion-icon">&#43;</span>
                  </button>
                </h2>
                <div class="accordion-content">
                  <p class="text-gray-700">Answer to Question 2.</p>
                </div>
              </div>

              {/* <!-- FAQ Item 3 --> */}
              <div class="accordion-item">
                <h2 class="accordion-title">
                  <button class="flex justify-between items-center w-full py-2 px-4 bg-gray-200 hover:bg-gray-300">
                    <span class="text-lg font-medium">Question 3?</span>
                    <span class="accordion-icon">&#43;</span>
                  </button>
                </h2>
                <div class="accordion-content">
                  <p class="text-gray-700">Answer to Question 3.</p>
                </div>
              </div>

              {/* <!-- Add more FAQ items as needed --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Institute;
