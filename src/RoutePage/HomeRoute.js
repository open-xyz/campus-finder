import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import Footer from "../Pages/Footer/Footer";
import React, { useEffect } from "react";
import Cookies from "js-cookie";

export default function HomeRoute() {
  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      window.location.href = "/login"; // Redirect to /login if not logged in
    }
  }, []);
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
