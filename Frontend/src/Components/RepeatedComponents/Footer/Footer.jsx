import React from "react";  // Imports react library as React variable
import "./Footer.css";      // Imports the ./Footer.css file for styling of the footer
import { Link } from "react-router-dom"; // Imports the Link component from the react-router-dom library for navigation between pages without refreshing the page
import Logo from "../../../assets/DR_Logo_White.png";

// Assign variable to function declaration
const Footer = () => {


  return (
    <footer className="footer">                                  {/* Acts pretty much the same as a div doesn't have its own functionality added to it. Styles the footer with said className defined in the Footer.css file */}
      <div className="footer-content">                           {/* div container styled by the said className defined in the footer.css file */}
        
        {/* Image + Three columns for the quick links*/}
        <div className="footer-middle">
          <div style={{ alignSelf: "flex-start", flexDirection: "row"}}>
            <img src={Logo} alt="DisasterReady Logo" className="footer-logo" /> {/* Displays the logo in the footer with the source of the image being the assets folder and the logo.png file. Styled by the footer-logo class defined in Footer.css file */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '10px', fontSize: '18px', lineHeight: '1.5', color: '#f9f9f9' }}>
              <div className="footer-links">
                <Link to="/contact">Contact Us</Link>                          {/* Goes to the Contact page */}
              </div>
              <p>Email: disasterready.contact@gmail.com </p>
            </div>
          </div>  
          
          <div className="footer-quick-links">
            <h4>Helpful Resources</h4>                                      {/* Heading for the quick links section */}
            <div className="footer-columns">
              <div className="footer-column">
                <a href="https://www.noaa.gov/" target="_blank" rel="noopener noreferrer">NOAA</a>
                <a href="https://www.fema.gov/" target="_blank" rel="noopener noreferrer">FEMA</a>                             
                <a href="https://www.nhc.noaa.gov" target="_blank" rel="noopener noreferrer">National Hurricane Center</a>
                <a href="https://www.weather.gov" target="_blank" rel="noopener noreferrer">National Weather Service</a>
                <a href="https://www.tsunami.gov/" target="_blank" rel="noopener noreferrer">Tsunami Warning System</a>
              </div>
              <div className="footer-column">
                <a href="https://www.redcross.org" target="_blank" rel="noopener noreferrer">American Red Cross</a>
                <a href="https://www.salvationarmyusa.org" target="_blank" rel="noopener noreferrer">Salvation Army</a>                             
                <a href="https://wck.org" target="_blank" rel="noopener noreferrer">World Central Kitchen</a>
                <a href="https://mds.org" target="_blank" rel="noopener noreferrer">Mennonite Disaster Service</a>
                <a href="https://teamrubiconusa.org" target="_blank" rel="noopener noreferrer">Team Rubicon</a>
              </div>
              <div className="footer-column">
                <a href="https://water.noaa.gov/" target="_blank" rel="noopener noreferrer">National Water Center</a>
                <a href="https://www.spc.noaa.gov/" target="_blank" rel="noopener noreferrer">Storm Prediction Center</a>                             
                <a href="https://www.usgs.gov/programs/earthquake-hazards" target="_blank" rel="noopener noreferrer">Earthquake Hazard Progam</a>
                <a href="https://www.nifc.gov/" target="_blank" rel="noopener noreferrer">National Interagency Fire Center</a>
                <a href="https://www.fema.gov/emergency-managers/practitioners/integrated-public-alert-warning-system/public/wireless-emergency-alerts" target="_blank" rel="noopener noreferrer">FEMA Emergency Alerts</a>
              </div>
            </div>
          </div>
          {/* All the different footer links styled by the footer-links class defined in Footer.css */}
        </div>
          
          <p className="footer-text">                                          {/* text above the links to the other pages down below styled by the footer-text class defined in Footer.css file */}
          Last updated - {new Date().getFullYear()} DisasterReady  {/* new Date().getFullYear() returns the full year from the users device and displays that  */}
        </p>
      </div>
    </footer>
  );
}

export default Footer; // Export the footer variable to be used elsewhere in the app.jsx file for display