import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./CollegeSkeleton.css";

export default function CollegeSkeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((item) => (
      <div className="skeleton-main">
        <div className="skeleton-left">
          <Skeleton style={{ zIndex: "0" }} width={60} height={100} />
        </div>
        <div className="skeleton-middle">
          <Skeleton style={{ zIndex: "0" }} width={60} height={100} />
        </div>
        <div className="skeleton-right">
          <Skeleton style={{ zIndex: "0", marginBottom: "0.5rem" }} count={4} />
        </div>
      </div>
    ));
}
