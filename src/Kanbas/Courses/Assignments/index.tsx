export default function Assignments() {
  const assignments = [
    { id: "123", title: "A1 - ENV + HTML", details: "Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts" },
    { id: "124", title: "A2 - CSS + BOOTSTRAP", details: "Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts" },
    { id: "125", title: "A3 - JAVASCRIPT + REACT", details: "Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts" }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <input style={{ marginBottom: '10px' }} placeholder="Search for Assignments" />
      <button style={{ marginRight: '5px' }}>+ Group</button>
      <button>+ Assignment</button>
      <h2>ASSIGNMENTS 40% of Total</h2>
      <ul>
        {assignments.map(assignment => (
          <li key={assignment.id}>
            <a href={`#/Kanbas/Courses/1234/Assignments/${assignment.id}`}>
              {assignment.title}
            </a>
            <div>
              {assignment.details}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
