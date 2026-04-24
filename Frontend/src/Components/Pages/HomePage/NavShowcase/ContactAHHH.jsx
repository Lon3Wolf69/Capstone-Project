import { useRef } from "react";
import "./ContactAHHH.css";
import { Link } from "react-router-dom";
import Typing from "../../../../assets/Typing.jpg";
import Cleanup from "../../../../assets/Cleanup.jpg";
import Speech from "../../../../assets/Speech.png";
import Contact from "../../AboutPages/ContactUs/ContactUs.jsx"

const SurveyForm = () => (
  <div className="cp-survey-area">
    <p>Your survey form component goes here.</p>
    <p>Import and drop it in place of this placeholder.</p>
  </div>
);

export default function ContactAHHH() {
  return (
    <section className="cp-wrapper">
      <div className="cp-left">
        <div className="cp-eyebrow">
          <span className="cp-eyebrow-line" />
          Let's Coordinate Recovery.
        </div>

        <h1 className="cp-title">
          Contact
          <br />
          <em>Us!</em>
        </h1>

        <p className="cp-blurb">
          DisasterReady works with leaders responsible for disaster recovery
          across agencies, funding programs, and partners. If you are navigating
          recovery and need to align complex systems, we welcome the
          conversation.
        </p>


        <div className="cp-contact-block">
            <span className="cp-contact-label">General inquiries</span>
            <span className="cp-contact-value">disasterready.contact@gmail.com</span>
        </div>

        <Link to="/contact" className="cp-btn">
          Start a Conversation
          <span className="cp-btn-arrow">→</span>
        </Link>
      </div>

      <div className="cp-right">
        <h2 className="cp-form-heading">Send us a message</h2>
        <Contact />
      </div>
    </section>
  );
}