import React from "react";
import "./styles.css";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";

function Quizzes() {
  return (
    <div>
      <Navbar />

      <main>
        <div className="container">
          {/* Quizzes Section */}
          <div className="contests">
            <h2>Quizzes</h2>
            <ul className="contest-list">
              <li className="contest-item">
                <div className="contest-details">
                  <strong>English</strong>
                  <br />
                  <ul>
                    <li>Chapter Wise</li>
                    <li>Subject Wise</li>
                    <li>Full Length</li>
                  </ul>
                </div>
                <button className="virtual-button">Attempt Now</button>
              </li>
              <li className="contest-item">
                <div className="contest-details">
                  <strong>Marathi</strong>
                  <br />
                  <ul>
                    <li>Chapter Wise</li>
                    <li>Subject Wise</li>
                    <li>Full Length</li>
                  </ul>
                </div>
                <button className="virtual-button">Attempt Now</button>
              </li>
              <li className="contest-item">
                <div className="contest-details">
                  <strong>Maths</strong>
                  <br />
                  <ul>
                    <li>Chapter Wise</li>
                    <li>Subject Wise</li>
                    <li>Full Length</li>
                  </ul>
                </div>
                <button className="virtual-button">Attempt Now</button>
              </li>
              <li className="contest-item">
                <div className="contest-details">
                  <strong>Science</strong>
                  <br />
                  <ul>
                    <li>Chapter Wise</li>
                    <li>Subject Wise</li>
                    <li>Full Length</li>
                  </ul>
                </div>
                <button className="virtual-button">Attempt Now</button>
              </li>
            </ul>
          </div>

          {/* Class Ranking Section */}
          <div className="ranking">
            <h2>Class Ranking</h2>
            <ul className="ranking-list">
              <li className="ranking-item">
                <span className="ranking-rank">1</span>
                <div className="ranking-details">
                  <strong>Name</strong> (Division)
                  <br />
                  Points: 360
                </div>
              </li>
              <li className="ranking-item">
                <span className="ranking-rank">2</span>
                <div className="ranking-details">
                  <strong>Name</strong> (Division)
                  <br />
                  Points: 280
                </div>
              </li>
              <li className="ranking-item">
                <span className="ranking-rank">3</span>
                <div className="ranking-details">
                  <strong>Name</strong> (Division)
                  <br />
                  Points: 200
                </div>
              </li>
              <li className="ranking-item">
                <span className="ranking-rank">4</span>
                <div className="ranking-details">
                  <strong>Name</strong> (Division)
                  <br />
                  Points: 150
                </div>
              </li>
            </ul>
            <a href="hello">See more</a>
            <ul className="your-stats">
              <li>Your Points: 100</li>
              <li>Quizzes Attempted: 5</li>
              <li>Your Ranking: 14</li>
              <li>Your Coins: $18</li>
            </ul>
            <div className="Redeem">
              <button className="redeem-button">Redeem Coins</button>
            </div>
          </div>
        </div>
      </main>

      <AboutUs />
    </div>
  );
}
export default Quizzes;
