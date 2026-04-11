//This will be the code for the Why we are here section of the about page
//It will include a static image with a text overlay and then some text underneath
import React from 'react';
import img from '../../../../assets/Landslides.jpg';
import "./OurMission.css";                              // Imports the css file for use within the file

const why = () => {
    return(
    <>
        <div style={{ padding: "40px 100px", backgroundColor: "#f9f9f9" }}>
            <div className="mission-hero">
                <div style={{ borderLeft: "3px solid #1F8A8E", paddingLeft: "12px" }}>
                    <p> THE CORE INSIGHT </p>
                    <h1 style={{ lineHeight: "1.5", fontWeight: "bold", color:"#0B2E4F" }}>
                        Recovery success depends on more than funding, <br /> it depends on
                        <span style={{ color: "#F47A20"}}><i> coordination.</i></span>
                    </h1>
                </div>
            </div>    
        </div>

        {/* Subtext cards underneath the image with overlay (cards are not navigation options just a nicer way to display the information) */}
        <div className="cards-section">

        

                {/* First card  */}
                <div className=" card card-challenge">
                    <div className="card-icon">  
                    <img 
                        src="https://img.icons8.com/?size=100&id=31337&format=png&color=0b2e4f"
                        alt="challenge icon"
                    />
                    </div>
                    <h2 className="card-header">The Challenge</h2>
                    <p>States first define priorities across housing, infrastructure, economic, environmental, and health needs. But as execution begins, gaps appear: misaligned funding, limited capacity, and operational bottlenecks.</p>
                </div>

                <span style={{ alignSelf: "center", fontSize: "2rem", color: "#0B2E4F" }}>➔</span>

                {/* Second card */}
                <div className="card card-solution">
                    <div className="card-icon">
                    <img 
                        src="https://freesvg.org/img/1490609861.png"
                        alt="soloution icon"
                    />
                    </div>
                    <h2 className="card-header">Our Solution</h2>
                    <p>DisasterReady brings the system together - aligning agencies, partners, and resources to move recovery forward with clarity and momentum.</p>
                </div>

                <span style={{ alignSelf: "center", fontSize: "2rem", color: "#0B2E4F" }}>➔</span>

                {/* Third card */}
                <div className=" card card-result">
                    <div className="card-icon">
                    <img 
                        src="https://img.icons8.com/?size=100&id=JqO2pI4S2qPh&format=png&color=f47a20"
                        alt="result icon"
                    />
                    </div>
                    <h2 className="card-header">The Result</h2>
                    <p>Because coordinated recovery is successful recovery! When the right people, tools, and plans align - communities rebuild faster and stronger.</p>
                </div>
            
        </div>
    </>
    );
}

export default why;