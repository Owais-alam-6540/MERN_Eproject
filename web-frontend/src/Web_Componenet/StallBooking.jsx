import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const StallBooking = () => {
  const navigate = useNavigate();

  const [stalls, setStalls] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('exhibitor_data'));
    if (!user) {
      navigate('/log_exb');
      return;
    }
    fetchStalls();
  }, []);

  // -----------------------------
  // 1) fetchStalls: bookedSeats ko "<hallNo>_<stall_no>" format mein set karo
  // -----------------------------
  const fetchStalls = async () => {
    try {
      const res = await axios.get('http://localhost:4000/eproject/stalls/');
      console.log('Stalls from backend:', res.data);
      setStalls(res.data);

      const booked = res.data
        .filter(stall => stall.isBooked)
        .map(stall => {
          const hallNo = stall.hall && stall.hall.hall_no
            ? stall.hall.hall_no
            : 'Unknown';
          return `${hallNo}_${stall.stall_no}`;
        });
      setBookedSeats(booked);
    } catch (error) {
      toast.error("Failed to load stalls");
      console.error(error);
    }
  };

  // -----------------------------
  // 2) handleSelect: booked stall pe click pe kuch nahi hoga
  // -----------------------------
  const handleSelect = (seatId) => {
    if (bookedSeats.includes(seatId)) return; // agar booked hai to ignore

    setSelectedSeats(prev =>
      prev.includes(seatId)
        ? prev.filter(id => id !== seatId)
        : [...prev, seatId]
    );
  };

  // -----------------------------
  // 3) handleConfirm: selectedSeats wali array backend ko bhejo
  // -----------------------------
  const handleConfirm = async () => {
    const user = JSON.parse(localStorage.getItem('exhibitor_data'));
    if (!user || !user.id) {
      toast.error("Login required to book");
      return;
    }

    try {
      await axios.post(
        'http://localhost:4000/api/stalls/book',
        {
          visitorId: user.id,
          selectedStalls: selectedSeats,
        },
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );
      toast.success("Stalls booked successfully!");
      setBookedSeats(prev => [...prev, ...selectedSeats]);
      setSelectedSeats([]);
      fetchStalls(); // fresh data ke liye dobara fetch karo
    } catch (err) {
      toast.error(err.response?.data?.message || "Booking failed");
      console.error(err.response?.data || err);
    }
  };

  // -----------------------------
  // 4) Group stalls by hall_no
  // -----------------------------
  const groupedByHall = stalls.reduce((groups, stall) => {
    const hall = stall.hall && stall.hall.hall_no ? stall.hall.hall_no : 'Unknown Hall';
    if (!groups[hall]) groups[hall] = [];
    groups[hall].push(stall);
    return groups;
  }, {});

  return (
    <>
      <Navbar />
      <div className="container py-4">
        <h3 className="text-center bg-danger text-white p-2">Book Your Stalls Or Booth</h3>

        <div className="legend d-flex justify-content-center my-3">
          <div className="me-3"><span className="seat available"></span> Available</div>
          <div className="me-3 text-danger"><span className="seat booked"></span> Booked</div>
          <div className="me-3 text-success"><span className="seat selected"></span> Selected</div>
        </div>

        {Object.entries(groupedByHall).map(([hall, stallsInHall]) => (
          <div key={hall} className="mb-4">
            <h4 className="bg-primary text-white p-2">Hall {hall}</h4>
            <div className="d-flex flex-wrap justify-content-center">
              {stallsInHall.map(stall => {
                // Generate the unique seatId exactly waisa hi jaisa bookedSeats mein hai
                const seatId = `${hall}_${stall.stall_no}`;
                const isBooked = bookedSeats.includes(seatId);
                const isSelected = selectedSeats.includes(seatId);

                // CSS class for styling
                let seatClass = "seat available";
                if (isBooked) seatClass = "seat booked";
                else if (isSelected) seatClass = "seat selected";

                return (
                  <div
                    key={stall._id}
                    className={seatClass}
                    onClick={() => handleSelect(seatId)}
                    style={{
                      margin: 5,
                      padding: 12,
                      borderRadius: 6,
                      cursor: isBooked ? "not-allowed" : "pointer",
                      border: "1px solid #ccc",
                      userSelect: "none",
                      minWidth: "50px",
                      textAlign: "center",
                      backgroundColor: isBooked
                        ? "#f44336"          // booked seats ke liye red
                        : isSelected
                        ? "#4caf50"          // selected seats ke liye green
                        : "#e0e0e0",         // available ke liye grey
                      color: isBooked ? "white" : "black",
                      fontWeight: "bold"
                    }}
                    title={`Stall ${stall.stall_no} ${isBooked ? "(Booked)" : ""}`}
                  >
                    {stall.stall_no}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="text-center mt-4">
          <button
            className="btn btn-success"
            onClick={handleConfirm}
            disabled={selectedSeats.length === 0}
          >
            Confirm Selection
          </button>
        </div>
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
};

export default StallBooking;
