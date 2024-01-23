import React from 'react';

import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Contact from './components/Contact/Contact';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
          <Navbar />
          <Home />
          <Footer />
        </>} />
        <Route path="/contactus" element={<>
          <Navbar />
          <Contact />
          <Footer />
        </>} />
      </Routes>
    </Router>
  );
}

export default App;

