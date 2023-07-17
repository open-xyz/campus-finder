import React, { useEffect, useState } from "react";
import "../School/School.css";
import "../Home/components/Hero/Hero.css";
import "../College/College.css";
import Clear from "../College/collegeImages/clear.svg";
import schoollogo from "./image 10.png";
import Search from "../College/collegeImages/search.svg";
import { Link } from "react-router-dom";
// import Search from "../Home/components/Hero/HeroImages/search.svg";
const School = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedOwnership, setSelectedOwnership] = useState("");
  const [selectedFees, setSelectedFees] = useState("");
  const [selectedBoard, setselectedBoard] = useState("");
  const [isOwnershipExpanded, setIsOwnershipExpanded] = useState(true);
  const [isLocationExpanded, setIsLocationExpanded] = useState(true);
  const [isFeesExpanded, setIsFeesExpanded] = useState(true);
  const [isBoadrExpanded, setIsBoadrExpanded] = useState(true);
  const [filteredSchools, setFilteredSchools] = useState(School);
  const [searchQuery, setSearchQuery] = useState("");

  const filterSchools = () => {
    let filtered = School;

    // Filter by location
    if (selectedLocation.length > 0) {
      filtered = filtered.filter(
        (school) =>
          school.Location &&
          school.Location.toLowerCase().includes(selectedLocation.toLowerCase())
      );
    }

    // Filter by fees range
    if (selectedFees.length > 0) {
      filtered = filtered.filter((school) => {
        if (school["Course Offered"]) {
          const courseFees = parseInt(
            school["Course Offered"][0].replace(/,/g, "")
          );
          const [lowerRange, upperRange] = selectedFees.split("-");

          if (selectedFees === "below 10K") {
            return courseFees < 10000;
          } else if (selectedFees === "70K - 1L") {
            return courseFees > 100000;
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
        (school) =>
          school.Ownership &&
          school.Ownership.toLowerCase() === selectedOwnership.toLowerCase()
      );
    }

    // Filter by search query
    if (searchQuery.length > 0) {
      filtered = filtered.filter((school) =>
        school.Name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredSchools(filtered);
  };

  useEffect(() => {
    filterSchools();
  }, [selectedLocation, selectedFees, selectedOwnership]);

  const handleLocationChange = (event) => {
    const { value } = event.target;
    setSelectedLocation((prevSelected) =>
      prevSelected === value ? "" : value
    );
  };

  const handleOwnershipChange = (event) => {
    const { value } = event.target;
    setSelectedOwnership((prevSelected) =>
      prevSelected === value ? "" : value
    );
  };
  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  const handleFeesChange = (event) => {
    const { value } = event.target;
    setSelectedFees((prevSelected) => (prevSelected === value ? "" : value));
  };

  const handleBoardChange = (event) => {
    const { value } = event.target;
    setselectedBoard((prevSelected) => (prevSelected === value ? "" : value));
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

  const toggleBoardExpand = () => {
    setIsBoadrExpanded((prevState) => !prevState);
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

    if (selectedBoard) {
      selectedFilters.push(
        <span
          className="selected-option"
          onClick={() => setselectedBoard("")}
          key="specialization"
        >
          {selectedBoard}
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
    setselectedBoard("");
    setIsOwnershipExpanded(false);
    setIsLocationExpanded(false);
    setIsFeesExpanded(false);
    setIsBoadrExpanded(false);
  };

  return (
    <div>
      <div className="main">
        <div className="school-section">
          <div className="school-filter">
            {/* <div className="selected-options"> */}
              {/* {selectedOwnership && (
                <span
                  className="selected-option"
                  onClick={() => setSelectedOwnership("")}
                >
                  {selectedOwnership}
                  <span className="clear-option">x</span>
                </span>
              )}
              {selectedLocation && (
                <span
                  className="selected-option"
                  onClick={() => setSelectedLocation("")}
                >
                  {selectedLocation}
                  <span className="clear-option">x</span>
                </span>
              )}
              {selectedFees && (
                <span
                  className="selected-option"
                  onClick={() => setSelectedFees("")}
                >
                  {selectedFees}
                  <span className="clear-option">x</span>
                </span>
              )}
              {selectedBoard && (
                <span
                  className="selected-option"
                  onClick={() => setselectedBoard("")}
                >
                  {selectedBoard}
                  <span className="clear-option">x</span>
                </span>
              )}
            </div> */}
            <div className="clear-filters">
              {selectedOwnership ||
              selectedLocation ||
              selectedFees ||
              selectedBoard ? (
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
            <div className="filter-component">
              <div className="filter-text">
                <div className="text">FILTERS</div>
                <div className="clear-button">
                  <div className="clear-text">Clear All</div>
                  <div className="clear-png">
                    <img src={Clear} alt="" />
                  </div>
                </div>
              </div>
              <div className="filters">
                <div className="ownership">
                  <div
                    className={`dropdown ${
                      isOwnershipExpanded ? "expanded" : ""
                    }`}
                  >
                    <label htmlFor="ownership">Ownership:</label>
                    <div>
                      <button
                        className="toggle-button"
                        onClick={toggleOwnershipExpand}
                      >
                        {isOwnershipExpanded ? "▲" : "▼"}
                      </button>
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
                      <label htmlFor="location">Location:</label>
                      <div>
                        <button
                          className="toggle-button"
                          onClick={toggleLocationExpand}
                        >
                          {isLocationExpanded ? "▲" : "▼"}
                        </button>
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
                              <label
                                htmlFor="mumbai"
                                className="checkbox-label"
                              >
                                Mumbai
                              </label>
                            </div>
                            <div className="option">
                              <input
                                type="checkbox"
                                id="Vasai"
                                name="location"
                                value="Vasai"
                                checked={selectedLocation === "Vasai"}
                                onChange={handleLocationChange}
                              />
                              <label htmlFor="Vasai" className="checkbox-label">
                                Vasai
                              </label>
                            </div>
                            <div className="option">
                              <input
                                type="checkbox"
                                id="Virar"
                                name="location"
                                value="Virar"
                                checked={selectedLocation === "Virar"}
                                onChange={handleLocationChange}
                              />
                              <label htmlFor="Virar" className="checkbox-label">
                                Virar
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
                      <label htmlFor="fees">Fees:</label>
                      <div>
                        <button
                          className="toggle-button"
                          onClick={toggleFeesExpand}
                        >
                          {isFeesExpanded ? "▲" : "▼"}
                        </button>
                        {isFeesExpanded && (
                          <div className="options">
                            <div className="option">
                              <input
                                type="checkbox"
                                id="fees-1"
                                name="fees"
                                value="below 10K"
                                checked={selectedFees === "below 10K"}
                                onChange={handleFeesChange}
                              />
                              <label
                                htmlFor="fees-1"
                                className="checkbox-label"
                              >
                                below 10K
                              </label>
                            </div>
                            <div className="option">
                              <input
                                type="checkbox"
                                id="fees-2"
                                name="fees"
                                value="10K - 30K"
                                checked={selectedFees === "10K - 30K"}
                                onChange={handleFeesChange}
                              />
                              <label
                                htmlFor="fees-2"
                                className="checkbox-label"
                              >
                                10K - 30K
                              </label>
                            </div>
                            <div className="option">
                              <input
                                type="checkbox"
                                id="fees-3"
                                name="fees"
                                value="30K - 50K"
                                checked={selectedFees === "30K - 50K"}
                                onChange={handleFeesChange}
                              />
                              <label
                                htmlFor="fees-3"
                                className="checkbox-label"
                              >
                                30K - 50K
                              </label>
                            </div>
                            <div className="option">
                              <input
                                type="checkbox"
                                id="fees-4"
                                name="fees"
                                value="50K - 70K"
                                checked={selectedFees === "50K - 70K"}
                                onChange={handleFeesChange}
                              />
                              <label
                                htmlFor="fees-4"
                                className="checkbox-label"
                              >
                                50K - 70K
                              </label>
                            </div>
                            <div className="option">
                              <input
                                type="checkbox"
                                id="fees-5"
                                name="fees"
                                value="70K - 1L"
                                checked={selectedFees === "70K - 1L"}
                                onChange={handleFeesChange}
                              />
                              <label
                                htmlFor="fees-5"
                                className="checkbox-label"
                              >
                                70K - 1L
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
                        isBoadrExpanded ? "expanded" : ""
                      }`}
                    >
                      <label htmlFor="specialization">Board:</label>
                      <div>
                        <button
                          className="toggle-button"
                          onClick={toggleBoardExpand}
                        >
                          {isBoadrExpanded ? "▲" : "▼"}
                        </button>
                        {isBoadrExpanded && (
                          <div className="options">
                            <div className="option">
                              <input
                                type="checkbox"
                                id="State"
                                name="specialization"
                                value="State"
                                checked={selectedBoard === "State"}
                                onChange={handleBoardChange}
                              />
                              <label htmlFor="State" className="checkbox-label">
                                State
                              </label>
                            </div>
                            <div className="option">
                              <input
                                type="checkbox"
                                id="ICSE"
                                name="specialization"
                                value="ICSE"
                                checked={selectedBoard === "ICSE"}
                                onChange={handleBoardChange}
                              />
                              <label htmlFor="ICSE" className="checkbox-label">
                                ICSE
                              </label>
                            </div>
                            <div className="option">
                              <input
                                type="checkbox"
                                id="CBSC"
                                name="specialization"
                                value="CBSC"
                                checked={selectedBoard === "CBSC"}
                                onChange={handleBoardChange}
                              />
                              <label htmlFor="CBSC" className="checkbox-label">
                                CBSC
                              </label>
                            </div>
                            <div className="option">
                              <input
                                type="checkbox"
                                id="IG"
                                name="specialization"
                                value="IG"
                                checked={selectedBoard === "IG"}
                                onChange={handleBoardChange}
                              />
                              <label htmlFor="IG" className="checkbox-label">
                                IG
                              </label>
                            </div>
                            <div className="option">
                              <input
                                type="checkbox"
                                id="Other"
                                name="specialization"
                                value="Other"
                                checked={selectedBoard === "Other"}
                                onChange={handleBoardChange}
                              />
                              <label htmlFor="Other" className="checkbox-label">
                                Other
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
          <div className="school-main">
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
                      filterSchools();
                    }
                  }}
                  placeholder="Search..."
                />
                <button onClick={filterSchools}>Search</button>
              </div>
            </div>
            <div className="school-list">
            {/* {filterSchools.length > 0 ? (
              filterSchools.map((school, index) => (
            <div className="school-result" key={index}>

              <div className="school-result__rank">
                <div className="rank__number">{index + 1}</div>
                <div className="rank__city">(Mumbai)</div>
              </div>
              <div className="school-result__img">
                <img src={schoollogo} alt="School logo" srcset="" />
              </div>
              <div className="school-result__details">
                <div className="school-name">
                  <span>{school.Name}</span>
                </div>
                <div className="school-shortdetail">
                  <div className="shortdetal__location">
                    <i class="fa-solid fa-location-dot"></i>
                    <span>{school.Location}</span>
                  </div>
                  <div className="seprator"></div>
                  <div className="school__rating">
                    <span>{school.Rating}</span>
                  </div>
                  <div className="seprator"></div>
                  <div className="school__fees">
                    <span>Fees :</span> {school[0]}
                  </div>
                </div>
                <div className="school-board">
                  <h1>Board : State , CBSC , ICSC</h1>
                  <div className="visitschool">
                    <button type="button"><Link to={`/schools/${school.name}`}>} Visit School </Link> </button>
                  </div>
                </div>
              </div>
            </div>
            ))
            ) : (
              <p>No colleges found.</p>
            )} */}
            <div className="school-result">
               <div className="school-result__rank">
                 <div className="rank__number">1</div>
                 <div className="rank__city">(Mumbai)</div>
               </div>
               <div className="school-result__img">
                 <img src={schoollogo} alt="School logo" srcset="" />
               </div>
               <div className="school-result__details">
                 <div className="school-name">
                   <span>St Fransis D'Assisi High School</span>
                 </div>
                 <div className="school-shortdetail">
                   <div className="shortdetal__location">
                     <i class="fa-solid fa-location-dot"></i>
                     <span>Borivali, Mumbai</span>
                   </div>
                   <div className="seprator"></div>
                   <div className="school__rating">
                     <span>rating 4</span>
                   </div>
                   <div className="seprator"></div>
                   <div className="school__fees">
                     <span>50K - 1L</span>
                   </div>
                 </div>
                 <div className="school-board">
                   <h1>Board : State , CBSC , ICSC</h1>
                   <div className="visitschool">
                     <button type="button">Visit School</button>
                   </div>
                 </div>
               </div>
             </div>
             <div className="school-result">
               <div className="school-result__rank">
                 <div className="rank__number">1</div>
                 <div className="rank__city">(Mumbai)</div>
               </div>
               <div className="school-result__img">
                 <img src={schoollogo} alt="School logo" srcset="" />
               </div>
               <div className="school-result__details">
                 <div className="school-name">
                   <span>St Fransis D'Assisi High School</span>
                 </div>
                 <div className="school-shortdetail">
                   <div className="shortdetal__location">
                     <i class="fa-solid fa-location-dot"></i>
                     <span>Borivali, Mumbai</span>
                   </div>
                   <div className="seprator"></div>
                   <div className="school__rating">
                     <span>rating 4</span>
                   </div>
                   <div className="seprator"></div>
                   <div className="school__fees">
                     <span>50K - 1L</span>
                   </div>
                 </div>
                 <div className="school-board">
                   <h1>Board : State , CBSC , ICSC</h1>
                   <div className="visitschool">
                     <button type="button">Visit School</button>
                   </div>
                 </div>
               </div>
             </div>
             <div className="school-result">
               <div className="school-result__rank">
                 <div className="rank__number">1</div>
                 <div className="rank__city">(Mumbai)</div>
               </div>
               <div className="school-result__img">
                 <img src={schoollogo} alt="School logo" srcset="" />
               </div>
               <div className="school-result__details">
                 <div className="school-name">
                   <span>St Fransis D'Assisi High School</span>
                 </div>
                 <div className="school-shortdetail">
                   <div className="shortdetal__location">
                     <i class="fa-solid fa-location-dot"></i>
                     <span>Borivali, Mumbai</span>
                   </div>
                   <div className="seprator"></div>
                   <div className="school__rating">
                     <span>rating 4</span>
                   </div>
                   <div className="seprator"></div>
                   <div className="school__fees">
                     <span>50K - 1L</span>
                   </div>
                 </div>
                 <div className="school-board">
                   <h1>Board : State , CBSC , ICSC</h1>
                   <div className="visitschool">
                     <button type="button">Visit School</button>
                   </div>
                 </div>
               </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default School;
