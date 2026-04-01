import "./IntroCTA.css";
import img from "../../../../assets/Typing.jpg";
import { Link } from "react-router-dom"; // Imports the Link component from the react-router-dom library for navigation between pages without refreshing the page

const AboutSection = () => {
 
  return (
    <section className="about-section">
      <div className="about-overlay-content">
 
        <div className="about-eyebrow">
          <div className="about-eyebrow-line" />
          <span className="about-eyebrow-text">
            Coordinating Recovery & Delivering Results
          </span>
        </div>
 
        <h1 className="about-headline">
          Coordinating Disaster Recovery
          <br />
          Across{" "}
          <span className="about-headline-accent">Agencies, Funding</span>
          <br />
          and <span className="about-headline-accent"> Partners.</span>
        </h1>
        <div className="about-blurb-row">
          <p className="about-subhead">
            Disaster recovery doesn't fail because of planning. It fails when
            execution across agencies, funding, and partners is not coordinated.
          </p>
        

        <p className="about-body">
          DisasterReady helps states and communities turn recovery priorities
          into coordinated action — ensuring the right resources reach the
          right programs at the right time.
        </p>
      </div>

      {/* CTA */}
        <div className="about-cta-row">
          <Link to="/about/AboutUs" style={{ textDecoration: "none" }}>
            <button className="CTA">
              How It Works
              <span className="CTA-btn-arrow">
                →
              </span>
            </button>
          </Link>
          <div className="about-divider" />
          <span className="about-trust-note">
            Coordinating Recovery & Delivering Results
          </span>
        </div>
 
      </div>
      <div className="about-bottom-rule" />
    </section>
  );
};

export default AboutSection;