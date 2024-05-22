export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      <h2 id="wd-dashboard-published">Published Courses (8)</h2>
      <hr />

      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1234/Home">Go</a>
          </div>
        </div>

        {/* Updated course images */}
        <div className="wd-dashboard-course">
          <img src="/images/course.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/6949/Home">
              CS 6949 Career Preparation
            </a>
            <p className="wd-dashboard-course-title">
              Preparing for Professional Growth
            </p>
            <a href="#/Kanbas/Courses/6949/Home">Go</a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/course.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/6954/Home">
              CS 6954 Co-op Work Experience - Half-Time
            </a>
            <p className="wd-dashboard-course-title">
              Practical Work Experience
            </p>
            <a href="#/Kanbas/Courses/6954/Home">Go</a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/course.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/6955/Home">
              CS 6955 Co-op Work Experience Abroad - Half-Time
            </a>
            <p className="wd-dashboard-course-title">
              International Work Experience
            </p>
            <a href="#/Kanbas/Courses/6955/Home">Go</a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/course.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/6962/Home">
              CS 6962 Elective
            </a>
            <p className="wd-dashboard-course-title">
              Flexible Learning Opportunities
            </p>
            <a href="#/Kanbas/Courses/6962/Home">Go</a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/course.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/6964/Home">
              CS 6964 Co-op Work Experience
            </a>
            <p className="wd-dashboard-course-title">
              Extended Work Placement
            </p>
            <a href="#/Kanbas/Courses/6964/Home">Go</a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/course.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/6965/Home">
              CS 6965 Co-op Work Experience Abroad
            </a>
            <p className="wd-dashboard-course-title">
              Work Abroad Experience
            </p>
            <a href="#/Kanbas/Courses/6965/Home">Go</a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/course.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/7140/Home">
              CS 7140 Advanced Machine Learning
            </a>
            <p className="wd-dashboard-course-title">
              Advanced Topics in Machine Learning
            </p>
            <a href="#/Kanbas/Courses/7140/Home">Go</a>
          </div>
        </div>
      </div>
    </div>
  );
}
