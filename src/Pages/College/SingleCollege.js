import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCollegeContext } from "../../context/collegeContext";

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
    <div>
      <h2>{selectedCollege.Name}</h2>
      {/* Render the details of the selected college */}
      {/* You can access the properties of the selected college, such as selectedCollege.Location, selectedCollege.Rating, etc. */}
    </div>
  );
}
