import React from "react";
import * as db from "../../Database"

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="mb-3 row">
        <label htmlFor="wd-name" className="col-sm-2 col-form-label">Assignment Name</label>
        <div className="col-sm-10">
          <input id="wd-name" className="form-control" defaultValue="A1" />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="wd-description" className="col-sm-2 col-form-label">Description</label>
        <div className="col-sm-10">
          <textarea
            id="wd-description"
            className="form-control"
            defaultValue={`The assignment is available online.\n\nSubmit a link to the landing page of your Web application running on Netlify.\n\nThe landing page should include the following:\n\n• Your full name and section\n• Links to each of the lab assignments\n• Link to the Kanbas application\n• Links to all relevant source code repositories\n\nThe Kanbas application should include a link to navigate back to the landing page.`}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="wd-points" className="form-label">Points</label>
            <input id="wd-points" className="form-control" placeholder="100" />
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
          <input type="date" id="wd-due-date" className="form-control" />
        </div>
        <div className="col-md-3">
          <label htmlFor="wd-available-from" className="form-label">Available From</label>
          <input type="date" id="wd-available-from" className="form-control" />
        </div>
        <div className="col-md-3">
          <label htmlFor="wd-available-until" className="form-label">Available Until</label>
          <input type="date" id="wd-available-until" className="form-control" />
        </div>
      </div>
      <div className="d-flex justify-content-end mt-4">
        <button id="wd-cancel-button" className="btn btn-danger me-2" onClick={() => alert("Assignment cancelled!")}>
          Cancel
        </button>
        <button id="wd-save-button" className="btn btn-success" onClick={() => alert("Assignment saved!")}>
          Save
        </button>
      </div>
    </div>
  );
}
