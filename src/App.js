import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Singup from "./Pages/Signup/Signup";
import React, { useEffect, useState } from "react"; // Added useState import
import { SkeletonTheme } from "react-loading-skeleton";
import HomeRoute from "./RoutePage/HomeRoute";
import CollegeRoute from "./RoutePage/CollegeRoute";
import SchoolRoute from "./RoutePage/SchoolRoute";
import InvestorRoute from "./RoutePage/InvestorRoute";
import BookMarkRoute from "./RoutePage/BookMarkRoute";
import Page404 from "./Pages/Page404.js/Page404";
import InstituteRoute from "./RoutePage/InstituteRoute";
import SingleSchoolRoute from "./RoutePage/SingleSchoolRoute";
import NotSupportedPage from "./Pages/NotSupportedPage/NotSupportedPage";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the device is a mobile device
    const checkMobileDevice = () => {
      const isMobileDevice =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      setIsMobile(isMobileDevice);
    };

    checkMobileDevice();
  }, []);

  return (
    // Wrap the entire content in a fragment <>
    <>
      {isMobile ? (
        <NotSupportedPage />
      ) : (
        <SkeletonTheme baseColor="#d3d3d3" highlightColor="#e3e3d3">
          <Router>
            <div>
              <div style={{ position: "sticky", top: "0", zIndex: "1" }}></div>
              <Routes>
                <Route path="/" element={<HomeRoute />} />
                <Route path="/college" element={<CollegeRoute />} />
                <Route path="/school" element={<SchoolRoute />} />
                <Route
                  path="/colleges/:collegeName"
                  element={<InstituteRoute />}
                />
                <Route
                  path="/schools/:schoolName"
                  element={<SingleSchoolRoute />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Singup />} />
                <Route path="/investor" element={<InvestorRoute />} />
                <Route path="/bookmarks" element={<BookMarkRoute />} />
                <Route path="*" element={<Page404 />} />
              </Routes>
            </div>
          </Router>
        </SkeletonTheme>
      )}
    </>
  );
}

export default App;
