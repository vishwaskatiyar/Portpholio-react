import { NavLink } from "react-router-dom";

export const NaVbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navber-items">
            <NavLink to="/" className="navbar-link">
              About
            </NavLink>
          </li>
          <li className="navber-items">
            <NavLink to="/resume" className="navbar-link">
              Resume
            </NavLink>
          </li>

          <li className="navber-items">
            <NavLink to="/portfolio" className="navbar-link">
              Portfolio
            </NavLink>
          </li>
          <li className="navber-items">
            <NavLink to="/blogs" className="navbar-link">
              Blog
            </NavLink>
          </li>
          <li className="navber-items">
            <NavLink to="/contact" className="navbar-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NaVbar;
