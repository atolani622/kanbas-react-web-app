import React from "react";
import * as db from "../../Database"
import { useParams, useNavigate } from "react-router-dom";

export default function AssignmentEditor() {

  const { aid } = useParams();
  const assignments  = db.assignments
  const assignment = assignments.find(a => a._id === aid);
  const navigate = useNavigate();

  return (
      <div id="wd-assignments-editor" className="container mt-4">
        <div className="mb-3 row">
          <label htmlFor="wd-name" className="col-sm-2 col-form-label">Assignment Name</label>
          <div className="col-sm-10">
            <input 
              id="wd-name" 
              className="form-control" 
              defaultValue={assignment?.title} 
            />
          </div>
        </div>
      <div className="mb-3 row">
        <label htmlFor="wd-description" className="col-sm-2 col-form-label">Description</label>
        <div className="col-sm-10">
          <textarea
            id="wd-description"
            className="form-control"
            defaultValue={assignment?.description}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="wd-points" className="form-label">Points</label>
            <input id="wd-points" className="form-control" defaultValue={assignment?.points} />
          </div>
        </div>
        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="wd-group" className="form-label">Assignment Group</label>
            <select id="wd-group" className="form-control">
              <option value="Assignments">ASSIGNMENTS</option>
              <option value="Quizzes">QUIZZES</option>
              <option value="Exams">EXAMS</option>
              <option value="Project">PROJECT</option>
            </select>
          </div>
        </div>
        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="wd-display-grade-as" className="form-label">Display Grade As</label>
            <select id="wd-display-grade-as" className="form-control">
              <option value="Percentage">Percentage</option>
              <option value="Whole">Whole</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
          <select id="wd-submission-type" className="form-control">
            <option value="Online">Online</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Online Entry Options</label>
          <div className="ms-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="wd-text-entry" />
              <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="wd-website-url" defaultChecked />
              <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="wd-file-upload" />
              <label htmlFor="wd-file-upload" className="form-check-label">File Upload</label>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-3">
          <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
          <input id="wd-assign-to" className="form-control" placeholder="Everyone" />
        </div>
        <div className="col-md-3">
          <label htmlFor="wd-due-date" className="form-label">Due Date</label>
          <input type="date" id="wd-due-date" className="form-control" defaultValue={assignment?.due_date}/>
        </div>
        <div className="col-md-3">
          <label htmlFor="wd-available-from" className="form-label">Available From</label>
          <input type="date" id="wd-available-from" className="form-control" defaultValue={assignment?.available_date} />
        </div>
        <div className="col-md-3">
          <label htmlFor="wd-available-until" className="form-label">Available Until</label>
          <input type="date" id="wd-available-until" className="form-control" />
        </div>
      </div>
      <div className="d-flex justify-content-end mt-4">
        <button id="wd-cancel-button" className="btn btn-danger me-2" onClick={() => navigate(`/Kanbas/Courses/${assignment?.course}/Assignments`)}>
          Cancel
        </button>
        <button id="wd-save-button" className="btn btn-success" onClick={() => navigate(`/Kanbas/Courses/${assignment?.course}/Assignments`)}>
          Save
        </button>
      </div>
    </div>
  );
}
