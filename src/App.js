import "./App.css";
import Home from "./Pages/Home/Home";
import College from "./Pages/College/College";
import Navbar from "./Pages/Navbar/Navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Footer from "./Pages/Footer/Footer";

import School from "./Pages/School/School";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/college",
    element: <College />,
  },
  {
    path: "/school",
    element: <School/>,
  },
]);

function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
      <Footer/>
    </div>
  );
}

export default App;
