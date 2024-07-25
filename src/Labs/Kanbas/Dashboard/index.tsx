import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from '../Database';

interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image?: string;
  description: string;
  department?: string;
  credits?: number;
  author?: string;
}

export default function Dashboard() {
  const [courses, setCourses] = useState<Course[]>(db.courses);
  const [course, setCourse] = useState<Course>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description"
  });

  const addNewCourse = () => {
    const newCourse = { ...course, _id: new Date().getTime().toString() };
    setCourses([...courses, newCourse]);
  };

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter(course => course._id !== courseId));
  };

  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      {courses.map((course) => (
        <div key={course._id} className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{course.name}</h5>
              <p className="card-text">{course.description}</p>
              <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-primary">View</Link>
              <button onClick={() => deleteCourse(course._id)} className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      ))}
      <button onClick={addNewCourse} className="btn btn-primary">Add New Course</button>
    </div>
  );
}
