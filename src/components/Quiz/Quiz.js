import { Link } from "react-router-dom";
// import { MenuItem, TextField } from "@material-ui/core";
export default function Quiz(params) {
  return (
    <div className="Subject">
      <p>Select Subject</p>
      <div className="links">
        <Link className="Sub-link" to="/HTML">
          HTML
        </Link>
        <Link className="Sub-link" to="/JavaScript">
          Java Script
        </Link>
        <Link className="Sub-link" to="/PHP">
          PHP
        </Link>
        <Link className="Sub-link" to="/WordPress">
          WordPress
        </Link>
      </div>
    </div>
  );
}
