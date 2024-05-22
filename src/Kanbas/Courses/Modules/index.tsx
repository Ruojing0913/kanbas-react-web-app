export default function Modules() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', padding: '20px' }}>
  
      {/* Main content area */}
      <div style={{ flexGrow: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <button style={{ marginRight: '10px' }}>Collapse All</button>
          <button style={{ marginRight: '10px' }}>View Progress</button>
          <button style={{ marginRight: '10px' }}>Publish All</button>
          <button>+ Module</button>
        </div>
  
        <div>
          <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
          <div>LEARNING OBJECTIVES</div>
          <ul>
            <li>Introduction to the course</li>
            <li>Learn what is Web Development</li>
          </ul>
          <div>READING</div>
          <ul>
            <li>Full Stack Developer - Chapter 1 - Introduction</li>
            <li>Full Stack Developer - Chapter 2 - Creating User</li>
          </ul>
          <div>SLIDES</div>
          <ul>
            <li>Introduction to Web Development</li>
            <li>Creating an HTTP server with Node.js</li>
            <li>Creating a React Application</li>
          </ul>
        </div>
        <div>
          <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
          <div>LEARNING OBJECTIVES</div>
          <ul>
            <li>Learn how to create user interfaces with HTML</li>
            <li>Deploy the assignment to Netlify</li>
          </ul>
          <div>SLIDES</div>
          <ul>
            <li>Introduction to HTML and the DOM</li>
            <li>Formatting Web content with Headings and Divs</li>
            <li>Formatting content with Lists and Tables</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
