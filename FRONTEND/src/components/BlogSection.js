import React from "react";
import health from "./images/health.jpg";
import scholarship from "./images/scholarship.jpg";
import skills from "./images/skills.jpg";

function BlogSection() {
  return (
    <section className="blog-section">
      <h2>Blog Section</h2>
      <div className="blog-cards">
        <div className="blog-card">
          <img src={scholarship} alt="Blog1" />
          <div className="blog-content">
            <p className="author">Rahul Shah</p>
            <h3>Funding Your Dreams: Discover Scholarships Here</h3>
            <p className="excerpt">
              In today's educational landscape, pursuing quality education can
              sometimes come with a hefty price tag. However, there are ways...
            </p>
            <div className="blog-footer">
              <span className="views">0</span>
              <span className="icon">Views</span>
              <span className="icon">Likes</span>
            </div>
          </div>
        </div>

        <div className="blog-card">
          <img src={health} alt="Blog2" />
          <div className="blog-content">
            <p className="author">Nitin Shetty</p>
            <h3>Connecting Students with Mentors for Success</h3>
            <p className="excerpt">
              In today's fast-paced and demanding academic environment, students
              often find themselves in need of additional support and
              guidance...
            </p>
            <div className="blog-footer">
              <span className="views">0</span>
              <span className="icon">Views</span>
              <span className="icon">Likes</span>
            </div>
          </div>
        </div>

        <div className="blog-card">
          <img src={skills} alt="Blog3" />
          <div className="blog-content">
            <p className="author">Kunal Kulkarni</p>
            <h3>Empowering Students Through Success Stories</h3>
            <p className="excerpt">
              In the realm of education, success stories hold a special place as
              they inspire, motivate, and empower students to strive for
              excellence...
            </p>
            <div className="blog-footer">
              <span className="views">0</span>
              <span className="icon">Views</span>
              <span className="icon">Likes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
