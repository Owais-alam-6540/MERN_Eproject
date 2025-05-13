import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {toast,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

export default function Feedback() {

  let[name,setName]=useState("");
  let[email,setEmail]=useState("");
  let[msg,setMsg]=useState("");

  function clear(){
    setName("");
    setEmail("");
    setMsg("");
}

async function save_feed(e) {
  try {     
      e.preventDefault();
      await axios.post("http://localhost:4000/eproject/a_feed", {
          name:name,
          email:email,
          msg:msg
  })
  console.log("Thanks For Your Feedback");
  toast.success("Thanks For Your Feedback");
  clear();
    } catch (error) {
      toast.error(error)
    }
  }

  return (
    <div>
       <Navbar/>
              <section className="hero-wrap hero-wrap-2 js-fullheight" style={{backgroundImage: `url('web/images/bg_2.jpg');`}} data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="container">
              <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
                <div className="col-md-9 ftco-animate pb-5">
                  <h1 className="mb-3 bread">Contact</h1>
                  <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward"></i></a></span> <span>Contact <i className="ion-ios-arrow-forward"></i></span></p>
                </div>
              </div>
            </div>
          </section>
            
            <section className="ftco-section contact-section">
            <div className="container">
              <div className="row d-flex mb-5 contact-info">
                <div className="col-md-12 mb-4">
                  <h2 className="h3">Feedback Form</h2>
                </div>
                <div className="w-100"></div>
                <div className="col-md-3">
                  <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
                <div className="col-md-3">
                  <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                </div>
                <div className="col-md-3">
                  <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                </div>
                <div className="col-md-3">
                  <p><span>Website</span> <a href="#">yoursite.com</a></p>
                </div>
              </div>
              <div className="row block-9">
                <div className="col-md-6 order-md-last d-flex">
                  <form className="bg-light p-5 contact-form">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Your Name" value={name} onChange={(e)=> setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Your Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                      <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Give Us Feedback About Our Management Or Something else!" value={msg} onChange={(e)=> setMsg(e.target.value)}></textarea>
                    </div>
                    <div className="form-group">
                      <input onClick={save_feed} type='button' value="Send Message" className="btn btn-primary py-3 px-5"/>
                    </div>
                  </form>
                
                </div>
      
                <div className="col-md-6 d-flex">
                    <div id="map" className="bg-white"></div>
                </div>
              </div>
            </div>
          </section>
          <ToastContainer/>
          <Footer/>
    </div>
  )
}
