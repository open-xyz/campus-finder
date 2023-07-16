import React, { useEffect, useState } from "react";
import "./College.css";
import Clear from "./collegeImages/clear.svg";
import Location from "./collegeImages/location.svg";
import Dot from "./collegeImages/dot.svg";
import Search from "./collegeImages/search.svg";

export default function College() {
  let colleges = [
    {
      Name: "Viva Institute of Technology",
      Location: "palghar, Maharashtra",
      Ownership: "Private",
      "University or Autonomous": "Affiliated with the University of Mumbai",
      "About College":
        "Viva Institute of Technology is a private engineering college located in Mumbai, Maharashtra, India. It is affiliated with the University of Mumbai.",
      Exams: ["MHT CET", "JEE Main"],
      "Course Offered": [
        "75000",
        "Course: ME, Fees: 85000",
        "Course: MCA, Fees: 95000",
      ],
      Specializations: [
        "Computer",
        "Mechanical",
        "Electrical",
        "Electronics",
        "IT",
      ],
      Salary: "12.00 Lakh",
      "College Address":
        "Shirgaon, Post: Ghodbunder Road, Virar (W), Palghar, Maharashtra - 401303, India",
      Phone: "+91-250-2480052",
      Email: "admissions@viva-technology.org",
      "College Link": "https://www.viva-technology.org/",
      "Student Review": {
        Overall: 4.0,
        Placement: 4.1,
        Infrastructure: 3.8,
        Date: "2023-07-11",
      },
      Rating: 4.0,
    },
    {
      Name: "Theem College of Engineering",
      Location: "palghar, Maharashtra",
      Ownership: "Public",
      "University or Autonomous": "Affiliated with the University of Mumbai",
      "About College":
        "Theem College of Engineering is a Government engineering college located in palghar, Maharashtra, India. It is affiliated with the University of Mumbai.",
      Exams: ["MHT CET", "JEE Main"],
      "Course Offered": [
        "64,000",
        "Course: ME, Fees: 60,000",
        "Course: MCA, Fees: 10000",
      ],
      Specialization: [
        "Computer",
        "Mechanical",
        "Electrical",
        "Electronics",
        "IT",
      ],
      Salary: "12.00 Lakh",
      "College Address":
        "Village Betegaon, Chilhar Road, Boisar (E), Palghar - 401501",
      Phone: "0252) 284909, 284926",
      Email: "admissions@stfrancisengineering.ac.in",
      "College Link": "http://theemcoe.org",
      "Student Review": {
        Overall: 4.0,
        Placement: 3.5,
        Infrastructure: 4.0,
        Date: "2023-07-11",
      },
      Rating: 3.8,
    },
    {
      Name: "St. John College of Engineering and Management",
      Location: "palghar, Maharashtra",
      Ownership: "Private",
      "University or Autonomous": "Affiliated with the University of palghar",
      "About College":
        "St. John College of Engineering and Management is a private engineering college located in Mumbai, Maharashtra, India. It is affiliated with the University of Mumbai.",
      Exams: ["MHT CET", "JEE Main"],
      "Course Offered": [
        "94,000",
        "Course: MMS, Fees: 160,000",
        "Course: Polytechnic, Fees: 65,000",
      ],
      Specializations: [
        "Computer",
        "Mechanical",
        "Electrical",
        "Electronics",
        "IT",
      ],
      Salary: "12.00 Lakh",
      "College Address":
        " Village Betegaon, Chilhar Road, Boisar (E), Palghar - 401501",
      Phone: "0252) 284909, 284926",
      Email: "admissions@stfrancisengineering.ac.in",
      "College Link": "https://www.sjcem.edu.in/",
      "Student Review": {
        Overall: 4.0,
        Placement: 3.5,
        Infrastructure: 4.0,
        Date: "2023-07-11",
      },
      Rating: 3.8,
    },
    {
      Name: "Sardar Patel Institute of Technology (SPIT)",
      location: "Mumbai, Maharashtra",
      Ownership: "Private",
      "university or Autonomous": "Affiliated with the University of Mumbai",
      "About College":
        "SPIT is a private engineering college located in Mumbai, Maharashtra, India. It is affiliated with the University of Mumbai.",
      Exams: ["MHT CET", "JEE Main"],
      "Course Offered": [
        "70000",
        "Course: ME, Fees: 80000",
        "Course: MCA, Fees: 90000",
      ],
      Specialization: ["computer, mechnical, electrical", "electronics", "IT"],
      Salary: "12.00 Lakh",
      "College Address":
        "Bhavan's Campus, Munshi Nagar, Andheri West, Mumbai - 400058, Maharashtra, India",
      Phone: "+91-22-2670-0862",
      Email: "admissions@spit.ac.in",
      "College Link": "https://www.spit.ac.in/",
      "Student review": {
        Overall: 4.1,
        Placement: 4.3,
        Infrastructure: 4,
        date: "2023-07-11",
      },
      rating: 4.2,
    },
    {
      Name: "Vartak College of Engineering",
      Location: "palghar, Maharashtra",
      Ownership: "Private",
      "University or Autonomous": "Affiliated with the University of Mumbai",
      "About College":
        "Vartak College of Engineering is a private engineering college located in Mumbai, Maharashtra, India. It is affiliated with the University of Mumbai.",
      Exams: ["MHT CET", "JEE Main"],
      "Course Offered": ["121,934", "Course: ME, Fees: 100100"],
      Specialization: ["computer, mechnical, electrical", "electronics", "IT"],
      Salary: "12.00 Lakh",
      "College Address":
        "BK.T. Marg, Vartak College Campus, Vasai Road (W) Palghar - 401202",
      Phone: "0250-2338234, 0250 233 8234",
      Email: "admissions@spit.ac.in",
      "College Link": "https://vcet.edu.in/",
      "Student review": {
        Overall: 4.1,
        Placement: 4.3,
        Infrastructure: 4,
        date: "2023-07-11",
      },
      rating: 4.2,
    },
    {
      Name: "Atharva College of Engineering",
      Location: "Mumbai, Maharashtra",
      Ownership: "Private",
      "University or Autonomous": "Affiliated with the University of Mumbai",
      "About College":
        "Atharva College of Engineering is a private engineering college located in Mumbai, Maharashtra, India. It is affiliated with the University of Mumbai.",
      Exams: ["MHT CET", "JEE Main"],
      "Course Offered": [
        "133926",
        "Course: ME, Fees: 112889",
        "Course: MCA, Fees: 90000",
      ],
      Specialization: [
        "Computer",
        "Mechanical",
        "Electrical",
        "Electronics",
        "IT",
      ],
      Salary: "12.00 Lakh",
      "College Address":
        "Bhavan's Campus, Munshi Nagar, Andheri West, Mumbai - 400058, Maharashtra, India",
      Phone: "+91-22-2670-0862",
      Email: "admissions@atharvaengg.org",
      "College Link": "https://www.atharvaengg.org/",
      "Student Review": {
        Overall: 4.1,
        Placement: 4.3,
        Infrastructure: 4,
        Date: "2023-07-11",
      },
      Rating: 4.2,
    },
    {
      Name: "Thakur College of Engineering",
      Location: "Mumbai, Maharashtra",
      Ownership: "Private",
      "University or Autonomous": "Affiliated with the University of Mumbai",
      "About College":
        "Thakur College of Engineering is a private engineering college located in Mumbai, Maharashtra, India. It is affiliated with the University of Mumbai.",
      Exams: ["MHT CET", "JEE Main"],
      "Course Offered": [
        "158,000 ",
        "Course: ME, Fees: 178,000",
        "Course: MCA, Fees: 158,000",
      ],
      Specialization: [
        "Computer",
        "Mechanical",
        "Electrical",
        "Electronics",
        "IT",
      ],
      Salary: "12.00 Lakh",
      "College Address":
        "A-Block, Thakur Educational Campus, Shyamnarayan Marg, Thakur Village, Kandivali(East) Mumbai - 400101",
      Phone: "022-67308000",
      Email: "admissions@thakurengineering.ac.in",
      "College Link": "https://www.tcetmumbai.in/",
      "Student Review": {
        Overall: 4.3,
        Placement: 4.4,
        Infrastructure: 4.1,
        Date: "2023-07-11",
      },
      Rating: 4.3,
    },
    {
      Name: "St. Francis College of Engineering",
      Location: "Mumbai, Maharashtra",
      Ownership: "Private",
      "University or Autonomous": "Affiliated with the University of Mumbai",
      "About College":
        "St. Francis College of Engineering is a private engineering college located in Mumbai, Maharashtra, India. It is affiliated with the University of Mumbai.",
      Exams: ["MHT CET", "JEE Main"],
      "Course Offered": [
        "132,500",
        "Course: ME, Fees:  100,000",
        "Course: MCA, Fees:  100,000",
      ],
      Specialization: [
        "Computer",
        "Mechanical",
        "Electrical",
        "Electronics",
        "IT",
      ],
      Salary: "12.00 Lakh",
      "College Address":
        "Mount Poinsur, S.V.P. Road, Borivali (West) Mumbai - 400103",
      Phone: "022-28928585",
      Email: "admissions@stfrancisengineering.ac.in",
      "College Link": "https://www.sfit.ac.in/",
      "Student Review": {
        Overall: 4.3,
        Placement: 4.0,
        Infrastructure: 4.1,
        Date: "2023-07-11",
      },
      Rating: 4.1,
    },
    {
      Name: "Rizvi College of Engineering",
      Location: "Mumbai, Maharashtra",
      Ownership: "Private",
      "University or Autonomous": "Affiliated with the University of Mumbai",
      "About College":
        "Rizvi College of Engineering is a private engineering college located in Mumbai, Maharashtra, India. It is affiliated with the University of Mumbai.",
      Exams: ["MHT CET", "JEE Main"],
      "Course Offered": [
        "90,000",
        "Course: ME, Fees: Varies",
        "Course: MCA, Fees: Varies",
      ],
      Specialization: [
        "Computer",
        "Mechanical",
        "Electrical",
        "Electronics",
        "IT",
      ],
      Salary: "12.00 Lakh",
      "College Address":
        "Rizvi Educational Complex, Off Carter Road, Bandra (West), Mumbai - 400050",
      Phone: "022-26052072",
      Email: "admissions@rizvicollege.edu.in",
      "College Link": "http://eng.rizvi.edu.in/",

      "Student Review": {
        Overall: 4.5,
        Placement: 4.2,
        Infrastructure: 4.3,
        Date: "2023-07-11",
      },
      Rating: 4.2,
    },
    {
      Name: "Bharati Vidyapeeth Deemed University",
      Location: "Pune, Maharashtra",
      Ownership: "Public",
      "University or Autonomous": "Autonomous",
      "About College":
        "Bharati Vidyapeeth Deemed University is a prestigious educational institution located in Pune, Maharashtra, India. It is a deemed university recognized by the University Grants Commission (UGC) and offers a wide range of undergraduate and postgraduate programs in various disciplines.",
      Exams: ["BVP CET", "NEET", "MHT CET", "JEE Main", "NATA"],
      "Course Offered": [
        "158000",
        "Course: MCA, Fees: 135,000",
        "Course: M.Tech, Fees: 158,000",
      ],
      Specialization: [
        "Engineering",
        "Medical",
        "Management",
        "Computer Applications",
        "Law",
        "Pharmacy",
      ],
      Salary: "12.00 Lakh",
      "College Address":
        "Bharati Vidyapeeth Bhavan, Lal Bahadur Shastri Marg, Pune - 411030, Maharashtra, India",
      Phone: "+91-20-24407100",
      Email: "admissions@bharatividyapeeth.edu",
      "College Link": "https://www.bvuniversity.edu.in/",
      "Student Review": {
        Overall: 4.5,
        Placement: 4.2,
        Infrastructure: 4.3,
        Date: "2023-07-11",
      },
      Rating: 4.0,
    },
    {
      Name: "DY Patil International University",
      Location: "Pune, Maharashtra",
      Ownership: "Private",
      "University or Autonomous": "Deemed University",
      "About College":
        "DY Patil International University is a renowned private deemed university located in Pune, Maharashtra, India. The university offers a diverse range of undergraduate, postgraduate, and doctoral programs across various fields of study.",
      Exams: ["DYP CET", "NEET", "MHT CET", "JEE Main", "NATA"],
      "Course Offered": [
        "215,000",
        "Course: BBA, Fees: 135,000",
        "Course: M.Tech, Fees: 135,000",
      ],
      Specialization: [
        "Engineering",
        "Medical",
        "Management",
        "Computer Applications",
        "Law",
        "Pharmacy",
      ],
      Salary: "12.00 Lakh",
      "College Address": "Sector 29, Nigdi Pradhikaran, Akurdi Pune - 411044",
      Phone: "9071123434, 9071123404",
      Email: "admissions@bharatividyapeeth.edu",
      "College Link": "https://www.dypiu.ac.in/",
      "Student Review": {
        Overall: 4.5,
        Placement: 4.2,
        Infrastructure: 4.3,
        Date: "2023-07-11",
      },
      Rating: 4.4,
    },

    {
      Name: "Rajgad Dnyanpeeth Technical Campus",
      Location: "Pune, Maharashtra",
      Ownership: "Private",
      "University or Autonomous":
        "Affiliated with the Savitribai Phule Pune University",
      "About College":
        "Rajgad Dnyanpeeth Technical Campus is a private technical campus located in Pune, Maharashtra, India. It is affiliated with the Savitribai Phule Pune University.",
      Exams: ["MHT CET", "JEE Main"],
      "Course Offered": [
        "80000",
        "Course: ME, Fees: 90000",
        "Course: MBA, Fees: 100000",
      ],
      Specialization: [
        "Computer",
        "Mechanical",
        "Electrical",
        "Electronics",
        "Civil",
      ],
      "College Address":
        "Rajgad Dnyanpeeth Campus, Velhe, Pune - 412205, Maharashtra, India",
      Phone: "+91-20-2447-1122",
      Email: "info@rajgad.edu.in",
      "College Link": "https://www.rajgad.edu.in/",
      "Student Review": {
        Overall: 4.2,
        Placement: 4.1,
        Infrastructure: 4.3,
        Date: "2023-07-11",
      },
      Rating: 4.2,
    },
  ];

  // const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedOwnership, setSelectedOwnership] = useState("");
  const [selectedFees, setSelectedFees] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [selectedExam, setSelectedExam] = useState("");
  const [isOwnershipExpanded, setIsOwnershipExpanded] = useState(true);
  const [isLocationExpanded, setIsLocationExpanded] = useState(true);
  const [isFeesExpanded, setIsFeesExpanded] = useState(true);
  const [isSpecializationExpanded, setIsSpecializationExpanded] =
    useState(true);
  const [isExamExpanded, setIsExamExpanded] = useState(true);
  const [filteredColleges, setFilteredColleges] = useState(colleges);
  const [searchQuery, setSearchQuery] = useState("");
  // const filterColleges = () => {
  //   let filtered = colleges;

  //   if (selectedLocation.length > 0) {
  //     filtered = filtered.filter(
  //       (college) =>
  //         college.Location &&
  //         college.Location.toLowerCase().includes(
  //           selectedLocation.toLowerCase()
  //         )
  //     );
  //   }

  //   setFilteredColleges(filtered);
  // };

  // const handleLocationChange = (event) => {
  //   const { value } = event.target;
  //   setSelectedLocation(value);
  // };

  // useEffect(() => {
  //   filterColleges();
  // }, [selectedLocation]);

  const filterColleges = () => {
    let filtered = colleges;

    // Filter by location
    if (selectedLocation.length > 0) {
      filtered = filtered.filter(
        (college) =>
          college.Location &&
          college.Location.toLowerCase().includes(
            selectedLocation.toLowerCase()
          )
      );
    }

    // Filter by fees range
    if (selectedFees.length > 0) {
      filtered = filtered.filter((college) => {
        if (college["Course Offered"]) {
          const courseFees = parseInt(
            college["Course Offered"][0].replace(/,/g, "")
          );
          const [lowerRange, upperRange] = selectedFees.split("-");

          if (selectedFees === "1 Lakh") {
            return courseFees < 100000;
          } else if (selectedFees === "6 Lakh") {
            return courseFees > 600000;
          } else if (upperRange) {
            return (
              courseFees >= parseInt(lowerRange) * 100000 &&
              courseFees <= parseInt(upperRange) * 100000
            );
          }
        }
        return false;
      });
    }

    //Filter by ownership
    if (selectedOwnership.length > 0) {
      filtered = filtered.filter(
        (college) =>
          college.Ownership &&
          college.Ownership.toLowerCase() === selectedOwnership.toLowerCase()
      );
    }

    // Filter by search query
    if (searchQuery.length > 0) {
      filtered = filtered.filter((college) =>
        college.Name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredColleges(filtered);
  };

  const handleLocationChange = (event) => {
    const { value } = event.target;
    setSelectedLocation(value);
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };
  const handleFeesChange = (event) => {
    const { value } = event.target;
    setSelectedFees(value);
    console.log(value);
  };

  useEffect(() => {
    filterColleges();
  }, [selectedLocation, selectedFees, selectedOwnership]);

  const handleOwnershipChange = (event) => {
    const { value } = event.target;
    setSelectedOwnership(value);
    console.log(value);
  };

  // const handleOwnershipChange = (event) => {
  //   const { value } = event.target;
  //   setSelectedOwnership((prevSelected) =>
  //     prevSelected === value ? "" : value
  //   );
  // };

  // const handleFeesChange = (event) => {
  //   const { value } = event.target;
  //   setSelectedFees((prevSelected) => (prevSelected === value ? "" : value));
  // };

  const handleSpecializationChange = (event) => {
    const { value } = event.target;
    setSelectedSpecialization((prevSelected) =>
      prevSelected === value ? "" : value
    );
  };

  const handleExamChange = (event) => {
    const { value } = event.target;
    setSelectedExam((prevSelected) => (prevSelected === value ? "" : value));
  };

  const toggleOwnershipExpand = () => {
    setIsOwnershipExpanded((prevState) => !prevState);
  };

  const toggleLocationExpand = () => {
    setIsLocationExpanded((prevState) => !prevState);
  };

  const toggleFeesExpand = () => {
    setIsFeesExpanded((prevState) => !prevState);
  };

  const toggleSpecializationExpand = () => {
    setIsSpecializationExpanded((prevState) => !prevState);
  };

  const toggleExamExpand = () => {
    setIsExamExpanded((prevState) => !prevState);
  };

  const renderSelectedFilters = () => {
    const selectedFilters = [];

    if (selectedOwnership) {
      selectedFilters.push(
        <span
          className="selected-option"
          onClick={() => setSelectedOwnership("")}
          key="ownership"
        >
          {selectedOwnership}
          <span className="clear-option">x</span>
        </span>
      );
    }

    if (selectedLocation) {
      selectedFilters.push(
        <span
          className="selected-option"
          onClick={() => setSelectedLocation("")}
          key="location"
        >
          {selectedLocation}
          <span className="clear-option">x</span>
        </span>
      );
    }

    if (selectedFees) {
      selectedFilters.push(
        <span
          className="selected-option"
          onClick={() => setSelectedFees("")}
          key="fees"
        >
          {selectedFees}
          <span className="clear-option">x</span>
        </span>
      );
    }

    if (selectedSpecialization) {
      selectedFilters.push(
        <span
          className="selected-option"
          onClick={() => setSelectedSpecialization("")}
          key="specialization"
        >
          {selectedSpecialization}
          <span className="clear-option">x</span>
        </span>
      );
    }

    if (selectedExam) {
      selectedFilters.push(
        <span
          className="selected-option"
          onClick={() => setSelectedExam("")}
          key="exam"
        >
          {selectedExam}
          <span className="clear-option">x</span>
        </span>
      );
    }

    return selectedFilters.length > 0 ? (
      selectedFilters
    ) : (
      <div>No filters selected.</div>
    );
  };

  const clearAll = () => {
    setSelectedLocation("");
    setSelectedOwnership("");
    setSelectedFees("");
    setSelectedSpecialization("");
    setSelectedExam("");
    setIsOwnershipExpanded(true);
    setIsLocationExpanded(true);
    setIsFeesExpanded(true);
    setIsSpecializationExpanded(true);
    setIsExamExpanded(true);
  };

  return (
    <div className="main">
      <div className="college-component">
        <div className="college-filter">
          <div className="filter-component">
            <div className="filter-text">
              <div className="text">FILTERS</div>

              {selectedOwnership ||
              selectedLocation ||
              selectedFees ||
              selectedSpecialization ||
              selectedExam ? (
                <div onClick={clearAll} className="clear-filters">
                  <div className="clear-button">
                    <div className="clear-text">Clear All</div>
                    <div className="clear-png">
                      <img src={Clear} alt="" />
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="selected-filters">
              {selectedOwnership ||
              selectedLocation ||
              selectedFees ||
              selectedSpecialization ||
              selectedExam ? (
                <div className="selected-filter">
                  <p>Selected Filter</p>
                  <div className="selected-filter-filters">
                    {renderSelectedFilters()}
                  </div>
                </div>
              ) : (
                <div className="no-filters">No filters selected.</div>
              )}
            </div>

            <div className="filters">
              <div className="ownership">
                <div
                  className={`dropdown ${
                    isOwnershipExpanded ? "expanded" : ""
                  }`}
                >
                  <div>
                    <div className="filter-heading">
                      <label htmlFor="ownership">Ownership</label>
                      <button
                        className="toggle-button"
                        onClick={toggleOwnershipExpand}
                      >
                        {isOwnershipExpanded ? "▲" : "▼"}
                      </button>
                    </div>
                    {isOwnershipExpanded && (
                      <div className="options">
                        <div className="option">
                          <input
                            type="checkbox"
                            id="public"
                            name="ownership"
                            value="Public"
                            checked={selectedOwnership === "Public"}
                            onChange={handleOwnershipChange}
                          />
                          <label htmlFor="public" className="checkbox-label">
                            Public
                          </label>
                        </div>
                        <div className="option">
                          <input
                            type="checkbox"
                            id="private"
                            name="ownership"
                            value="Private"
                            checked={selectedOwnership === "Private"}
                            onChange={handleOwnershipChange}
                          />
                          <label htmlFor="private" className="checkbox-label">
                            Private
                          </label>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="line"></div>
              <div className="location">
                <div>
                  <div
                    className={`dropdown ${
                      isLocationExpanded ? "expanded" : ""
                    }`}
                  >
                    <div>
                      <div className="filter-heading">
                        <label htmlFor="location">Location:</label>
                        <button
                          className="toggle-button"
                          onClick={toggleLocationExpand}
                        >
                          {isLocationExpanded ? "▲" : "▼"}
                        </button>
                      </div>
                      {isLocationExpanded && (
                        <div className="options">
                          <div className="option">
                            <input
                              type="checkbox"
                              id="mumbai"
                              name="location"
                              value="Mumbai"
                              checked={selectedLocation === "Mumbai"}
                              onChange={handleLocationChange}
                            />
                            <label htmlFor="mumbai" className="checkbox-label">
                              Mumbai
                            </label>
                          </div>
                          <div className="option">
                            <input
                              type="checkbox"
                              id="pune"
                              name="location"
                              value="Pune"
                              checked={selectedLocation === "Pune"}
                              onChange={handleLocationChange}
                            />
                            <label htmlFor="pune" className="checkbox-label">
                              Pune
                            </label>
                          </div>
                          <div className="option">
                            <input
                              type="checkbox"
                              id="palghar"
                              name="location"
                              value="Palghar"
                              checked={selectedLocation === "Palghar"}
                              onChange={handleLocationChange}
                            />
                            <label htmlFor="palghar" className="checkbox-label">
                              Palghar
                            </label>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="line"></div>
              <div className="fees">
                <div>
                  <div
                    className={`dropdown ${isFeesExpanded ? "expanded" : ""}`}
                  >
                    <div>
                      <div className="filter-heading">
                        <label htmlFor="fees">Fees</label>
                        <button
                          className="toggle-button"
                          onClick={toggleFeesExpand}
                        >
                          {isFeesExpanded ? "▲" : "▼"}
                        </button>
                      </div>
                      {isFeesExpanded && (
                        <div className="options">
                          <div className="option">
                            <input
                              type="checkbox"
                              id="fees-1"
                              name="fees"
                              value="1 Lakh"
                              checked={selectedFees === "1 Lakh"}
                              onChange={handleFeesChange}
                            />
                            <label htmlFor="fees-1" className="checkbox-label">
                              &lt; 1 Lakh
                            </label>
                          </div>
                          <div className="option">
                            <input
                              type="checkbox"
                              id="fees-2"
                              name="fees"
                              value="1-2 Lakh"
                              checked={selectedFees === "1-2 Lakh"}
                              onChange={handleFeesChange}
                            />
                            <label htmlFor="fees-2" className="checkbox-label">
                              1-2 Lakh
                            </label>
                          </div>
                          <div className="option">
                            <input
                              type="checkbox"
                              id="fees-3"
                              name="fees"
                              value="2-3 Lakh"
                              checked={selectedFees === "2-3 Lakh"}
                              onChange={handleFeesChange}
                            />
                            <label htmlFor="fees-3" className="checkbox-label">
                              2-3 Lakh
                            </label>
                          </div>
                          <div className="option">
                            <input
                              type="checkbox"
                              id="fees-4"
                              name="fees"
                              value="3-5 Lakh"
                              checked={selectedFees === "3-5 Lakh"}
                              onChange={handleFeesChange}
                            />
                            <label htmlFor="fees-4" className="checkbox-label">
                              3-5 Lakh
                            </label>
                          </div>
                          <div className="option">
                            <input
                              type="checkbox"
                              id="fees-5"
                              name="fees"
                              value="6 Lakh"
                              checked={selectedFees === "6 Lakh"}
                              onChange={handleFeesChange}
                            />
                            <label htmlFor="fees-5" className="checkbox-label">
                              &gt; 6 Lakh
                            </label>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="line"></div>
              <div className="specialization">
                <div>
                  <div
                    className={`dropdown ${
                      isSpecializationExpanded ? "expanded" : ""
                    }`}
                  >
                    <div>
                      <div className="filter-heading">
                        <label htmlFor="specialization">Specialization:</label>
                        <button
                          className="toggle-button"
                          onClick={toggleSpecializationExpand}
                        >
                          {isSpecializationExpanded ? "▲" : "▼"}
                        </button>
                      </div>
                      {isSpecializationExpanded && (
                        <div className="options">
                          <div className="option">
                            <input
                              type="checkbox"
                              id="computer"
                              name="specialization"
                              value="Computer"
                              checked={selectedSpecialization === "Computer"}
                              onChange={handleSpecializationChange}
                            />
                            <label
                              htmlFor="computer"
                              className="checkbox-label"
                            >
                              Computer
                            </label>
                          </div>
                          <div className="option">
                            <input
                              type="checkbox"
                              id="mechanical"
                              name="specialization"
                              value="Mechanical"
                              checked={selectedSpecialization === "Mechanical"}
                              onChange={handleSpecializationChange}
                            />
                            <label
                              htmlFor="mechanical"
                              className="checkbox-label"
                            >
                              Mechanical
                            </label>
                          </div>
                          <div className="option">
                            <input
                              type="checkbox"
                              id="electrical"
                              name="specialization"
                              value="Electrical"
                              checked={selectedSpecialization === "Electrical"}
                              onChange={handleSpecializationChange}
                            />
                            <label
                              htmlFor="electrical"
                              className="checkbox-label"
                            >
                              Electrical
                            </label>
                          </div>
                          <div className="option">
                            <input
                              type="checkbox"
                              id="electronics"
                              name="specialization"
                              value="Electronics"
                              checked={selectedSpecialization === "Electronics"}
                              onChange={handleSpecializationChange}
                            />
                            <label
                              htmlFor="electronics"
                              className="checkbox-label"
                            >
                              Electronics
                            </label>
                          </div>
                          <div className="option">
                            <input
                              type="checkbox"
                              id="it"
                              name="specialization"
                              value="IT"
                              checked={selectedSpecialization === "IT"}
                              onChange={handleSpecializationChange}
                            />
                            <label htmlFor="it" className="checkbox-label">
                              IT
                            </label>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="line"></div>
              <div className="exam">
                <div>
                  <div
                    className={`dropdown ${isExamExpanded ? "expanded" : ""}`}
                  >
                    <div>
                      <div className="filter-heading">
                        <label htmlFor="exam">Exam:</label>
                        <button
                          className="toggle-button"
                          onClick={toggleExamExpand}
                        >
                          {isExamExpanded ? "▲" : "▼"}
                        </button>
                      </div>
                      {isExamExpanded && (
                        <div className="options">
                          <div className="option">
                            <input
                              type="checkbox"
                              id="mht-cet"
                              name="exam"
                              value="MHT CET"
                              checked={selectedExam === "MHT CET"}
                              onChange={handleExamChange}
                            />
                            <label htmlFor="mht-cet" className="checkbox-label">
                              MHT CET
                            </label>
                          </div>
                          <div className="option">
                            <input
                              type="checkbox"
                              id="jee"
                              name="exam"
                              value="JEE"
                              checked={selectedExam === "JEE"}
                              onChange={handleExamChange}
                            />
                            <label htmlFor="jee" className="checkbox-label">
                              JEE
                            </label>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-college">
          <div className="search">
            <div className="heading">Search Colleges</div>
            <div className="inputs">
              <div>
                <img src={Search} alt="" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    filterColleges();
                  }
                }}
                placeholder="Search..."
              />
              <button onClick={filterColleges}>Search</button>
            </div>
          </div>

          <div className="college-list">
            {filteredColleges.length > 0 ? (
              filteredColleges.map((college, index) => (
                <div className="college-card" key={index}>
                  <div className="rank">
                    <div className="rank-ranks">{index + 1}</div>
                    <div className="rank-ranking-institute">
                      <div>NIRF '23</div>
                      <div>(All India)</div>
                    </div>
                  </div>
                  <div className="image">
                    <img
                      src="https://images.shiksha.com/mediadata/images/1605086820phpSFQlAR.jpg"
                      alt="college_logo"
                    />
                  </div>
                  <div className="collge-info">
                    <div className="collge-name">{college.Name}</div>
                    <div className="info-two">
                      <div className="locations">
                        <div className="img">
                          <img src={Location} alt="location" />
                        </div>
                        <div className="address">{college.Location}</div>
                      </div>
                      <div className="verticalline">|</div>
                      <div className="rating">
                        <div className="rate">{college.Rating}</div>
                        <div className="star-rating">
                          {Array.from(
                            { length: Math.floor(college.Rating) },
                            (_, i) => (
                              <span className="star" key={i}></span>
                            )
                          )}
                        </div>
                      </div>
                      <div className="verticalline">|</div>
                      <div className="college-fees">
                        <span>Fees:</span> ₹ {college["Course Offered"][0]}
                      </div>
                    </div>
                    <div className="info-three">
                      <div className="salary">
                        <span>Salary:</span> ₹ {college.Salary}
                      </div>
                    </div>
                    <div className="info-four">
                      <div className="admission">Admission</div>
                      <div className="dot">
                        <img src={Dot} alt="dot" />
                      </div>
                      <div className="coursesandfees">Courses & Fees</div>
                      <div className="dot">
                        <img src={Dot} alt="dot" />
                      </div>
                      <div className="placement">Placement</div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No colleges found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
