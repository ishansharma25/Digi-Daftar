import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo_light from '../assets/logo-black.png';
import logo_dark from '../assets/logo-white.png';
import toogle_light from '../assets/night.png';
import toogle_night from '../assets/day.png';
import search_light from '../assets/search-w.png';
import search_dark from '../assets/search-b.png';
import indore_logo from '../assets/indore-logo-white.svg';

import './Navbar.css'
export default function Navbar({theme,setTheme}) {
  const [scrolled, setScrolled] = useState(false);
    const toggle_mode=()=>
    {
        theme==='light'?setTheme('dark'):setTheme('light');
    };

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    
  return (
    <div className={`navbar ${theme} ${scrolled ? "navbar-scrolled" : ""}`}>
    <img src={theme=='light'?indore_logo:indore_logo} alt="" className="logo"></img>    
<ul>
    <li>
    <Link to="/" className="nav-link">
            Home
          </Link>
    </li>
    <li>
    <Link to="/login" className="nav-link">
            Login
          </Link>

    </li>
    
</ul>
<div className="search-box">
    <input type="text" placeholder="Search"/>
    <img src={theme=='light'?search_light:search_dark} alt="Search Icon"/>

</div>
<img onClick={()=>{toggle_mode()}} src={theme=='light'?toogle_light:toogle_night} alt="" className="toggle-icon"></img>    
   </div>
  );
}
