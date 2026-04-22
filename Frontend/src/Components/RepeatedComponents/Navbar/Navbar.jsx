import React, { useEffect, useState } from "react";                          
import {Link, NavLink} from "react-router-dom";                       
import "./Navbar.css";                                              
import Logo from "../../../assets/disasterReadyLogo.png";
import { navRoutes } from "./navRoutes";

function Navbar(){
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
      if (hamburgerOpen) {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      }
      
      return () => {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      };
    }, [hamburgerOpen]);

    const closeDropdown = () => {
      setIsClosing(true);
      setTimeout(() => {
        setOpenDropdown(false);
        setIsClosing(false);
      }, 300);
    }

    const toggleDropdown = (label) => { 
      if (openDropdown === label){
        closeDropdown();
      } else {
        setIsClosing(false);
        setOpenDropdown(label);
      }
    };

    const handleLinkClick = () => { 
        setHamburgerOpen(false);
        setOpenDropdown(false);
        setIsClosing(false);
        document.body.style.overflow = '';
    };

    return( 
      <>
        <div className="header-nav-wrapper">
          <header className="top-header">
            <Link to="/" onClick={handleLinkClick}>
              <img src={Logo} alt="Logo" className="header-logo" />
            </Link>
            <div
              className={`hamburger ${hamburgerOpen ? "open" : ""}`}
              onClick={() => setHamburgerOpen(!hamburgerOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </header>

          <nav className="navbar">
            <ul className={hamburgerOpen ? "open" : ""}>
              {navRoutes.map((route) => (
                <li key={route.label} className="dropdown-item"> 
                  {route.children ? (
                    <button 
                      className={`dropdown-btn ${openDropdown === route.label ? "active-dropdown" : ""}`}
                      onClick={() => toggleDropdown(route.label)}
                    >
                      {route.label}{" "} 
                      <span className={`dropdown-arrow ${openDropdown === route.label ? "open" : ""}`}>❯</span>
                    </button>
                  ) : (
                    <NavLink
                      to={route.path} 
                      className="dropdown-btn"
                      onClick={handleLinkClick} 
                      style={{ textDecoration: "none", display: "flex", alignItems: "center" }}
                    >
                      {route.label}
                    </NavLink>
                  )}

                  {route.children && openDropdown === route.label && (
                    <div className={`menu-shared${isClosing ? " closing" : ""}`}>
                      {route.children.map((child) => (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          className={({isActive}) => "dropdown-link" + (isActive ? " active": "")}
                          onClick={handleLinkClick}
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </li>
              ))}

              <li className="dropdown-item">
                <div className="nav-contact-wrapper">
                  <NavLink
                    to="/contact"
                    onClick={handleLinkClick}
                    className="nav-login-btn"
                  >
                    Contact
                  </NavLink>
                </div>
              </li>
              
            </ul>
          </nav>

          <div className="nav-contact-wrapper">
            <NavLink 
              to="/contact" onClick={handleLinkClick} 
              className="nav-login-btn" 
              style={{margin: "0 6px 0 0"}}>Contact
            </NavLink> 
          </div>

        </div>        
      </>
    );
}
               
export default Navbar;
