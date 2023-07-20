import React, { useEffect, useState, useRef } from "react";
import "../Institute/Institute.css";
import Banner from "../Institute/Institute_logo/viva-institute-of-technology-vit-thane.jpg";
import Logo from "../Institute/Institute_logo/download.png";
import Mail from "../Institute/Institute_logo/image 17.png";
import Rating from "../Institute/Institute_logo/image 18.png";
import Star from "../Institute/Institute_logo/ic_round-star.svg";
import Profile from "../Institute/Institute_logo/carbon_user-avatar-filled.svg";
import { useParams } from "react-router-dom";
import { useCollegeContext } from "../../context/collegeContext";
import Skeleton from "../College/SingleCollegeSkeleton";
import { FaStar } from "react-icons/fa";
import Cookies from "js-cookie";

const Institute = () => {
  const { collegeName } = useParams();
  const collegeContext = useCollegeContext();
  // const [colleges, setColleges] = useState([]);
  const [savedColleges, setSavedColleges] = useState([]);

  const [colleges, setColleges] = useState([]);
  const ref = useRef(null);
  const ref1 = useRef(null);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      rating: rating,
      comment: comment,
      collegeId: selectedCollege._id,
    };
    const token = Cookies.get("token"); // Replace with your logic to get the token from cookies

    fetch("http://localhost:4080/api/college/review", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
      body: JSON.stringify(review),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Review submitted:", data);
        setRating(null);
        setComment("");
      })
      .catch((error) => {
        console.error("Error submitting review:", error);
      });

    window.location.reload();
    closeModal();
  };

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

  console.log(selectedCollege);
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
    return (
      <div className="container mx-auto">
        <Skeleton />
      </div>
    );
  }
  const getModal = () => {
    ref.current.click();
  };
  const closeModal = () => {
    ref1.current.click();
  };

  return (
    <div style={{ backgroundColor: "#F3F2EF" }}>
      <div className="institute-main ">
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
                  <i className="fa-solid fa-location-dot"></i>{" "}
                  <span>{selectedCollege.location.city}</span>
                </h1>
                <div className="small-detail-govern ml-3 rounded">Private</div>
                <div className="small-detail-university ml-3 ">
                  University {savedColleges.length}{" "}
                </div>
              </div>
            </div>
            <button
              style={{ background: isCollegeSaved ? "#FFD233" : "#FFF" }}
              onClick={handleSave}
              className="btn saves-btn "
            >
              <i className="fa-regular fa-bookmark"></i>
              <span>{isCollegeSaved ? "Saved" : "Save"}</span>
            </button>
          </div>
        </div>
        <div className="institute-aboutus container mx-auto mt-8">
          <div className="container mx-auto px-4">
            <h1 className="heading">About Institute</h1>
            <div
              style={{ fontSize: "1rem", fontWeight: "400", marginTop: "1rem" }}
              className="descp"
            >
              {selectedCollege.description}
            </div>
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
                {selectedCollege.exams.map((e, index) =>
                  index === selectedCollege.exams.length - 1 ? e : e + " , "
                )}
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
                <span className="fees-info-span fees-cost">
                  {selectedCollege.fees.BE
                    ? selectedCollege.fees.BE.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                        minimumFractionDigits: 0,
                      })
                    : "-"}
                </span>
              </h5>
              <h3>
                <span className="fees-info-span2">
                  Master in Technology(MCA)
                </span>
              </h3>
              <h5>
                <span className="fees-info-span fees-cost">
                  {selectedCollege.fees.MCA
                    ? selectedCollege.fees.MCA.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                        minimumFractionDigits: 0,
                      })
                    : "-"}
                </span>
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
                  <span>{selectedCollege.name}</span>
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
                  <span>{selectedCollege.Address}</span>
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
                  <span> {selectedCollege.email} </span>
                </h4>
              </div>
            </div>
            <div className="button-to-webite">
              <a target="_blank" href={selectedCollege.website}>
                <button
                  style={{
                    backgroundColor: "#FFD233",
                    padding: "0.5rem 0.5rem",
                    border: "1px solid #000",
                    borderRadius: "0.5rem",
                  }}
                >
                  Go To College Website
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="institute-rating container mx-auto mt-8 mb-2">
          <div className="left-rating">
            <div className="rating-img">
              <img src={Rating} alt="" srcset="" />
            </div>
            <div className="rating-detail">
              <h5>
                <span style={{ fontSize: "0.9rem", color: "#444" }}>
                  {selectedCollege.name}
                </span>
              </h5>
              <h1>
                <span style={{ fontSize: "1.5rem" }}>
                  Students Rating And Review
                </span>
              </h1>
            </div>
          </div>
          <div className="right-rating">
            <div className="rating-svg">
              <img src={Star} alt="" srcset="" />
              <h1>
                <span>{selectedCollege.ratings.toFixed(1)}</span>/5
              </h1>
            </div>
          </div>
        </div>
        <div
          onClick={getModal}
          className="addyourreview container mx-auto mb-8"
        >
          {" "}
          <div>
            <img
              style={{ width: "45px", marginLeft: "2rem" }}
              src="https://img.icons8.com/?size=512&id=48129&format=png"
              alt=""
            />
          </div>
          <div style={{ fontSize: "1.2rem" }}>Add your Review</div>
        </div>

        <button
          ref={ref}
          style={{ display: "none" }}
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add your Review
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="">
                {[...Array(5)].map((star, index) => {
                  const currentRating = index + 1;
                  return (
                    <label key={index}>
                      <input
                        type="radio"
                        name="rating"
                        value={currentRating}
                        onClick={() => setRating(currentRating)}
                      />
                      <FaStar
                        className="stars"
                        size={20}
                        color={
                          currentRating <= (hover || rating)
                            ? "#ffc107"
                            : "#e4e5e9"
                        }
                        onMouseEnter={() => setHover(currentRating)}
                        onMouseLeave={() => setHover(null)}
                      />
                    </label>
                  );
                })}

                <form action="">
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">
                      Write a review
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      value={comment}
                      onChange={handleCommentChange}
                      required
                      placeholder="Write a comment..."
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="modal-footer">
                    <button
                      ref={ref1}
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      onClick={handleSubmit}
                      type="button"
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {selectedCollege.reviews.length > 0 ? (
          selectedCollege.reviews.map((review, index) => (
            <div key={index}>
              <div className="reviews container mx-auto mt-3">
                <div className="top">
                  <div className="img">
                    <img src={Profile} alt="" />
                  </div>
                  <div className="right-star">
                    <div className="name">{review.name}</div>
                    <div className="mix-right">
                      <div className="star-rating">
                        {Array.from(
                          {
                            length: Math.floor(
                              selectedCollege.ratings.toFixed(1)
                            ),
                          },
                          (_, i) => (
                            <span className="star" key={i}></span>
                          )
                        )}
                      </div>
                      <div style={{ fontSize: "0.8rem" }}>
                        {" "}
                        ({review.rating})
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom">{review.comment}</div>
              </div>
            </div>
          ))
        ) : (
          <div className="reviews container mx-auto mt-6">No reviews</div>
        )}
      </div>
    </div>
  );
};

export default Institute;
