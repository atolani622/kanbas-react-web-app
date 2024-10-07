import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <div className="d-flex" id="wd-home">
      <div className="flex-fill">
        <button>Collapse All</button>
        <button>View Progress</button>
        <select id="wd-select-publish">
          <option selected value="Publish All">Publish All</option>
          <option value="Publish One">Publish One</option>
        </select>
        <button>+Module</button>
        <Modules />
      </div>
      <div className="d-none d-md-block">
      <CourseStatus />
    </div >
    </div>
  );
}
