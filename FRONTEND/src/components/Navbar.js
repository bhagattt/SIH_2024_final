import React from "react";
import embelem from "./images/embelem.jpg";
import nep from "./images/Nep.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="header-container">
        <div className="logo">
          <a href="index.html">
            Buisness <br />
            name
          </a>
        </div>
        <div className="ind-emb">
          <img src={embelem} alt="Business Emblem" />
        </div>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/connect">Connect With Mentors</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/quizzes">Quiz</Link>
          <Link to="/scholarship">Scholarship</Link>
        </nav>
        <div>
          <a href="login.html" className="login-btn">
            Login
          </a>
        </div>
        <div className="nep">
          <img src={nep} alt="Business Emblem" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
