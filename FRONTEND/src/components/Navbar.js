import React from "react";
import embelem from "./images/embelem.jpg";
import nep from "./images/Nep.jpg";
import logo from "./images/logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="VidyaSetu" />
          </Link>
        </div>
        <div className="ind-emb">
          <img src={embelem} alt="Business Emblem" />
        </div>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/scholarship">Scholarship</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/quizzes">Quiz</Link>
          <Link to="/connect">Connect With Mentors</Link>
        </nav>
        <div>
          <Link to="/authform" className="login-btn">
            Login
          </Link>
        </div>
        <div className="nep">
          <img src={nep} alt="Business Emblem" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
