import React from "react";
import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import LeftLogo from "./HeroImages/left.png";
import RightLogo from "./HeroImages/right.png";

export default function Hero() {
  return (
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
          <div className="button">
            <input type="tel" id="phone" name="phone" placeholder="Search..." />
            <button>Search</button>
          </div>
        </div>
        <div className="hero__right">
          <img src={RightLogo} alt="img" />
        </div>
      </div>
    </div>
  );
  return <div></div>;
}
