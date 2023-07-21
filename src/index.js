import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./context/collegeContext";
import { BookmarkProvider } from "./context/bookMarkContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BookmarkProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </BookmarkProvider>
  </React.StrictMode>
);
