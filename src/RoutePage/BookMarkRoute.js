import Bookmark from "../Pages/Bookmark/Bookmark";
import Footer from "../Pages/Footer/Footer";
import Navbar from "../Pages/Navbar/Navbar/Navbar";

import React from "react";

export default function BookMarkRoute() {
  return (
    <div>
      <Navbar />
      <Bookmark />
      <Footer />
    </div>
  );
}
