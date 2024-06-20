import React, { useEffect, useState } from 'react';
import { BsPlus, BsSearch } from 'react-icons/bs';
import { FiCheckCircle, FiMoreVertical } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import db from "../../Database";

// 定义 Assignment 类型
type Assignment = {
  _id: string;
  title: string;
  course: string;
  isAvailable?: boolean;
  description?: string;
};

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const [filteredAssignments, setFilteredAssignments] = useState<Assignment[]>([]);

  useEffect(() => {
    // 确保 cid 已定义并且 db.assignments 是有效的
    if (cid && db.assignments) {
      const assignments = db.assignments.filter((assignment: Assignment) => assignment.course === cid);
      setFilteredAssignments(assignments);
    }
  }, [cid]);

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="search-field d-flex align-items-center">
          <BsSearch className="text-muted" />
          <input
            type="text"
            className="form-control ml-2"
            placeholder="Search for Assignments"
            onChange={(e) => {
              const searchTerm = e.target.value.toLowerCase();
              const filtered = db.assignments.filter((assignment: Assignment) =>
                assignment.title.toLowerCase().includes(searchTerm) && assignment.course === cid
              );
              setFilteredAssignments(filtered);
            }}
          />
        </div>
        <div>
          <button className="btn btn-outline-secondary"><BsPlus /> Group</button>
          <button className="btn btn-primary"><BsPlus /> Assignment</button>
        </div>
      </div>
      <h3>ASSIGNMENTS</h3>
      <ul className="list-group">
        {filteredAssignments.map((assignment: Assignment) => (
          <li key={assignment._id} className="list-group-item d-flex justify-content-between align-items-center" style={{ borderLeft: '5px solid green' }}>
            <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="flex-grow-1 text-decoration-none">
              <strong>{assignment.title}</strong>
              <small className="text-muted d-block">{assignment.description || 'No description available'}</small>
            </Link>
            <div>
              <FiCheckCircle className={assignment.isAvailable ? "text-success" : "text-muted"} />
              <FiMoreVertical />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
