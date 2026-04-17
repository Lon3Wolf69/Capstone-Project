//This will be the code for the Why we are here section of the about page
//It will include a static image with a text overlay and then some text underneath
import React, { useEffect } from 'react'; // Added useEffect for animation
import img from '../../../../assets/Landslides.jpg';
import "./OurMission.css";                        // Imports the css file for use within the file

const why = () => {

    // Animation Logic: Adds the 'reveal-visible' class when the element enters the viewport
    useEffect(() => {
        const observerOptions = {
            threshold: 0.15 // Triggers when 15% of the element is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                }
            });
        }, observerOptions);

        const revealedElements = document.querySelectorAll('.reveal');
        revealedElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect(); // Cleanup
    }, []);

    return(
    <>
    <div className="ourmission-container">
            {/* Added 'reveal' class */}
            <div className="mission-hero reveal">
                <p> THE CORE INSIGHT </p>
                <h1>
                    Recovery success depends on more than funding, <br /> it depends on
                    <span style={{ color: "#F47A20"}}><i> coordination.</i></span>
                </h1>
            </div>    

        {/* Subtext cards underneath the image with overlay (cards are not navigation options just a nicer way to display the information) */}
        {/* Added 'reveal' class */}
        <div style={{ paddingBottom: "100px"}} className="cards-section reveal">

        

                {/* First card  */}
                <div className=" card card-challenge">
                    {/* <div className="card-icon">  
                    <img 
                        src="https://img.icons8.com/?size=100&id=31337&format=png&color=0b2e4f"
                        alt="challenge icon"
                    />
                    </div>
                    */}
                    <h2 style={{fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)"}} className="card-header">The Challenge</h2>
                    <p style={{fontSize: "clamp(0.8rem, 2.5vw, 1.08rem)"}}>States first define priorities across housing, infrastructure, economic, environmental, and health needs. But as execution begins, gaps appear: misaligned funding, limited capacity, and operational bottlenecks.</p>
                </div>

                <span className="card-arrow"> ➔ </span>

                {/* Second card */}
                <div className="card card-solution">
                    {/*}
                    <div className="card-icon">
                    <img 
                        src="https://freesvg.org/img/1490609861.png"
                        alt="soloution icon"
                    />
                    </div>
                    */}
                    <h2 style={{fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)"}} className="card-header">Our Solution</h2>
                    <p style={{fontSize: "clamp(0.8rem, 2.5vw, 1.08rem)"}} >DisasterReady brings the system together - aligning agencies, partners, and resources to move recovery forward with clarity and momentum.</p>
                </div>

                <span className="card-arrow"> ➔ </span>

                {/* Third card */}
                <div className=" card card-result">
                    {/*}
                    <div className="card-icon">
                    <img 
                        src="https://img.icons8.com/?size=100&id=JqO2pI4S2qPh&format=png&color=f47a20"
                        alt="result icon"
                    />
                    </div>
                    */}
                    <h2 style={{fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)"}} className="card-header">The Result</h2>
                    <p style={{fontSize: "clamp(0.8rem, 2.5vw, 1.08rem)"}} >Because coordinated recovery is successful recovery! When the right people, tools, and plans align - communities rebuild faster and stronger.</p>
                </div>
            
        </div>
    </div>
    </>
    );
}

export default why;