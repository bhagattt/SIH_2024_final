import React from "react";
import "./styles.css";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import mentor1 from "../components/images/mentor1.jpeg";
import mentor2 from "../components/images/mentor2.jpeg";
import mentor3 from "../components/images/mentor3.jpeg";
import mentor4 from "../components/images/mentor4.jpeg";
import mentor5 from "../components/images/mentor5.jpeg";
import mentor6 from "../components/images/mentor6.jpeg";

function Connect() {
  return (
    <div>
      <Navbar />
      <h2>Connect with Mentors</h2>
      <div className="connect-section">
        <p className="section-description">
          Looking to advance your career or need guidance on a specific project?
          Our experienced mentors are here to help. Reach out to them for
          valuable insights and support.
        </p>
        <div className="mentor-list">
          <div className="mentor-card">
            <img
              src={mentor2}
              alt="Prof. H.C. Verma"
              className="mentor-photo"
            />
            <h2>Prof. H.C. Verma</h2>
            <p>Specialist in Science & Education</p>
            <button className="contact-button">Contact H.C. Verma</button>
          </div>
          <div className="mentor-card">
            <img src={mentor3} alt="D.C. Pandey" className="mentor-photo" />
            <h2>D.C. Pandey</h2>
            <p>Specialist in Maths & Education</p>
            <button className="contact-button">Contact D.C. Pandey</button>
          </div>
          <div className="mentor-card">
            <img src={mentor4} alt="Bhargav Sesham" className="mentor-photo" />
            <h2>Bhargav Sesham</h2>
            <p>Holistic Success Mentor for Education</p>
            <button className="contact-button">Contact Bhargav S</button>
          </div>
          <div className="mentor-card">
            <img src={mentor5} alt="Jane Smith" className="mentor-photo" />
            <h2>Meera Desai</h2>
            <p>Women Empowerment and Child support</p>
            <button className="contact-button">Contact Meera Desai</button>
          </div>
          <div className="mentor-card">
            <img src={mentor6} alt="Jane Smith" className="mentor-photo" />
            <h2>Aanya Sharma</h2>
            <p>School Counseling and Mental Health</p>
            <button className="contact-button">Contact Aanya Sharma</button>
          </div>
          <div className="mentor-card">
            <img src={mentor1} alt="John Doe" className="mentor-photo" />
            <h2>John Doe</h2>
            <p>Expert in communication and Socialising</p>
            <button className="contact-button">Contact John</button>
          </div>
        </div>
      </div>
      <AboutUs />
    </div>
  );
}

export default Connect;
