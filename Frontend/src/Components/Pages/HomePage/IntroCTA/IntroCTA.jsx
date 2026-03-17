import "./IntroCTA.css";
import img from "../../../../assets/Typing.jpg";
import { Link } from "react-router-dom"; // Imports the Link component from the react-router-dom library for navigation between pages without refreshing the page

const AboutSection = () => {
 
  return (
    <section className="about-section">
      <img src={img} width="100%" alt="Typing image" className="about-image" />
      <div className="about-overlay-content">
        <p>
          DisasterReady Helps States And Local Governments 
          Turn Recovery Funding And Plans Into Coordinated Execution Across 
          Agencies, Programs And Partners
        </p>
        <p style={{ marginTop: "20px", fontStyle: "italic"}}>See Recovery In Action: <Link to="/caseStudies" className="case-studies-link">North Carolina Studies</Link></p>
        
        <div className="about-container">
          
        
          <Link to="/about/AboutUs" style={{ textDecoration: "none" }}><button className="CTA">
            Explore How it Works
          <span className="CTA-btn-arrow">→</span>
        </button></Link>
      </div>
    </div>
        
      
    </section>
  );
};

export default AboutSection;