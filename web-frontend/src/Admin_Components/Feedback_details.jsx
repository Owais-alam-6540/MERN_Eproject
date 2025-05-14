// import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "bootstrap-icons/font/bootstrap-icons.css"


export default function Feedback_details() {
    let [feed_data, setFeed_data] = useState([]);

    
    useEffect(()=>{
        get_data();
    }, [])

    async function get_data() {
        
            await axios.get("http://localhost:4000/eproject/get_feed").then((abc)=> {
            console.log(abc.data);
            setFeed_data(abc.data);
        }).
        catch((e)=> {
            console.log(e)
        })
    }

    async function delete_data(id) {
        try {
            if (window.confirm("Are You Sure You Want To Delete This User")) {
                await axios.delete(`http://localhost:4000/eproject/del_feed/${id}`).then(()=> {
                    get_data();
                    toast.info("This User's Data Has Been Deleted Successfully")
                })
            }
        } catch (error) {
            toast.error(error.response.data.msg)
        }
    }

  return (
    <div>
        <div id="wrapper">
        <Sidebar/>
        <div id="content-wrapper" className="d-flex flex-column">
        
        <div id="content">
        <Navbar/>
       <div className="row">
       <h1 className="h3 mb-2 text-gray-800">Feedback Details</h1>
<div className="col-lg-6">
    {(feed_data.length === 0 ) ? (
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <h4 className='card-title text-danger'>Data Not Found</h4>
                    </div>
                </div>
            </div>
        ):feed_data.map((a)=>(
                <div className="card shadow mb-4"key={a.id}>
        <a href="#collapseCardExample" className="d-block card-header py-3" data-toggle="collapse"
            role="button" aria-expanded="true" aria-controls="collapseCardExample">
            <h6 className="m-0 font-weight-bold text-primary">{a.name}</h6>
        </a>
        <div className="collapse show" id="collapseCardExample">
            <div className="card-body">
                <p>{a.email}</p>
                <p>{a.msg}</p>
            </div>
            <hr />
            <button classNameName='btn btn-outline-danger' onClick={()=> {delete_data(a._id)}}><i class="bi bi-trash3-fill"></i></button>
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
