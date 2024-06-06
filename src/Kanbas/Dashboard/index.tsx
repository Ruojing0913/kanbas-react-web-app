import "./index.css";  // Ensure your CSS file includes grid styling

export default function Dashboard() {
  return (
    <div id="wd-dashboard" className="dashboard-container">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      <h2 id="wd-dashboard-published">Published Courses (8)</h2>
      <hr />

      <div id="wd-dashboard-courses" className="course-grid">
        {/* React JS Course */}
        <div className="course-card">
          <img src="/images/reactjs.jpg" alt="React JS" className="course-image" />
          <div className="course-info">
            <a href="#/Kanbas/Courses/1234/Home" className="course-title">CS1234 React JS</a>
            <p className="course-description">Full Stack software developer</p>
            <a href="#/Kanbas/Courses/1234/Home" className="course-link">Go</a>
          </div>
        </div>

        {/* Career Preparation */}
        <div className="course-card">
          <img src="/images/course.jpg" alt="Career Preparation" className="course-image" />
          <div className="course-info">
            <a href="#/Kanbas/Courses/6949/Home" className="course-title">CS 6949 Career Preparation</a>
            <p className="course-description">Preparing for Professional Growth</p>
            <a href="#/Kanbas/Courses/6949/Home" className="course-link">Go</a>
          </div>
        </div>

        {/* Co-op Work Experience - Half-Time */}
        <div className="course-card">
          <img src="/images/course.jpg" alt="Co-op Work Experience - Half-Time" className="course-image" />
          <div className="course-info">
            <a href="#/Kanbas/Courses/6954/Home" className="course-title">CS 6954 Co-op Work Experience - Half-Time</a>
            <p className="course-description">Practical Work Experience</p>
            <a href="#/Kanbas/Courses/6954/Home" className="course-link">Go</a>
          </div>
        </div>

        {/* Co-op Work Experience Abroad - Half-Time */}
        <div className="course-card">
          <img src="/images/course.jpg" alt="Co-op Work Experience Abroad - Half-Time" className="course-image" />
          <div className="course-info">
            <a href="#/Kanbas/Courses/6955/Home" className="course-title">CS 6955 Co-op Work Experience Abroad - Half-Time</a>
            <p className="course-description">International Work Experience</p>
            <a href="#/Kanbas/Courses/6955/Home" className="course-link">Go</a>
          </div>
        </div>

        {/* Elective */}
        <div className="course-card">
          <img src="/images/course.jpg" alt="Elective" className="course-image" />
          <div className="course-info">
            <a href="#/Kanbas/Courses/6962/Home" className="course-title">CS 6962 Elective</a>
            <p className="course-description">Flexible Learning Opportunities</p>
            <a href="#/Kanbas/Courses/6962/Home" className="course-link">Go</a>
          </div>
        </div>

        {/* Co-op Work Experience */}
        <div className="course-card">
          <img src="/images/course.jpg" alt="Co-op Work Experience" className="course-image" />
          <div className="course-info">
            <a href="#/Kanbas/Courses/6964/Home" className="course-title">CS 6964 Co-op Work Experience</a>
            <p className="course-description">Extended Work Placement</p>
            <a href="#/Kanbas/Courses/6964/Home" className="course-link">Go</a>
          </div>
        </div>

        {/* Co-op Work Experience Abroad */}
        <div className="course-card">
          <img src="/images/course.jpg" alt="Co-op Work Experience Abroad" className="course-image" />
          <div className="course-info">
            <a href="#/Kanbas/Courses/6965/Home" className="course-title">CS 6965 Co-op Work Experience Abroad</a>
            <p className="course-description">Work Abroad Experience</p>
            <a href="#/Kanbas/Courses/6965/Home" className="course-link">Go</a>
          </div>
        </div>

        {/* Advanced Machine Learning */}
        <div className="course-card">
          <img src="/images/course.jpg" alt="Advanced Machine Learning" className="course-image" />
          <div className="course-info">
            <a href="#/Kanbas/Courses/7140/Home" className="course-title">CS 7140 Advanced Machine Learning</a>
            <p className="course-description">Advanced Topics in Machine Learning</p>
            <a href="#/Kanbas/Courses/7140/Home" className="course-link">Go</a>
          </div>
        </div>
      </div>
    </div>
  );
}
