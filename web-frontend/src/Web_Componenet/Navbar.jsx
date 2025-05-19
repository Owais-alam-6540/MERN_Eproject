import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar () {
  const [showModal, setShowModal] = useState(false);
const [email, setEmail] = useState(""); // from auth context or state
const [rating, setRating] = useState(0);

// Assume you have auth state or context like this
const isLoggedIn = Boolean(localStorage.getItem("userEmail")); // or useContext(AuthContext)

const handleRateUsClick = () => {
  if (!isLoggedIn) {
    window.location.href = "/log_vis"; // redirect to visitor login
  } else {
    setEmail(localStorage.getItem("userEmail")); // get email from storage
    setShowModal(true);
  }
};

const handleSubmitRating = async () => {
  try {
    const res = await fetch("http://localhost:4000/api/rate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, stars: rating })
    });
    const data = await res.json();
    alert("Thank you for rating us!");
    setShowModal(false);
  } catch (err) {
    console.error(err);
    alert("Error submitting rating.");
  }
};

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
              {/* <li><a href="#">Rating Us</a></li> */}
              {/* <li><a href="#">Dropdown 4</a></li> */}
            </ul>
          </li>
          <li><a href="#contact">Contact</a></li>
          <li className="nav-item">
  <button
    className="btn btn-outline-warning rounded-pill ms-2"
    onClick={handleRateUsClick}
  >
    Rate Us
  </button>
</li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <a className="cta-btn d-none d-sm-block" href="#buy-tickets">Buy Tickets</a>

    </div>
  </header>

  {showModal && (
  <div className="modal show fade d-block" tabIndex="-1">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Rate Our Event</h5>
          <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
        </div>
        <div className="modal-body text-center">
          <p>Your Email: <strong>{email}</strong></p>
          <div className="mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <i
                key={star}
                className={`bi bi-star${star <= rating ? "-fill" : ""} fs-3 text-warning`}
                onClick={() => setRating(star)}
                style={{ cursor: "pointer" }}
              ></i>
            ))}
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={handleSubmitRating}>
            Submit Rating
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  )
}
