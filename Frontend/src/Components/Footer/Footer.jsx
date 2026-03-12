import React from "react";  // Imports react library as React variable
import "./Footer.css";      // Imports the ./Footer.css file for styling of the footer
import { Link } from "react-router-dom"; // Imports the Link component from the react-router-dom library for navigation between pages without refreshing the page
import Logo from "../../assets/disasterReadyLogo.png";

// Assign variable to function declaration
const Footer = () => {


  return (
    <footer className="footer">                                  {/* Acts pretty much the same as a div doesn't have its own functionality added to it. Styles the footer with said className defined in the Footer.css file */}
      <div className="footer-content">                           {/* div container styled by the said className defined in the footer.css file */}
        <p>Coordinating Recovery Delivering Results!</p>
        <p className="footer-text">                                          {/* text above the links to the other pages down below styled by the footer-text class defined in Footer.css file */}
          © {new Date().getFullYear()} DisasterReady — All Rights Reserved   {/* new Date().getFullYear() returns the full year from the users device and displays that  */}
        </p>
        {/* container for the whole section */}
        <div>
          <img src={Logo} alt="DisasterReady Logo" className="footer-logo" /> {/* Displays the logo in the footer with the source of the image being the assets folder and the logo.png file. Styled by the footer-logo class defined in Footer.css file */}
        </div>
        {/* All the different footer links styled by the footer-links class defined in Footer.css */}
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>                   {/* Goes to the Privacy Policy page */}
          <Link to="/terms">Terms of Service</Link>                   {/* Goes to the Terms of Service page */}
          <Link to="/contact">Contact</Link>                          {/* Goes to the Contact page */}
        </div>

      </div>
    </footer>
  );
}

export default Footer; // Export the footer variable to be used elsewhere in the app.jsx file for display