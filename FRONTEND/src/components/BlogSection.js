import React from "react";

function BlogSection() {
  return (
    <section className="blog-section">
      <h2>Blog Section</h2>
      <div className="blog-cards">
        <div className="blog-card">
          <img src="path/to/your-image1.jpg" alt="Blog Image 1" />
          <div className="blog-content">
            <p className="author">Chetan Borkar</p>
            <h3>Maximizing Educational Opportunities with Scholarships</h3>
            <p className="excerpt">
              In today's educational landscape, pursuing quality education can
              sometimes come with a hefty price tag. However, there are ways...
            </p>
            <div className="blog-footer">
              <span className="views">0</span>
              <span className="icon">👁️</span>
              <span className="icon">❤️</span>
            </div>
          </div>
        </div>

        <div className="blog-card">
          <img src="path/to/your-image2.jpg" alt="Blog Image 2" />
          <div className="blog-content">
            <p className="author">Chetan Borkar</p>
            <h3>Connecting Students with Mentors for Success</h3>
            <p className="excerpt">
              In today's fast-paced and demanding academic environment, students
              often find themselves in need of additional support and
              guidance...
            </p>
            <div className="blog-footer">
              <span className="views">0</span>
              <span className="icon">👁️</span>
              <span className="icon">❤️</span>
            </div>
          </div>
        </div>

        <div className="blog-card">
          <img src="path/to/your-image3.jpg" alt="Blog Image 3" />
          <div className="blog-content">
            <p className="author">Chetan Borkar</p>
            <h3>Empowering Students Through Success Stories</h3>
            <p className="excerpt">
              In the realm of education, success stories hold a special place as
              they inspire, motivate, and empower students to strive for
              excellence...
            </p>
            <div className="blog-footer">
              <span className="views">0</span>
              <span className="icon">👁️</span>
              <span className="icon">❤️</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
