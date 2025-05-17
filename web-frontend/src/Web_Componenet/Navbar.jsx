import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar () {
  return (
    <div>
         <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl position-relative d-flex align-items-center">

      <a href="index.html" className="logo d-flex align-items-center me-auto">
        <img src="assets/img/logo.png" alt=""/>
       
        
      </a>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li><Link to="/" className="active">Home<br/></Link></li>
          <li><Link to="/">Speakers</Link></li>
          <li><Link to="/">Schedule</Link></li>
          <li><Link to="/">Venue</Link></li>
          <li><Link to="/">Hotels</Link></li>
          <li><Link to="/">Gallery</Link></li>
          <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><Link to="/log_exb">Login As Exibitor</Link></li>
              {/* <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li> */}
              <li><Link to="/Log_vis">Login As Visitor</Link></li>
              <li><Link to="/feedback">Feedback</Link></li>
              <li><a href="#">Rating Us</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <a className="cta-btn d-none d-sm-block" href="#buy-tickets">Buy Tickets</a>

    </div>
  </header>
    </div>
  )
}
