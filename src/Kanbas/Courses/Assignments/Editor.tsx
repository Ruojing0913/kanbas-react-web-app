import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BsTrash, BsSave } from 'react-icons/bs';
import db from '../../Database';

type AssignmentType = {
  _id: string;
  title: string;
  course: string;
  description: string;
  points: number;
  dueDate: string;
  availableFrom: string;
} | null;

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const [assignment, setAssignment] = useState<AssignmentType>(null);

  useEffect(() => {
    const foundAssignment = db.assignments.find(assn => assn._id === aid) as AssignmentType;
    setAssignment(foundAssignment);
  }, [aid]);

  if (!assignment) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>Edit Assignment</h2>
      <div className="card">
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="wd-name" className="form-label">Assignment Name</label>
              <input type="text" className="form-control" id="wd-name" defaultValue={assignment?.title} />
            </div>

            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" value="" id="availableOnline" checked />
              <label className="form-check-label" htmlFor="availableOnline">
                The assignment is available online
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="wd-description" className="form-label">Description</label>
              <textarea id="wd-description" className="form-control" defaultValue={assignment?.description}></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="wd-points" className="form-label">Points</label>
              <input type="number" className="form-control" id="wd-points" defaultValue={assignment?.points} />
            </div>

            <div className="mb-3">
              <label htmlFor="wd-assign-to" className="form-label">Assign To</label>
              <input type="text" className="form-control" id="wd-assign-to" defaultValue="Everyone" />
            </div>

            <div className="mb-3">
              <label htmlFor="wd-due-date" className="form-label">Due Date</label>
              <input type="date" className="form-control" id="wd-due-date" defaultValue={assignment?.dueDate} />
            </div>

            <div className="mb-3">
              <label htmlFor="wd-available-from" className="form-label">Available From</label>
              <input type="date" className="form-control" id="wd-available-from" defaultValue={assignment?.availableFrom} />
            </div>

            <div className="d-flex justify-content-end">
              <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2"><BsTrash /> Cancel</Link>
              <button type="button" className="btn btn-success"><BsSave /> Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
