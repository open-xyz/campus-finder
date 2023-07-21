import React from "react";
import "./Page404.css";
export default function Page404() {
  return (
    <div className="page404_body">
      <div className="page404_container">
        <div className="page404_gif">
          <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
        </div>
        <div className="page404_content">
          <h1 className="page404_main-heading">This page is gone.</h1>
          <p>
            ...maybe the page you're looking for is not found or never existed.
          </p>
          <a href="/">
            <button className="page_404-button">
              Back to home <i className="far fa-hand-point-right"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
