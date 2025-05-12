// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js";
// import "bootstrap-icons/font/bootstrap.icons.css"


import Index from './Web_Components/Index';

import Contact from './Web_Components/Contact';
import About from './Web_Components/About';
import Blog from './Web_Components/Blog';
import Schedule from './Web_Components/Schedule';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



import A_Index from './Admin_Components/A_Index';
import Table from './Admin_Components/Table';
import Card from './Admin_Components/Card';
import Login from './Admin_Components/Login';
import Register from './Admin_Components/Register';
import Blank from './Admin_Components/Blank';
import Events_Forms from './Admin_Components/Events_Forms';
import Feedback from './Web_Components/Feedback';
import Reg_For_Exb from './Web_Components/Reg_For_Exb';
import SignUP_vis from './Web_Components/SignUP_vis';
import ContactUs_details from './Admin_Components/ContactUs_details';
import Feedback_details from './Admin_Components/Feedback_details';


function App() {
  return (
    <BrowserRouter>
    <div className="App">

     <Routes>
      <Route path="/" element={<Index />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/blog" element={<Blog />}/>
      <Route path="/schedule" element={<Schedule />}/>
      <Route path="/feedback" element={<Feedback />}/>
      <Route path="/reg_exb" element={<Reg_For_Exb />}/> 
      <Route path="/signUp_vis" element={<SignUP_vis />}/> 
      

      <Route path="/admin" element={<A_Index />}/>
      <Route path="/tables" element={<Table />}/>
      <Route path="/cards" element={<Card />}/>
      <Route path="/login" element={<Login />}/> 
      <Route path="/register" element={<Register />}/> 
      <Route path="/blank" element={<Blank />}/>
      <Route path="/event" element={<Events_Forms />}/>
      <Route path="/con_details" element={<ContactUs_details />}/>
      <Route path="/feed_details" element={<Feedback_details />}/>


     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
