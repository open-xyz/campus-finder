import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Investor.css";
import Cookies from "js-cookie";

function Investor() {
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
      collegeId: "64b551d6c52496f8e49ebb50",
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
  };

  return (
    <>
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
                  currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                }
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Write a review</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Write a comment..."
            rows="3"
          ></textarea>
        </div>
        <p>Your rating is {rating}</p>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default Investor;
