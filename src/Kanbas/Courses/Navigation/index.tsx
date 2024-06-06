import { Link } from 'react-router-dom';


export default function CoursesNavigation() {
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

                #wd-courses-navigation a:hover {
                    color: darkred;
                }
                `}
            </style>
            <ul id="wd-courses-navigation">
            <li><Link to="/Kanbas/Courses/1234/Home">Home</Link></li>
            <li><Link to="/Kanbas/Courses/1234/Modules">Modules</Link></li>
            <li><Link to="/Kanbas/Courses/1234/Piazza">Piazza</Link></li>
            <li><Link to="/Kanbas/Courses/1234/Zoom">Zoom</Link></li>
            <li><Link to="/Kanbas/Courses/1234/Assignments">Assignments</Link></li>
            <li><Link to="/Kanbas/Courses/1234/Quizzes">Quizzes</Link></li>
            <li><Link to="/Kanbas/Courses/1234/Grades">Grades</Link></li>
        </ul>
        </>
    );
}
