import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Feedback_details() {
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


    <div className="card shadow mb-4">
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
