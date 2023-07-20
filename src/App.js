import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import College from "./Pages/College/College";
import Navbar from "./Pages/Navbar/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";
import School from "./Pages/School/School";
import Login from "./Pages/Login/Login";
import Singup from "./Pages/Signup/Signup";
import Investor from "./Pages/Investor/Investor";
import { SkeletonTheme } from "react-loading-skeleton";
import Institute from "./Pages/Institute/Institute";
import Bookmark from "./Pages/Bookmark/Bookmark";

function App() {
  return (
    <SkeletonTheme baseColor="#d3d3d3" highlightColor="#e3e3e3">
      <Router>
        <div>
          <div style={{ position: "sticky", top: "0", zIndex: "1" }}>
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/college" element={<College />} />
            <Route path="/school" element={<School />} />
            <Route path="/colleges/:collegeName" element={<Institute />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Singup />} />
            <Route path="/investor" element={<Investor />} />
            <Route path="/bookmarks" element={<Bookmark />} />
          </Routes>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <Footer />
        </div>
      </Router>
    </SkeletonTheme>
  );
}

export default App;
