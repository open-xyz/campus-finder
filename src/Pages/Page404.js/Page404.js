import React from 'react'
import "./Page404.css"
export default function Page404() {
    return (
        <div className='body'>
           <div className="container">
      <div className="gif">
        <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
      </div>
      <div className="content">
        <h1 className="main-heading">This page is gone.</h1>
        <p>
          ...maybe the page you're looking for is not found or never existed.
        </p>
        <a href="/" >
          <button>Back to home <i className="far fa-hand-point-right"></i></button>
        </a>
      </div>
    </div>

        </div>
    )
}
