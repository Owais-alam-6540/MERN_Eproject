import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "bootstrap-icons/font/bootstrap-icons.css"

export default function Rating_details() {
    let [contact_data, setContact_data] = useState([]);
  
      
    useEffect(()=>{
        get_data();
    }, [])

    async function get_data() {
        
            await axios.get("http://localhost:4000/eproject/get_cont").then((abc)=> {
            console.log(abc.data);
            setContact_data(abc.data);
        }).
        catch((e)=> {
            console.log(e)
        })
    }
  return (
    <div>
    <div id="wrapper">
           <Sidebar/>
           <div id="content-wrapper" className="d-flex flex-column">
           
           <div id="content">
           <Navbar/>
          <div className="row">
          <h1 className="h3 mb-2 text-gray-800">Rating Details</h1>
   <div className="col-lg-6">
       {(contact_data.length === 0 ) ? (
               <div className="col-md-12">
                   <div className="card">
                       <div className="card-body">
                           <h4 className='card-title text-danger'>Data Not Found</h4>
                       </div>
                   </div>
               </div>
           ):contact_data.map((a)=>(
                   <div className="card shadow mb-4"key={a.id}>
           <a href="#collapseCardExample" className="d-block card-header py-3" data-toggle="collapse"
               role="button" aria-expanded="true" aria-controls="collapseCardExample">
               <h6 className="m-0 font-weight-bold text-primary">{a.name}</h6>
           </a>
           <div className="collapse show" id="collapseCardExample">
               <div className="card-body">
                   <p>{a.email}</p>
                   <p>{a.subject}</p>
                   <p>{a.msg}</p>
               </div>
               <hr />
              
           </div>
       </div>
           ))
           }
   
       {/* <div className="card shadow mb-4">
           <a href="#collapseCardExample" className="d-block card-header py-3" data-toggle="collapse"
               role="button" aria-expanded="true" aria-controls="collapseCardExample">
               <h6 className="m-0 font-weight-bold text-primary">Collapsable Card Example</h6>
           </a>
           <div className="collapse show" id="collapseCardExample">
               <div className="card-body">
                   This is a collapsable card example using Bootstrap's built in collapse
                   functionality. <strong>Click on the card header</strong> to see the card body
                   collapse and expand!
               </div>
               <hr />
               <button classNameName='btn btn-outline-danger'>Delete</button>
           </div>
       </div> */}
   
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
