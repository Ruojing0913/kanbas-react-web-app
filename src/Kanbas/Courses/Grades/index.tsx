import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../../Database';

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

interface Grade {
  _id: string;
  student: string;
  assignment: string;
  grade: string;
}

export default function Grades() {
  const { cid } = useParams();
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [grades, setGrades] = useState<Grade[]>([]);

  useEffect(() => {
    const courseEnrollments: Enrollment[] = db.enrollments.filter(enrollment => enrollment.course === cid);
    const courseGrades: Grade[] = db.grades.filter(grade =>
      courseEnrollments.some(enrollment => enrollment.user === grade.student)
    );

    setEnrollments(courseEnrollments);
    setGrades(courseGrades);
  }, [cid]);

  return (
    <div className="container mt-3">
      <table className="table">
        <thead>
          <tr>
            <th>Student Name</th>
            {db.assignments.map(assignment => (
              <th key={assignment._id}>{assignment.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {enrollments.map(enrollment => (
            <tr key={enrollment._id}>
              <td>{db.users.find(user => user._id === enrollment.user)?.firstName}</td>
              {db.assignments.map(assignment => (
                <td key={assignment._id}>
                  {grades.find(grade => grade.student === enrollment.user && grade.assignment === assignment._id)?.grade || "N/A"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
