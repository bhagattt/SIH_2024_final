import React from "react";
import "./styles.css";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import health from "../components/images/health.jpg";
import scholarship from "../components/images/scholarship.jpg";
import inspiration from "../components/images/inspiration.jpg";
import skills from "../components/images/skills.jpg";
import studyresourses from "../components/images/studyresourses.jpg";

function Blog() {
  return (
    <div>
      <Navbar />
      <div className="header">
        <div>
          <p>BLOG SECTION</p>
        </div>
        <div>
          <input
            type="text"
            className="search-bar"
            id="searchInput"
            placeholder="Search for all topics"
          />
        </div>
      </div>
      <div className="main-content">
        <div className="blog-container">
          <div className="image-container">
            <img src={scholarship} alt="blog-image" className="image" />
          </div>
          <div className="text-contents">
            <div className="blog-title">
              <a href="#blog">
                Funding Your Dreams: Discover Scholarships Here
              </a>
            </div>
            <div className="description">
              Explore a curated list of scholarships tailored to help you
              achieve your academic and career goals without financial barriers
            </div>
            <div className="student-profile">
              <div className="account-container">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzBI93Bqfpl3VKWLXTHKpFzk2ynyHGq7sn-g&s"
                  alt="account"
                  className="student-account"
                />
                <a href="#profile">
                  <span>Rahul Shah</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-container">
          <div className="image-container">
            <img src={inspiration} alt="blog-image" className="image" />
          </div>
          <div className="text-contents">
            <div className="blog-title">
              <a href="#blog">
                Navigating Your Career Path: Insights and Inspiration
              </a>
            </div>
            <div className="description">
              Explore expert advice, tips, and real-life stories to help you
              navigate your career path and achieve your professional goals
            </div>
            <div className="student-profile">
              <div className="account-container">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzBI93Bqfpl3VKWLXTHKpFzk2ynyHGq7sn-g&s"
                  alt="account"
                  className="student-account"
                />
                <a href="#profile">
                  <span>Nitin Shetty</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-container">
          <div className="image-container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6FDzKAKd-9dW0n2Az6TTVRAEW80za1rtmg&s"
              alt="blog-image"
              className="image"
            />
          </div>
          <div className="text-contents">
            <div className="blog-title">
              <a href="#blog">Latest trends in technology for students</a>
            </div>
            <div className="description">
              Discover how AI tools and virtual reality are revolutionizing
              education, making learning smarter and faster for students
            </div>
            <div className="student-profile">
              <div className="account-container">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzBI93Bqfpl3VKWLXTHKpFzk2ynyHGq7sn-g&s"
                  alt="account"
                  className="student-account"
                />
                <a href="#profile">
                  <span>Rahul Shah</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-container">
          <div className="image-container">
            <img src={health} alt="blog-image" className="image" />
          </div>
          <div className="text-contents">
            <div className="blog-title">
              <a href="#blog">
                Wellness 101: Keeping Your Mind and Body in Check
              </a>
            </div>
            <div className="description">
              Learn essential tips to maintain your mental and physical
              well-being, ensuring you're at your best both in and out of the
              classroom
            </div>
            <div className="student-profile">
              <div className="account-container">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzBI93Bqfpl3VKWLXTHKpFzk2ynyHGq7sn-g&s"
                  alt="account"
                  className="student-account"
                />
                <a href="#profile">
                  <span>Kunal Kulkarni</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-container">
          <div className="image-container">
            <img src={studyresourses} alt="blog-image" className="image" />
          </div>
          <div className="text-contents">
            <div className="blog-title">
              <a href="#blog">The Study Spot: Resources for Academic Success</a>
            </div>
            <div className="description">
              Get quick tips, study strategies, and motivation to help you excel
              in your academics. Join us for the tools you need to thrive in
              school!
            </div>
            <div className="student-profile">
              <div className="account-container">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzBI93Bqfpl3VKWLXTHKpFzk2ynyHGq7sn-g&s"
                  alt="account"
                  className="student-account"
                />
                <a href="#profile">
                  <span>Ajit Singh</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-container">
          <div className="image-container">
            <img src={skills} alt="blog-image" className="image" />
          </div>
          <div className="text-contents">
            <div className="blog-title">
              <a href="#blog">
                Beyond the Books: Skills for Real-World Success
              </a>
            </div>
            <div className="description">
              From communication to problem-solving, our blog covers everything
              you need to succeed beyond the classroom.
            </div>
            <div className="student-profile">
              <div className="account-container">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzBI93Bqfpl3VKWLXTHKpFzk2ynyHGq7sn-g&s"
                  alt="account"
                  className="student-account"
                />
                <a href="#profile">
                  <span>Sunil Sharma</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutUs />
    </div>
  );
}

export default Blog;
