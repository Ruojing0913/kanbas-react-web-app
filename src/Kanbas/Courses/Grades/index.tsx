import { BsDownload, BsUpload } from 'react-icons/bs';

export default function Grades() {
    const students = [
        { name: "Alex Johnson", scores: { setup: "98%", html: "95.67%", css: "92.00%", bootstrap: "76.50%" } },
        { name: "Morgan Smith", scores: { setup: "97%", html: "94.30%", css: "91.85%", bootstrap: "78.22%" } },
        { name: "Taylor White", scores: { setup: "99%", html: "93.50%", css: "89.40%", bootstrap: "77.15%" } },
        { name: "Jordan Lee", scores: { setup: "100%", html: "96.25%", css: "90.75%", bootstrap: "74.60%" } },
        { name: "Casey Kim", scores: { setup: "96%", html: "95.10%", css: "93.30%", bootstrap: "75.25%" } },
        { name: "Dakota Sky", scores: { setup: "98%", html: "97.40%", css: "92.15%", bootstrap: "76.85%" } },
        { name: "Jamie Brooks", scores: { setup: "97%", html: "96.90%", css: "94.20%", bootstrap: "75.45%" } },
        { name: "Cameron Bailey", scores: { setup: "99%", html: "94.60%", css: "91.60%", bootstrap: "73.30%" } }
    ];

    return (
        <div className="container mt-3">
            <div className="d-flex justify-content-between mb-3">
                <input type="text" className="form-control w-25" placeholder="Search Students" />
                <input type="text" className="form-control w-25" placeholder="Search Assignments" />
                <div>
                    <button className="btn btn-outline-primary me-2"><BsUpload /> Import</button>
                    <div className="btn-group">
                        <button className="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <BsDownload /> Export
                        </button>
                        <ul className="dropdown-menu">
                            <li><button className="dropdown-item" type="button">PDF</button></li>
                            <li><button className="dropdown-item" type="button">Excel</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>A1 SETUP</th>
                            <th>A2 HTML</th>
                            <th>A3 CSS</th>
                            <th>A4 BOOTSTRAP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student.name}>
                                <td style={{ color: 'red' }}>{student.name}</td>
                                <td><input type="text" className="form-control" defaultValue={student.scores.setup} /></td>
                                <td><input type="text" className="form-control" defaultValue={student.scores.html} /></td>
                                <td><input type="text" className="form-control" defaultValue={student.scores.css} /></td>
                                <td><input type="text" className="form-control" defaultValue={student.scores.bootstrap} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
