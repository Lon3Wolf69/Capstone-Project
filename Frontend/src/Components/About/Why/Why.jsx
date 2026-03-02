//This will be the code for the Why we are here section of the about page
//It will include a static image with a text overlay and then some text underneath
import React from 'react';
import img from '../../../assets/Landslides.jpg';
import "./Why.css";                              // Imports the css file for use within the file

const why = () => {
    return(
    <>
        {/* Image with overlay of blue background and text */}
        <div className= "overlay-container">
            <img src = {img} alt= "Landslide image" width = "100%" style={{ height: "550px", marginBottom: "-4px"}}/>
            <div className = "overlay"></div>
            <div className = "overlay-text">
                <p style={{ lineHeight: "2.5" }}>RECOVERY SUCCESS DEPENDS ON MORE THAN FUNDING - IT DEPENDS ON <br /><span style={{ color: "#efc623"}}>COORDINATION!</span></p>
            </div>
        </div>
        {/* Subtext cards underneath the image with overlay (cards are not navigation options just a nicer way to display the information) */}
        <div className="cards-section">
            {/* First card  */}
            <div className="card">
                <h2 className="card-header">The Challenge</h2>
                <p>States first define priorities across housing, infrastructure, economic, environmental, and health needs. But as execution begins, gaps appear: misaligned funding, limited capacity, and operational bottlenecks.</p>
            </div>
            {/* Second card */}
            <div className="card">
                <h2 className="card-header">Our Solution</h2>
                <p>DisasterReady brings the system together - aligning agencies, partners, and resources to move recovery forward with clarity and momentum.</p>
            </div>
            {/* Third card */}
            <div className="card">
                <h2 className="card-header">The Result</h2>
                <p>Because coordinated recovery is successful recovery! When the right people, tools, and plans align - communities rebuild faster and stronger.</p>
            </div>
        </div>
    </>
    );
}

export default why;