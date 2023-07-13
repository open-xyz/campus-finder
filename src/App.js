import "./App.css";
import Home from "./Pages/Home/Home";
import College from "./Pages/College/Home";
import Navbar from "./Pages/Navbar/Navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/college",
    element: <College />,
  },
]);

function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
