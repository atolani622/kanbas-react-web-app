import { Link, useParams, useLocation } from "react-router-dom";

export default function CourseNavigation() {
  const { cid } = useParams(); 
  const { pathname } = useLocation(); 

  console.log("Course ID:", cid); 
  console.log("Current Pathname:", pathname);

  
  const links = [
    { label: "Home", path: `/Courses/${cid}/Home` }, 
    { label: "Modules", path: `/Courses/${cid}/Modules` },
    { label: "Piazza", path: `/Courses/${cid}/Piazza` },
    { label: "Zoom", path: `/Courses/${cid}/Zoom` },
    { label: "Assignments", path: `/Courses/${cid}/Assignments` },
    { label: "Quizzes", path: `/Courses/${cid}/Quizzes` }, 
    { label: "Grades", path: `/Courses/${cid}/Grades` },
    { label: "People", path: `/Courses/${cid}/People` },
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const isActive = pathname === link.path;

        return (
          <Link
            key={link.label}
            to={link.path}
            className={`list-group-item border-0 ${isActive ? "active" : "text-danger"}`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
