export default function AssignmentEditor() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#fff' }}>
      <h1 style={{ marginTop: '0' }}>Assignment Name</h1>
      <input style={{ width: '100%', marginBottom: '10px' }} defaultValue="A1 - ENV + HTML" />

      <textarea style={{ width: '100%', height: '100px', marginBottom: '10px' }} defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the tab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page." />

      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <div style={{ marginRight: '20px' }}>
          <label>Points</label>
          <input type="number" style={{ width: '100%' }} defaultValue={100} />
        </div>
        <div style={{ marginRight: '20px' }}>
          <label>Assignment Group</label>
          <select style={{ width: '100%' }}>
            <option>ASSIGNMENTS</option>
            <option>QUIZZES</option>
            <option>EXAMS</option>
            <option>PROJECTS</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <div style={{ marginRight: '20px' }}>
          <label>Display Grade as</label>
          <select style={{ width: '100%' }}>
            <option>Percentage</option>
            <option>Points</option>
          </select>
        </div>
        <div>
          <label>Submission Type</label>
          <select style={{ width: '100%' }}>
            <option>Online</option>
            <option>Offline</option>
          </select>
        </div>
      </div>

      <fieldset>
        <legend>Online Entry Options</legend>
        <label><input type="checkbox" /> Text Entry</label><br />
        <label><input type="checkbox" /> Website URL</label><br />
        <label><input type="checkbox" /> Media Recordings</label><br />
        <label><input type="checkbox" /> Student Annotation</label><br />
        <label><input type="checkbox" /> File Uploads</label>
      </fieldset>

      <label>Assign To</label>
      <input style={{ width: '100%', marginBottom: '10px' }} defaultValue="Everyone" />

      <label>Due</label>
      <input type="date" style={{ width: '100%', marginBottom: '10px' }} defaultValue="2024-05-13" />

      <label>Available from</label>
      <input type="date" style={{ width: '100%', marginBottom: '10px' }} defaultValue="2024-05-06" />

      <label>Until</label>
      <input type="date" style={{ width: '100%', marginBottom: '10px' }} defaultValue="2024-05-20" />

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button style={{ marginRight: '5px' }}>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
}
