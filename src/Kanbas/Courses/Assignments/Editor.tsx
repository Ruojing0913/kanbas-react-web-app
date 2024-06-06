import { BsTrash, BsSave } from 'react-icons/bs'; 

export default function AssignmentEditor() {
  return (
    <div className="container mt-4">
      <h2>Edit Assignment</h2>
      <div className="card">
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="wd-name" className="form-label">Assignment Name</label>
              <input type="text" className="form-control" id="wd-name" defaultValue="A1 - Web Development Introduction" />
            </div>

            <div className="mb-3">
              <label htmlFor="wd-description" className="form-label">Description</label>
              <textarea id="example" className="form-control"  defaultValue="Here is some example text."></textarea>


            </div>

            <div className="mb-3 row">
              <div className="col-md-6">
                <label htmlFor="wd-points" className="form-label">Points</label>
                <input type="number" className="form-control" id="wd-points" defaultValue={100} />
              </div>
              <div className="col-md-6">
                <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                <select className="form-select" id="wd-group" defaultValue="Assignments">
                  <option value="Assignments">Assignments</option>
                  <option value="Quizzes">Quizzes</option>
                  <option value="Exams">Exams</option>
                </select>
              </div>
            </div>

            <div className="mb-3 row">
              <div className="col-md-6">
                <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
                <select className="form-select" id="wd-display-grade-as" defaultValue="Percentage">
                  <option value="Percentage">Percentage</option>
                  <option value="Points">Points</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                <select className="form-select" id="wd-submission-type" defaultValue="Online">
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="wd-assign-to" className="form-label">Assign To</label>
              <input type="text" className="form-control" id="wd-assign-to" defaultValue="Everyone" />
            </div>

            <div className="mb-3 row">
              <div className="col-md-6">
                <label htmlFor="wd-due-date" className="form-label">Due Date</label>
                <input type="date" className="form-control" id="wd-due-date" defaultValue="2024-05-20" />
              </div>
              <div className="col-md-6">
                <label htmlFor="wd-available-until" className="form-label">Available Until</label>
                <input type="date" className="form-control" id="wd-available-until" defaultValue="2024-05-27" />
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-secondary me-2"><BsTrash /> Cancel</button>
              <button type="button" className="btn btn-success"><BsSave /> Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
