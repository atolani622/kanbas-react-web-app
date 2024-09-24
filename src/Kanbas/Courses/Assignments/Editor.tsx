export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" placeholder="100" />
          </td>
        </tr>
        {<tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group"> Assignment Group </label>
          </td>
          <td>
            <select id="wd-group">
              <option selected value="Assignments">ASSIGNMENTS</option>
              <option value="Quizes">QUIZZES</option>
              <option value="Exams">
                EXAMS</option>
              <option value="Project">PROJECT</option>
            </select>
          </td>
        </tr>}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as"> Display Grade As</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="Percentage"> Percentage </option>
              <option value="Whole"> Whole</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type"> Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="Online"> Online </option>
            </select>
          </td>
        </tr>
        <td align="right" valign="top">
        </td>
        <label>Online Submission Options:</label><br />
        <input type="checkbox" name="submission-type" id="wd-text-entry" />
        <label htmlFor="wd-text-entry">Text Entry</label><br />

        <input type="checkbox" name="submission-type" id="wd-website-url" />
        <label htmlFor="wd-website-url">Website URL</label><br />

        <input type="checkbox" name="submission-type" id="wd-media-recordings" />
        <label htmlFor="wd-media-recordings">Media Recordings</label><br />

        <input type="checkbox" name="submission-type" id="wd-student-annotation" />
        <label htmlFor="wd-student-annotation">Student Annotation</label> <br />

        <input type="checkbox" name="submission-type" id="wd-file-upload" />
        <label htmlFor="wd-file-upload">File Upload</label> <br />

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assgin-to">Assign</label>
          </td>
          <td>
            <input id="wd-assign-to" placeholder="Everyone" />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due-date">Due Date</label>
          </td>
          <td>
            <input type="date"
              id="wd-due-date" />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-from">Available From</label>
          </td>
          <td>
            <input type="date"
              id="wd-available-from" />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-until">Available Until</label>
          </td>
          <td>
            <input type="date"
              id="wd-available-until" />
          </td>
        </tr>
        <button id="wd-cancel-button" onClick={() => alert("Assignment cancelled!")} type="button">
          Cancel!
        </button>
        <button id="wd-save-button" onClick={() => alert("Assignment saved!")} type="button">
          Save!
        </button>
      </table>
    </div>
  );
}
