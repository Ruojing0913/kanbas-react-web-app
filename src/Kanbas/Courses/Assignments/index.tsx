import { BsPlus, BsSearch } from 'react-icons/bs';
import { FiCheckCircle, FiMoreVertical } from 'react-icons/fi';
import { Link } from 'react-router-dom'; 

export default function Assignments() {
  const assignments = [
    { id: "123", title: "A1 - ENV + HTML", details: "Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts", isAvailable: true },
    { id: "124", title: "A2 - CSS + BOOTSTRAP", details: "Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts", isAvailable: false },
    { id: "125", title: "A3 - JAVASCRIPT + REACT", details: "Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts", isAvailable: false }
  ];

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="search-field d-flex align-items-center">
          <BsSearch className="text-muted" />
          <input type="text" className="form-control ml-2" placeholder="Search for Assignments" />
        </div>
        <div>
          <button className="btn btn-outline-secondary"><BsPlus /> Group</button>
          <button className="btn btn-primary"><BsPlus /> Assignment</button>
        </div>
      </div>
      <h3>ASSIGNMENTS</h3>
      <ul className="list-group">
        {assignments.map(assignment => (
          <li key={assignment.id} className="list-group-item d-flex justify-content-between align-items-center" style={{ borderLeft: '5px solid green' }}>
            <Link to={`/Kanbas/Courses/1234/Assignments/${assignment.id}`} className="flex-grow-1 text-decoration-none">
              <strong>{assignment.title}</strong>
              <small className="text-muted d-block">{assignment.details}</small>
            </Link>
            <div>
              {assignment.isAvailable ? <FiCheckCircle className="text-success" /> : <FiCheckCircle className="text-muted" />}
              <FiMoreVertical />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
