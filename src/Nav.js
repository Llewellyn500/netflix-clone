import React, { useState, useEffect } from 'react';
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);
    
    useEffect(() => {
      window.addEventListener('scroll', () => {
			window.scrollY > 150 ? handleShow(true) : handleShow(false);
		});
		
      return () => {
        window.removeEventListener('scroll');
      };
    }, []);
    
  return (
      <div className={`nav ${show && "nav__black"}`}>
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
          alt="Netflix Logo"
        />
        
        <img 
          className="nav__avatar"
          src="https://learning.royalbcmuseum.bc.ca/wp-content/uploads/2014/07/netflix-face.jpg"
          alt="Netflix Logo"
        />
      </div>
  );
}

export default Nav