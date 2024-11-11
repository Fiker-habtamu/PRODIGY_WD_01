import React, { useEffect, useState } from 'react'
import './Header.css'
import { CiMenuBurger } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

   useEffect(() => {
     const handleResize = () => {
       setIsMobile(window.innerWidth <= 600);
       // Close the menu when resizing to desktop view
       if (window.innerWidth > 600) setIsToggled(false);
     };

     // Add event listener to handle resize
     window.addEventListener("resize", handleResize);

     // Cleanup event listener on component unmount
     return () => window.removeEventListener("resize", handleResize);
   }, []);

  // Toggle function to switch the state
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };


  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <Link to="/">
              <h1>logo</h1>
            </Link>
          </div>
          {/* Toggle button visible only on mobile (<= 600px) */}
          {isMobile && (
            <div onClick={handleToggle} className="menu">
              <CiMenuBurger color="#fff" size={30} />
            </div>
          )}

          {/* Menu content conditionally rendered */}
          <div
            className={`${
              isMobile
                ? isToggled
                  ? "down-menu"
                  : "header-content"
                : "header-content"
            }`}
          >
            {/* Menu content goes here */}
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
        <div className='margin'></div>
      
    </>
  );
}

export default Header
