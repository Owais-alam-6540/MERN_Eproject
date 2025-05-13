import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav classNameName="navbar navbar-expand-lg  ftco_navbar ftco-navbar-light" id="ftco-navbar">
        <div classNameName="container">
          <Link classNameName="navbar-brand" to="/">EventSphere Management</Link>
          <button
            classNameName="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span classNameName="oi oi-menu"></span> Menu
          </button>

          <div classNameName="collapse navbar-collapse" id="ftco-nav">
            <ul classNameName="navbar-nav ml-auto">
              <li classNameName="nav-item active"><Link to="/" classNameName="nav-link">Home</Link></li>
              <li classNameName="nav-item"><Link to="/about" classNameName="nav-link">About</Link></li>
              <li classNameName="nav-item"><Link to="/schedule" classNameName="nav-link">Schedule</Link></li>
              <li classNameName="nav-item"><Link to="/blog" classNameName="nav-link">Events</Link></li>
              <li classNameName="nav-item"><Link to="/contact" classNameName="nav-link">Contact</Link></li>
              <li classNameName="nav-item"><Link to="/feedback" classNameName="nav-link">Feedback</Link></li>

              {/* ✅ Fixed Dropdown Menu */}
              <li classNameName="nav-item dropdown">
                <a
                  classNameName="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Register
                </a>
                <ul classNameName="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link classNameName="dropdown-item" to="/reg_exb">Register As Exhibitor</Link>
                  </li>
                  <li>
                    <Link classNameName="dropdown-item" to="/signUp_vis">Sign Up As Visitor</Link>
                  </li>
                  <li><hr classNameName="dropdown-divider" /></li>
                  <li>
                    <a classNameName="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
