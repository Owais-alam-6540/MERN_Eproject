import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar';

export default function Blank() {
  return (
    <>
    <div id="wrapper">
    <Sidebar/>
    <div id="content-wrapper" className="d-flex flex-column">
    
    <div id="content">
    <Navbar/>
      <div className="container-fluid">


<h1 className="h3 mb-4 text-gray-800">Blank Page</h1>

</div>
</div>
</div>
</div>
<Footer/>
    </>
  )
}
