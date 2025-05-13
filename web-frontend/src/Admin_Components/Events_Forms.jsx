import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'

export default function Events_Forms() {
        
  return (
     <div>
            <div id="wrapper">
            <Sidebar/>
            <div id="content-wrapper" className="d-flex flex-column">
            
            <div id="content">
            <Navbar/>
          <div className="container">
    
    <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
            <div className="row">
                <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                <div className="col-lg-7">
                    <div className="p-5">
                        <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Events Form</h1>
                        </div>
                        <form className="user">
                            <div className="form-group row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                        placeholder="Event's Title"/>
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control form-control-user" id="exampleLastName"
                                        placeholder="Event's Theme"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea name='description' className="form-control form-control-user" id="exampleInputEmail"
                                    placeholder="Envent's Description"/>
                            </div>
                            <a href="login.html" className="btn btn-primary btn-user btn-block">
                                Register Account
                            </a>
                            <hr/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </div>
    </div>
    </div>
    </div>
    <Footer/>
        </div>
  )
}
