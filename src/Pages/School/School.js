import React , {useState}from "react";
import "../School/School.css";
import "../Home/components/Hero/Hero.css";
import schoollogo from "./image 10.png"
import Search from "../Home/components/Hero/HeroImages/search.svg";
const School = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedOwnership, setSelectedOwnership] = useState("");
  const [selectedFees, setSelectedFees] = useState("");
  const [selectedBoard, setselectedBoard] = useState("");
  const [selectedExam, setSelectedExam] = useState("");
  const [isOwnershipExpanded, setIsOwnershipExpanded] = useState(true);
  const [isLocationExpanded, setIsLocationExpanded] = useState(true);
  const [isFeesExpanded, setIsFeesExpanded] = useState(true);
  const [isBoadrExpanded, setIsBoadrExpanded] =
    useState(true);
  // const [isExamExpanded, setIsExamExpanded] = useState(true);

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

  const handleFeesChange = (event) => {
    const { value } = event.target;
    setSelectedFees((prevSelected) => (prevSelected === value ? "" : value));
  };

  const handleSpecializationChange = (event) => {
    const { value } = event.target;
    setselectedBoard((prevSelected) =>
      prevSelected === value ? "" : value
    );
  };

  // const handleExamChange = (event) => {
  //   const { value } = event.target;
  //   setSelectedExam((prevSelected) => (prevSelected === value ? "" : value));
  // };

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

  // const toggleExamExpand = () => {
  //   setIsExamExpanded((prevState) => !prevState);
  // };

  // const clearFilters = () => {
  //   setSelectedLocation("");
  //   setSelectedOwnership("");
  //   setSelectedFees("");
  //   setselectedBoard("");
  //   setSelectedExam("");
  // };

  const clearAll = () => {
    setSelectedLocation("");
    setSelectedOwnership("");
    setSelectedFees("");
    setselectedBoard("");
    setSelectedExam("");
    setIsOwnershipExpanded(false);
    setIsLocationExpanded(false);
    setIsFeesExpanded(false);
    setIsBoadrExpanded(false);
    // setIsExamExpanded(false);
  };

  // Function to filter colleges based on selected filters
  // const filterColleges = () => {
    // Implement your logic to filter colleges based on the selected filters
    // You can use the selectedLocation, selectedOwnership, selectedFees, selectedBoard, and selectedExam variables to apply the filters
    // You can store the filtered colleges in a state variable and display them in the college-list section
  // };
  
  return (
    <div>
      <div className="school-section">
      <div className="college-filter">
          <div className="selected-options">
            {selectedOwnership && (
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
            {selectedExam && (
              <span
                className="selected-option"
                onClick={() => setSelectedExam("")}
              >
                {selectedExam}
                <span className="clear-option">x</span>
              </span>
            )}
          </div>
          <div className="clear-filters">
            {/* <button onClick={clearFilters}>Clear Filters</button> */}
            {selectedOwnership ||
            selectedLocation ||
            selectedFees ||
            selectedBoard ||
            selectedExam ? (
              <button onClick={clearAll}>Clear All</button>
            ) : null}
          </div>
          <div className="ownership">
            <div
              className={`dropdown ${isOwnershipExpanded ? "expanded" : ""}`}
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
                className={`dropdown ${isLocationExpanded ? "expanded" : ""}`}
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
                          id="thane"
                          name="location"
                          value="Thane"
                          checked={selectedLocation === "Thane"}
                          onChange={handleLocationChange}
                        />
                        <label htmlFor="thane" className="checkbox-label">
                          Thane
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
              <div className={`dropdown ${isFeesExpanded ? "expanded" : ""}`}>
                <label htmlFor="fees">Fees:</label>
                <div>
                  <button className="toggle-button" onClick={toggleFeesExpand}>
                    {isFeesExpanded ? "▲" : "▼"}
                  </button>
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
                          1 Lakh
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
                          6 Lakh
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
                          onChange={handleSpecializationChange}
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
                          onChange={handleSpecializationChange}
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
                          onChange={handleSpecializationChange}
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
                          onChange={handleSpecializationChange}
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
                          onChange={handleSpecializationChange}
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
          {/* <div className="line"></div>
          <div className="exam">
            <div>
              <div className={`dropdown ${isExamExpanded ? "expanded" : ""}`}>
                <label htmlFor="exam">Exam:</label>
                <div>
                  <button className="toggle-button" onClick={toggleExamExpand}>
                    {isExamExpanded ? "▲" : "▼"}
                  </button>
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
          </div> */}
        </div>
        <div className="school-main">
          <div className="school-search">
            <h1>Search School</h1>
            <div className="hero__middle">
              <div className="search-bar-school">
                <div className="line"></div>
                <img style={{ marginRight: "0.8rem" }} src={Search} alt="" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Search..."
                />
                <div className="src-button"><button>Search</button></div>
                
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
          <div className="school-name"><span>St Fransis D'Assisi High School</span></div>
          <div className="school-shortdetail">
          <div className="shortdetal__location">
          <i class="fa-solid fa-location-dot"></i><span>Borivali, Mumbai</span>
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
          <div className="school-name"><span>St Fransis D'Assisi High School</span></div>
          <div className="school-shortdetail">
          <div className="shortdetal__location">
          <i class="fa-solid fa-location-dot"></i><span>Borivali, Mumbai</span>
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
          <div className="school-name"><span>St Fransis D'Assisi High School</span></div>
          <div className="school-shortdetail">
          <div className="shortdetal__location">
          <i class="fa-solid fa-location-dot"></i><span>Borivali, Mumbai</span>
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
          <div className="school-name"><span>St Fransis D'Assisi High School</span></div>
          <div className="school-shortdetail">
          <div className="shortdetal__location">
          <i class="fa-solid fa-location-dot"></i><span>Borivali, Mumbai</span>
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
  );
};

export default School;
