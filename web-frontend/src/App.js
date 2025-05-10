// import logo from './logo.svg';
import './App.css';

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
      

      <Route path="/admin" element={<A_Index />}/>
      <Route path="/tables" element={<Table />}/>
        <Route path="/cards" element={<Card />}/>
        <Route path="/login" element={<Login />}/> 
        <Route path="/register" element={<Register />}/> 
        <Route path="/blank" element={<Blank />}/> 
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
