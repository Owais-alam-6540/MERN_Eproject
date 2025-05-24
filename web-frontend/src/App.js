// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js";
// import "bootstrap-icons/font/bootstrap.icons.css"

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import A_Index from './Admin_Components/A_Index';
import Table from './Admin_Components/Table';
import Card from './Admin_Components/Card';
import Login from './Admin_Components/Login';
import Register from './Admin_Components/Register';
import Blank from './Admin_Components/Blank';
import Events_Forms from './Admin_Components/Events_Forms';
import ContactUs_details from './Admin_Components/ContactUs_details';
import Feedback_details from './Admin_Components/Feedback_details';
import Rating_details from './Admin_Components/Rating_details';
import Feedback from './Web_Componenet/Feedback';
import Index from './Web_Componenet/Index';
import Login_exb from './Web_Componenet/Login_exb';
import Login_vis from './Web_Componenet/Login_vis';
import Register_vis from './Web_Componenet/Register_vis';
import Register_exb from './Web_Componenet/Register_exb';
import Forget from './Web_Componenet/Forget';
import Forget_as_exb from './Web_Componenet/Forget_as_exb';
import A_forget from './Admin_Components/A_forget';
import Event_details from './Admin_Components/Event_details';
import Reset_as_exb from  './Web_Componenet/Reset_as_exb';
import Reset from  './Web_Componenet/Reset';
import Reset_as_vis from  './Web_Componenet/Resert_as_vis';
import Stall from './Web_Componenet/Stall';





function App() {
  return (
    <BrowserRouter>
    <div className="App">

     <Routes>
     
     

      <Route path="/admin" element={<A_Index />}/>
      <Route path="/tables" element={<Table />}/>
      <Route path="/cards" element={<Card />}/>
      <Route path="/login" element={<Login />}/> 
      <Route path="/register" element={<Register />}/> 
      <Route path="/blank" element={<Blank />}/>
      <Route path="/event" element={<Events_Forms />}/>
      <Route path="/event_details" element={<Event_details />}/>
      <Route path="/con_details" element={<ContactUs_details />}/>
      <Route path="/feed_details" element={<Feedback_details />}/>
      <Route path="/rat_details" element={<Rating_details />}/>
      <Route path="/a_forgot" element={<A_forget />}/>




      <Route path='/' element={<Index/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/reg_vis' element={<Register_vis/>}/>
        <Route path='/reg_exb' element={<Register_exb/>}/>
        <Route path='/log_vis' element={<Login_vis/>}/>
        <Route path='/log_exb' element={<Login_exb/>}/>
        <Route path='/forget' element={<Forget/>}/>
        <Route path='/reset' element={<Reset/>}/>

        <Route path='/exb_forget' element={<Forget_as_exb/>}/>
        <Route path='/exb_reset/:token' element={<Reset_as_exb/>}/>
        <Route path='/vis_reset/:token' element={<Reset_as_vis/>}/>
        <Route path='/stall' element={<Stall/>}/>





     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
