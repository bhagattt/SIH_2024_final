import React from "react";
import "./styles.css";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Sch from "../components/images/sch.jpg";
import Book from "../components/images/book.jpg";

function Scholarship() {
  return (
    <div>
      <Navbar />
      <main>
        <header className="header">
          <div className="pagepicture">
            <img src={Sch} className="img1" alt="Scholarship Icon" />
          </div>
          <div className="titleinfo">
            <h3 className="title">Find Your Right Scholarships</h3>
            <p className="fontdenabas">
              Search lists of scholarships by choosing a category or get matched
              to college scholarships you are eligible for.
            </p>
          </div>
          <div className="extra">
            <img src={Book} className="img2" alt="Textbook Icon" />
          </div>
        </header>
        <br />
        <section className="grid">
          <div className="contents">
            <div className="card">
              <div className="card-title">
                Ujjwal Bhavishya Scholarship Samiti
              </div>
              <div className="card-info">
                <div className="card-info-item">
                  <span className="card-info-label">Amount:</span>
                  <span className="card-info-value">&#8377; 10,000</span>
                </div>
                <div className="card-info-item">
                  <span className="card-info-label">Deadline:</span>
                  <span className="card-info-value deadline">
                    Between March and June
                  </span>
                </div>
              </div>
              <div className="progress-bar">
                <span className="progress-bar-label">
                  Government Aided Funds
                </span>
              </div>
            </div>
            <hr />
            <a href="#">Scholarship Details</a>
          </div>

          <div className="contents">
            <div className="card">
              <div className="card-title">
                A.P.J. Abdul Kalam Welfare Society
              </div>
              <div className="card-info">
                <div className="card-info-item">
                  <span className="card-info-label">Amount:</span>
                  <span className="card-info-value">Varies</span>
                </div>
                <div className="card-info-item">
                  <span className="card-info-label">Deadline:</span>
                  <span className="card-info-value deadline">
                    Between February and March
                  </span>
                </div>
              </div>
              <div className="progress-bar">
                <span className="progress-bar-label">
                  International Mathematics Bright Student Award
                </span>
              </div>
            </div>
            <hr />
            <a href="#">Scholarship Details</a>
          </div>
          <div className="contents">
            <div className="card">
              <div className="card-title">National Telent Serch Exam NTSE</div>
              <div className="card-info">
                <div className="card-info-item">
                  <span className="card-info-label">Amount:</span>
                  <span className="card-info-value">&#8377; 12,000</span>
                </div>
                <div className="card-info-item">
                  <span className="card-info-label">Deadline:</span>
                  <span className="card-info-value deadline">
                    Between March and June
                  </span>
                </div>
              </div>
              <div className="progress-bar">
                <span className="progress-bar-label">
                  Government Aided Funds
                </span>
              </div>
            </div>
            <hr />
            <a href="#">Scholarship Details</a>
          </div>
          <div className="contents">
            <div className="card">
              <div className="card-title">National Science Concours(NSC)</div>
              <div className="card-info">
                <div className="card-info-item">
                  <span className="card-info-label">Amount:</span>
                  <span className="card-info-value">&#8377; 10,000</span>
                </div>
                <div className="card-info-item">
                  <span className="card-info-label">Deadline:</span>
                  <span className="card-info-value deadline">
                    Between March and June
                  </span>
                </div>
              </div>
              <div className="progress-bar">
                <span className="progress-bar-label">
                  Foundation For innovation & Experiential Learning
                </span>
              </div>
            </div>
            <hr />
            <a href="#">Scholarship Details</a>
          </div>
          <div className="contents">
            <div className="card">
              <div className="card-title">
                All India Scholarship Test Exam (AISTE)
              </div>
              <div className="card-info">
                <div className="card-info-item">
                  <span className="card-info-label">Amount:</span>
                  <span className="card-info-value">&#8377; 20,000</span>
                </div>
                <div className="card-info-item">
                  <span className="card-info-label">Deadline:</span>
                  <span className="card-info-value deadline">
                    Between September and December
                  </span>
                </div>
              </div>
              <div className="progress-bar">
                <span className="progress-bar-label">
                  Government Aided Funds
                </span>
              </div>
            </div>
            <hr />
            <a href="#">Scholarship Details</a>
          </div>
          <div className="contents">
            <div className="card">
              <div className="card-title">Meri Pehechan Scholarship(MPS)</div>
              <div className="card-info">
                <div className="card-info-item">
                  <span className="card-info-label">Amount:</span>
                  <span className="card-info-value">&#8377; 10,000</span>
                </div>
                <div className="card-info-item">
                  <span className="card-info-label">Deadline:</span>
                  <span className="card-info-value deadline">No Deadline</span>
                </div>
              </div>
              <div className="progress-bar">
                <span className="progress-bar-label">
                  Government Aided Funds
                </span>
              </div>
            </div>
            <hr />
            <a href="#">Scholarship Details</a>
          </div>
          <div className="contents">
            <div className="card">
              <div className="card-title">Bose Einstein Scholarship(JNMC)</div>
              <div className="card-info">
                <div className="card-info-item">
                  <span className="card-info-label">Amount:</span>
                  <span className="card-info-value">&#8377; 40,000</span>
                </div>
                <div className="card-info-item">
                  <span className="card-info-label">Deadline:</span>
                  <span className="card-info-value deadline">
                    Between June and October
                  </span>
                </div>
              </div>
              <div className="progress-bar">
                <span className="progress-bar-label">
                  Government Aided Funds
                </span>
              </div>
            </div>
            <hr />
            <a href="#">Scholarship Details</a>
          </div>
        </section>
      </main>
      <AboutUs />
    </div>
  );
}

export default Scholarship;
