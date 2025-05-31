import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const ShowStalls = () => {
  const [stalls, setStalls] = useState([]);
  const [filteredStalls, setFilteredStalls] = useState([]);
  const [halls, setHalls] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedHall, setSelectedHall] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [stallRes, hallRes] = await Promise.all([
          axios.get("http://localhost:4000/eproject/stalls/"),
          axios.get("http://localhost:4000/eproject/halls/"),
        ]);
        setStalls(stallRes.data);
        setFilteredStalls(stallRes.data);
        setHalls(hallRes.data);
      } catch (err) {
        console.error("Error fetching data:", err.message);
        setError("Failed to load stalls. Please try again.");
      }
    };

    fetchData();
  }, []);

  // Get hall number by ID
  const getHallNo = (hallId) => {
    const hall = halls.find((h) => h._id === hallId);
    return hall ? hall.hall_no : "N/A";
  };

  // Filter logic
  useEffect(() => {
    let results = [...stalls];

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      results = results.filter(
        (s) =>
          s.name?.toLowerCase().includes(term) ||
          s.stall_no?.toLowerCase().includes(term)
      );
    }

    if (selectedHall) {
      results = results.filter((s) => s.hall === selectedHall);
    }

    setFilteredStalls(results);
  }, [searchTerm, selectedHall, stalls]);

  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />
          <main className="container py-5">
            <h2 className="mb-4">All Stalls</h2>

            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            {/* Search & Filter Controls */}
            <div className="row mb-4">
              <div className="col-md-6 mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by stall name or number..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="col-md-6 mb-2">
                <select
                  className="form-select"
                  value={selectedHall}
                  onChange={(e) => setSelectedHall(e.target.value)}
                >
                  <option value="">-- Filter by Hall --</option>
                  {halls.map((hall) => (
                    <option key={hall._id} value={hall._id}>
                      {hall.hall_no}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Stall Cards */}
            <div className="row">
              {filteredStalls.length === 0 ? (
                <p>No stalls found.</p>
              ) : (
                filteredStalls.map((stall) => (
                  <div className="col-md-6 col-lg-4 mb-4" key={stall._id}>
                    <div className="card shadow-sm h-100">
                      <div className="card-body">
                        <h5 className="card-title">
                          {stall.name}{" "}
                          <span className="badge bg-primary float-end">
                            {stall.stall_no}
                          </span>
                        </h5>
                        <p className="card-text mb-1">
                          <strong>Capacity:</strong>{" "}
                          {stall.capacity || "N/A"}
                        </p>
                        <p className="card-text mb-1">
                          <strong>Description:</strong>{" "}
                          {stall.description || "—"}
                        </p>
                        <p className="card-text">
                          <strong>Hall:</strong> {getHallNo(stall.hall)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ShowStalls;
