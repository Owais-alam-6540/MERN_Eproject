import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'

export default function Events_Forms() {
  return (
    <div>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />
            <div className="container py-5">
              <div className="card shadow-lg border-0">
                <div className="row g-0">
                  {/* Optional left image or branding section */}
                  <div className="col-lg-5 d-none d-lg-flex align-items-center justify-content-center bg-primary text-white">
                    <div className="text-center p-4">
                      <h2 className="fw-bold">Event Management</h2>
                      <p>Create and manage events easily!</p>
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="p-5">
                      <div className="text-center mb-4">
                        <h1 className="h4 text-gray-900">Create New Event</h1>
                      </div>

                      <form>
                        <div className="row mb-3">
                          <div className="col-sm-6">
                            <label className="form-label">Event Title</label>
                            <input type="text" className="form-control" placeholder="Enter event title" />
                          </div>
                          <div className="col-sm-6">
                            <label className="form-label">Event Theme</label>
                            <input type="text" className="form-control" placeholder="Enter event theme" />
                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Event Description</label>
                          <textarea className="form-control" rows="4" placeholder="Enter event description"></textarea>
                        </div>

                        <div className="row mb-3">
                          <div className="col-sm-6">
                            <label className="form-label">Start Date</label>
                            <input type="date" className="form-control" />
                          </div>
                          <div className="col-sm-6">
                            <label className="form-label">End Date</label>
                            <input type="date" className="form-control" />
                          </div>
                        </div>

                        <button type="submit" className="btn btn-primary w-100">
                          Submit Event
                        </button>
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      <Footer />
    </div >
  )
}
