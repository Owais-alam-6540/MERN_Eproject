import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const booths = [
  ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8"],
  ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8"],
  ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8"],
];

const initialStatus = {};
booths.flat().forEach((booth) => (initialStatus[booth] = "available"));

export default function Stall() {
  const [status, setStatus] = useState(initialStatus);

  const toggleBooth = (booth) => {
    setStatus((prev) => {
      const newStatus = { ...prev };
      newStatus[booth] =
        newStatus[booth] === "selected" ? "available" : "selected";
      return newStatus;
    });
  };

  const getColor = (booth) => {
    switch (status[booth]) {
      case "available":
        return "bg-green-300";
      case "selected":
        return "bg-blue-400";
      case "booked":
        return "bg-red-400 cursor-not-allowed";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navbar */}
      <Navbar />

      {/* Main content - growable middle */}
      <main className="flex-grow p-4">
        <h2 className="text-xl font-bold mb-4 text-center">Booth Booking</h2>
        <div className="space-y-2 flex flex-col items-center">
          {booths.map((row, rowIndex) => (
            <div key={rowIndex} className="flex space-x-2">
              {row.map((booth) => (
                <button
                  key={booth}
                  onClick={() =>
                    status[booth] !== "booked" && toggleBooth(booth)
                  }
                  className={`w-12 h-12 rounded ${getColor(
                    booth
                  )} text-sm font-medium text-white`}
                >
                  {booth}
                </button>
              ))}
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
}
