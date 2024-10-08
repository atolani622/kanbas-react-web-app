import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input placeholder="username" id="wd-username" className="form-control mb-2"/>
      <input placeholder="password" type="password"
             id="wd-password" className="form-control mb-2"/>
      <input placeholder="First Name" id="wd-firstname" className="form-control mb-2" />
      <input placeholder="Last Name" id="wd-lastname" className="form-control mb-2" />
      <input type="date" id="wd-dob" className="form-control mb-2" />
      <input placeholder = "email" type="email" id="wd-email" className="form-control mb-2" />
      <select defaultValue="FACULTY" id="wd-role" className="form-control mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <Link to="/Kanbas/Account/Signin"
       className="btn btn-danger w-100" >Sign out</Link>
    </div>
);}
