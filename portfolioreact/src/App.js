import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
import Home from './Home';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';

function App (){
  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<Services />} />
        <Route path="/about" element={<Portfolio />} />
        <Route path="/about" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
