// import React from 'react'
// import Navbar from './Navbar'
// import Footer from './Footer'
// import Sidebar from './Sidebar'
import {toast,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from 'react'
import axios from 'axios'
import {Link, useNavigate } from 'react-router-dom'


export default function Login() {
     let[email,setEmail]=useState("")
    let[pswd,setPswd]=useState("")
    let nav=useNavigate();

    async function admin_login(){
        try {
            await axios.post("http://localhost:4000/eproject/a_log",{
                email:email,
                password:pswd
            }).then((a)=>{
                toast.success(a.data.msg)
                localStorage.setItem("users-data",JSON.stringify(a.data.user))
                setEmail("")
                setPswd("")
                nav("/admin")
            })

        } catch (error) {
            toast.error(error.response.data.msg)
        }
    }
  return (
    <div>
        <div id="wrapper">
        {/* <Sidebar/> */}
        <div id="content-wrapper" className="d-flex flex-column">
        
        <div id="content">
        {/* <Navbar/> */}
       <div className="container">

<div className="row justify-content-center">

    <div className="col-xl-10 col-lg-12 col-md-9">

        <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
                <div className="row">
                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                    <div className="col-lg-6">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                            </div>
                            <form className="user">
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-user"
                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                        placeholder="Enter Email Address..." value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-user"
                                        id="exampleInputPassword" placeholder="Password" value={pswd} onChange={(e)=>setPswd(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox small">
                                        <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                        <label className="custom-control-label" for="customCheck">Remember
                                            Me</label>
                                    </div>
                                </div>
                                <a className="btn btn-primary btn-user btn-block" onClick={admin_login}>
                                    Login
                                </a>
                                {/* <hr/>
                                <a href="index.html" className="btn btn-google btn-user btn-block">
                                    <i className="fab fa-google fa-fw"></i> Login with Google
                                </a>
                                <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                    <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                </a> */}
                            </form>
                            <hr/>
                            <div className="text-center">
                                <Link className="small" to="/a_forget">Forgot Password?</Link>
                            </div>
                            {/* <div className="text-center">
                                <a className="small" href="register.html">Create an Account!</a>
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
</div>
</div>
 <ToastContainer/>
{/* <Footer/> */}
    </div>
  )
}
