import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./CollegeSkeleton.css";

export default function SingleCollegeSkeleton() {
  return (
    <div className="skeleton-mai">
      {" "}
      <Skeleton
        style={{ width: "100%", marginTop: "2rem", zIndex: "-100" }}
        height={250}
      />
      <Skeleton
        style={{ width: "100%", marginTop: "2rem", zIndex: "-100" }}
        height={100}
      />
      <Skeleton
        style={{ width: "100%", marginTop: "2rem", zIndex: "-100" }}
        height={250}
      />
      <Skeleton
        style={{ width: "100%", marginTop: "2rem", zIndex: "-100" }}
        height={250}
      />
      <Skeleton
        style={{ width: "100%", marginTop: "2rem", zIndex: "-100" }}
        height={250}
      />
    </div>
  );
}
