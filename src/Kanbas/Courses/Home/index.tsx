import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <table id="wd-home">
      <tr>
        <td valign = "top">
          <button>Collapse All</button>
          <button>View Progress</button>
          <select id="wd-select-publish">
                <option selected value="Publish All">Publish All</option>
                <option value="Publish One">Publish One</option>
            </select>
          <button>+Module</button>
        </td>
      </tr>
      <tr>
        <td valign="top">
          <Modules />
        </td>
        <td valign="top">
          <CourseStatus />
        </td>
      </tr>
    </table>
  );
}
