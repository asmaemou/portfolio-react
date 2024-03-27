import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
// import Chat from "./pages/Chat";

function App() {
  return (
    <>
      <Navbar /> 
      <HashRouter>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/chat" element={<Chat />} /> */}
      </HashRouter>
    </>
  );
}
export default App;