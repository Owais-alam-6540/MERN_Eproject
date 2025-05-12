import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'
import {useNavigate } from 'react-router-dom'
import {toast,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
export default function Register() {
    let[fname,setFname]=useState("");
    let[lname,setLname]=useState("");
    let[email,setEmail]=useState("");
    let[phone,setPhone]=useState("");
    let[pswd,setPswd]=useState(0);
    let nav=useNavigate();

    function clear(){
        setFname("");
        setLname("");
        setEmail("");
        setPhone(0);
        setPswd("");
    }


    async function areg_data() {
    try {
            let fn_re=/^[A-Za-z_-]{3,20}$/
            let ln_re=/^[A-Za-z_-]{3,20}$/
            let p_re=/^(?:\+?\d{1,3})?[03]\d{9}$/
            let pass_re=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/
            
      if (!fname ||!lname || !email || !phone || !pswd) {
        toast.error("All Fields Are Empty Please Fill All Required Fields")
      } else if(!pass_re.test(pswd)) {
        toast.error("Password Invalid")
      } else if(!fn_re.test(fname)) {
        toast.error("First Name Invalid")
      }else if(!ln_re.test(lname)) {
        toast.error("Last Name Invalid")
      } else if(!p_re.test(phone)) {
        toast.error("Phone no Invalid")
      } else {
        await axios.post("http://localhost:4000/eproject/a_reg", {
            f_name:fname,
            l_name:lname,
            email:email,
            phone:phone,
            password:pswd
    })
    console.log("Data Saved Successfully");
    toast.success("Data Saved Successfully");
    clear();
    nav("/admin");
      }} catch (error) {
      if (error.status === 409) {
        toast.error("Email Has Already Exist")
      } else {
        toast.error(error)
      console.log(error)}}}

  return (
    <div>
        <div id="wrapper">
        <Sidebar/>
        <div id="content-wrapper" class="d-flex flex-column">
        
        <div id="content">
        <Navbar/>
      <div class="container">

<div class="card o-hidden border-0 shadow-lg my-5">
    <div class="card-body p-0">
        <div class="row">
            <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div class="col-lg-7">
                <div class="p-5">
                    <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                    </div>
                    <form class="user">
                        <div class="form-group row">
                            <div class="col-sm-6 mb-3 mb-sm-0">
                                <input type="text" class="form-control form-control-user" id="exampleFirstName"
                                    placeholder="First Name" value={fname} onChange={(e)=>setFname(e.target.value)}/>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" class="form-control form-control-user" id="exampleLastName"
                                    placeholder="Last Name" value={lname} onChange={(e)=>setLname(e.target.value)}/>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control form-control-user" id="exampleInputEmail"
                                placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-6 mb-3 mb-sm-0">
                                <input type="text" class="form-control form-control-user"
                                    id="exampleInputPassword" placeholder="Phone Number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                            </div>
                            <div class="col-sm-6">
                                <input type="password" class="form-control form-control-user"
                                    id="exampleRepeatPassword" placeholder="Password" value={pswd} onChange={(e)=>setPswd(e.target.value)}/>
                            </div>
                        </div>
                        <a class="btn btn-primary btn-user btn-block" onClick={areg_data}>
                            Register Account
                        </a>
                        <hr/>
                        <a href="index.html" class="btn btn-google btn-user btn-block">
                            <i class="fab fa-google fa-fw"></i> Register with Google
                        </a>
                        <a href="index.html" class="btn btn-facebook btn-user btn-block">
                            <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                        </a>
                    </form>
                    {/* <hr/>
                    <div class="text-center">
                        <a class="small" href="forgot-password.html">Forgot Password?</a>
                    </div>
                    <div class="text-center">
                        <a class="small" href="login.html">Already have an account? Login!</a>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
</div>

</div>
</div>
</div>
</div>
<ToastContainer/>
<Footer/>
    </div>
  )
}
