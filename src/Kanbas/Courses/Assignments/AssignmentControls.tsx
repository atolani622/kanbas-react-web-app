import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";


export default function AssignmentControls() {
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
                <Link to={"../Assignments/Editor"} className="btn btn-danger btn-sm" role="button">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment
                </Link></button>
            <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group</button>
        </div>
    );
}