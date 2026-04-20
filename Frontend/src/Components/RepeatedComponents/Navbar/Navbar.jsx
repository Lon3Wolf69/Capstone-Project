import React, { useState } from "react";                          
import {Link, NavLink} from "react-router-dom";                       
import "./Navbar.css";                                              
import Logo from "../../../assets/disasterReadyLogo.png";
import { navRoutes } from "./navRoutes";

function Navbar(){
/*---- Defining -----*/
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

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
    };

/*------ Navbar + Header  --------*/
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

            {/*}
            <div className="nav-btn-positioning">
              <div onClick={() => {
                  setHamburgerOpen(!hamburgerOpen); 
              }}
              >
                  <span></span>
                  <span></span>
                  <span></span>
            </div>
            </div>
          */}


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

<<<<<<< HEAD

            {route.children && openDropdown == route.label && (
              <div className="menu-shared">                                                            {/* Wrapper for the shared menu all styled by the provided class menu-shared located within the Navbar.css file */}
                {/* Dynamically generates the list of links within the dropdown menu based off what is located within the navRoutes.jsx file */}
                {route.children.map((child) => (
                  <NavLink
                      key={child.path}                                                          // Unique key defined for each item which the path value that is retrieved if from the child variable defined for the mapping calling the path variable defined within the navRoutes.jsx file
                      to={child.path}                                                           // This is what the url is set to grabbed from the navRoutes.jsx array
                      className={({isActive}) => "dropdown-link" + (isActive ? " active": "")}  // Sets the className with a conditional statement. the isActive variable is a true or false varaible provided to the className function. the function returns the dropdown-link class styling by default and if isActive is true it will add on the active styling to it aswell if not it will not add on the active class to it
                      onClick={handleLinkClick}                                                 // This is an onClick handler that will call the handleLinkClick function to when a link is clicked closing the dropdown menu when a link is clicked on
                    >
                      {child.label}                                                             {/* This is the text that is dynamically created for each link grabbed from the label of the child elements */}
                    </NavLink>
                  ))}
              </div>
=======
            {openDropdown && (
            <div className={`menu-shared${isClosing ? " closing" : ""}`}>                                                            {/* Wrapper for the shared menu all styled by the provided class menu-shared located within the Navbar.css file */}
              {/* Dynamically generates the list of links within the dropdown menu based off what is located within the navRoutes.jsx file */}
              {navRoutes
                .find((r) => r.label === openDropdown)                                        // Calls the find function on the navRoutes array looking for the specific label that equals that variable linked to the openDropdown variable 
                ?.children?.map((child) => (                                                  // ?.children is an optional chaining sequence that will only attempt to render the children of the dropdown button if there are children if not it will not run. It will then run through the array and render all the children elements 
                  <NavLink                                                                    // Navlink that will provided for the each individual link
                    key={child.path}                                                          // Unique key defined for each item which the path value that is retrieved if from the child variable defined for the mapping calling the path variable defined within the navRoutes.jsx file
                    to={child.path}                                                           // This is what the url is set to grabbed from the navRoutes.jsx array
                    className={({isActive}) => "dropdown-link" + (isActive ? " active": "")}  // Sets the className with a conditional statement. the isActive variable is a true or false varaible provided to the className function. the function returns the dropdown-link class styling by default and if isActive is true it will add on the active styling to it aswell if not it will not add on the active class to it
                    onClick={handleLinkClick}                                                 // This is an onClick handler that will call the handleLinkClick function to when a link is clicked closing the dropdown menu when a link is clicked on
                  >
                    {child.label}                                                             {/* This is the text that is dynamically created for each link grabbed from the label of the child elements */}
                  </NavLink>
                ))}
            </div>
>>>>>>> b6fc9760876cffc27745dfafbdad2812c9169454
            )}
          </li>
        ))}
      </ul>
    </nav>  

                     
          <div className="nav-contact-wrapper">
            <NavLink 
              to="/contact" onClick={handleLinkClick} 
              className="nav-login-btn" 
              style={{margin: "0 6px 0 0",}}>Contact
            </NavLink> 
            </div>

          </div>        

        
          
        
      
        
        {/* Wrapper for the search bar on the header section of website (Everything here is styled by the header-search class defined within the Navbar.css file) */}
          {/* <div className="header-search"> */}
            {/* Defines the login button NavLink behaves pretty much exactly like Link only difference is that Navlink allows for styling to be added when mathcing the current url */}
           {/* <NavLink to="/contact" onClick={handleLinkClick} className="nav-login-btn" style={{margin: "0 6px 0 0",}}>Contact</NavLink>    */}              {/* to sets the path that appears in the url when clicked. Then there is a onClick handler that calls the handleLinkClick function and the it also applies the styling provided by the nav-login-btn class defined in the Navbar.css menu */}
            
           {/* <input type="text" placeholder="Search..." onChange={(e) => console.log(e.target.value)} />      */}     {/* Input tag defines a standard html input text box placeholder sets the default text within the textbox. The next section is an event handler that fires every time the value of the input changes. An arrow function is then used with the passed in variable e. Which then accesses the current value within the input search bar with the following line console.log(e.target.value). e.target refers to the specific react DOM event that triggered the event and the .value takes the current string entered by the user and then logs it to the browser console */}
            {/* <button onClick={() => console.log("Search clicked")}>Go</button>    */}                                 {/* This is the go button next to the search bar.  There is an onClick event handler that runs the arrow function which prints Search clicked to the browsers developer console the text that is between the opening and closing tags for the button is the text that gets displayed for the button */}
         {/*  </div> */ }

      </>
    );
}
               
export default Navbar;       // Exports the Navbar variable for later use within the app.jsx file