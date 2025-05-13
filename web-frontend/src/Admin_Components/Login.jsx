// import React from 'react'
// import Navbar from './Navbar'
// import Footer from './Footer'
// import Sidebar from './Sidebar'
import {toast,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'


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
        <div id="content-wrapper" class="d-flex flex-column">
        
        <div id="content">
        {/* <Navbar/> */}
       <div class="container">

<div class="row justify-content-center">

    <div class="col-xl-10 col-lg-12 col-md-9">

        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <div class="row">
                    <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                    <div class="col-lg-6">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                            </div>
                            <form class="user">
                                <div class="form-group">
                                    <input type="email" class="form-control form-control-user"
                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                        placeholder="Enter Email Address..." value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control form-control-user"
                                        id="exampleInputPassword" placeholder="Password" value={pswd} onChange={(e)=>setPswd(e.target.value)}/>
                                </div>
                                <div class="form-group">
                                    <div class="custom-control custom-checkbox small">
                                        <input type="checkbox" class="custom-control-input" id="customCheck"/>
                                        <label class="custom-control-label" for="customCheck">Remember
                                            Me</label>
                                    </div>
                                </div>
                                <a class="btn btn-primary btn-user btn-block" onClick={admin_login}>
                                    Login
                                </a>
                                {/* <hr/>
                                <a href="index.html" class="btn btn-google btn-user btn-block">
                                    <i class="fab fa-google fa-fw"></i> Login with Google
                                </a>
                                <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                    <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                </a> */}
                            </form>
                            <hr/>
                            <div class="text-center">
                                <a class="small" href="forgot-password.html">Forgot Password?</a>
                            </div>
                            {/* <div class="text-center">
                                <a class="small" href="register.html">Create an Account!</a>
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
