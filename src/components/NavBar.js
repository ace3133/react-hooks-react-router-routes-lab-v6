import { NavLink } from "react-router-dom";
import "./NavBar.css";


function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/directors" className="nav-link">
          Directors
        </NavLink>
        <NavLink to="/actors" className="nav-link">
          Actors
        </NavLink>
      </nav>
    </div>
  );
};


export default NavBar;
