import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// import 'bootstrap/dist/css/bootstrap.min.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';
import { Autoplay, Pagination } from 'swiper/modules';
import AOS from 'aos';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

import {toast,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

import Navbar from './Navbar';
import Footer from './Footer';
// import './StallBooking.css'; // Add custom styles

const StallBooking = () => {
  const rows = {
    Bronze: ['A', 'B'],
    Silver: ['C', 'D', 'E', 'F'],
    Gold: ['G', 'H'],
  };

  const totalSeats = 14;
  const [bookedSeats, setBookedSeats] = useState(['A1', 'A2', 'B6', 'B7', 'B8']); // Sample booked
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSelect = (seatId) => {
    if (bookedSeats.includes(seatId)) return;

    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((id) => id !== seatId)
        : [...prev, seatId]
    );
  };

  const renderSeats = (row) => {
    return [...Array(totalSeats)].map((_, i) => {
      const seatId = `${row}${i + 1}`;
      const isBooked = bookedSeats.includes(seatId);
      const isSelected = selectedSeats.includes(seatId);

      let seatClass = 'seat available';
      if (isBooked) seatClass = 'seat booked';
      else if (isSelected) seatClass = 'seat selected';

      return (
        <div
          key={seatId}
          className={seatClass}
          onClick={() => handleSelect(seatId)}
        >
          {i + 1}
        </div>
      );
    });
  };

  return (
    <div>
      <Navbar/>
    <div className="container">
       <section id="hero" className="hero section dark-background">

      <img src="./assets/img/hero-bg.jpg" alt="" data-aos="fade-in" className=""/>

      <div className="container d-flex flex-column align-items-center text-center mt-auto">
        <h2 data-aos="fade-up" data-aos-delay="100" className="">THE ANNUAL<br/><span>MARKETING</span> CONFERENCE</h2>
        <p data-aos="fade-up" data-aos-delay="200">10-12 December, Downtown Conference Center, New York</p>
        <div data-aos="fade-up" data-aos-delay="300" className="">
          <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox pulsating-play-btn mt-3"></a>
        </div>
      </div>

      <div className="about-info mt-auto position-relative">

        <div className="container position-relative" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6">
              <h2>About The Event</h2>
              <p>Sed nam ut dolor qui repellendus iusto odit. Possimus inventore eveniet accusamus error amet eius aut
                accusantium et. Non odit consequatur repudiandae sequi ea odio molestiae. Enim possimus sunt inventore in
                est ut optio sequi unde.</p>
            </div>
            <div className="col-lg-3">
              <h3>Where</h3>
              <p>Downtown Conference Center, New York</p>
            </div>
            <div className="col-lg-3">
              <h3>When</h3>
              <p>Monday to Wednesday<br/>10-12 December</p>
            </div>
          </div>
        </div>
      </div>

    </section><br />
      <h3 className="text-center bg-danger text-white p-2">SCREEN THIS WAY</h3>
      <div className="legend d-flex justify-content-center my-3">
        <div className="me-3"><span className="seat available"></span> Available</div>
        <div className="me-3 text-danger"><span className="seat booked"></span> Booked</div>
        <div className="me-3 text-success"><span className="seat selected"></span> Selected</div>
      </div>

      {Object.entries(rows).map(([section, sectionRows]) => (
        <div key={section} className="mb-4">
          <h5 className="bg-secondary text-white p-1">{section}</h5>
          {sectionRows.map((row) => (
            <div key={row} className="d-flex align-items-center my-1">
              <div className="me-2 fw-bold">{row}</div>
              <div className="d-flex flex-wrap">{renderSeats(row)}</div>
            </div>
          ))}
        </div>
      ))}

      <div className="text-center">
        <button className="btn btn-success mt-3" onClick={() => alert(`Selected: ${selectedSeats.join(', ')}`)}>
          Confirm Selection
        </button>
      </div><br /><br /><br />
    </div>
        <Footer/>
    </div>
  );
};

export default StallBooking;
