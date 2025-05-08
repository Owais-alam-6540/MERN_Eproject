// import logo from './logo.svg';
import './App.css';

import Index from './Web_Components/Index';
import Navbar from './Web_Components/Navbar';
import Footer from './Web_Components/Footer';
import Contact from './Web_Components/Contact';
import About from './Web_Components/About';
import Blog from './Web_Components/Blog';
import Schedule from './Web_Components/Schedule';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
     <Routes>
      <Route path="/" element={<Index />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/blog" element={<Blog />}/>
      <Route path="/schedule" element={<Schedule />}/>
     </Routes>
     <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
