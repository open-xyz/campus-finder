import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import College from "./Pages/College/College";
import Navbar from "./Pages/Navbar/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";
import School from "./Pages/School/School";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/college" element={<College />} />
          <Route path="/school" element={<School />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
