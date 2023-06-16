import React from "react";

const Navbar = () =>{
  return (
    <nav>
         <img class="Mylogo" src="mylogo.png" alt="logo"/>
         <ul id="sidemenu">
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
         </ul>
    </nav>
  );
}

export default Navbar;