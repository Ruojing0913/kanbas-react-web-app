import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

export default function CoursesNavigation() {
    const { cid } = useParams();
    const location = useLocation();

    const links = [
        { name: "Home", path: "Home" },
        { name: "Modules", path: "Modules" },
        { name: "Piazza", path: "Piazza" },
        { name: "Zoom", path: "Zoom" },
        { name: "Assignments", path: "Assignments" },
        { name: "Quizzes", path: "Quizzes" },
        { name: "Grades", path: "Grades" }
    ];

    return (
        <>
            <style>
                {`
                #wd-courses-navigation {
                    list-style: none;
                    padding: 0 20px;
                    font-size: 18px;
                    font-family: Arial, sans-serif;
                    margin: 20px 0;
                }

                #wd-courses-navigation li {
                    margin-bottom: 10px;
                }

                #wd-courses-navigation a {
                    text-decoration: none;
                    color: red;
                    display: block;
                }

                #wd-courses-navigation a:hover, #wd-courses-navigation .active {
                    color: darkred;
                }
                `}
            </style>
            <ul id="wd-courses-navigation">
                {links.map(link => (
                    <li key={link.name}>
                        <Link
                            to={`/Kanbas/Courses/${cid}/${link.path}`}
                            className={location.pathname.includes(link.path) ? 'active' : ''}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
