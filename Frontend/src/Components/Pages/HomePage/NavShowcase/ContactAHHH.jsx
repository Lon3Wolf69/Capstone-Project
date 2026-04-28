import "./ContactAHHH.css";
import { Link } from "react-router-dom";
import Typing from "../../../../assets/Typing.jpg";
import Cleanup from "../../../../assets/Cleanup.jpg";
import Speech from "../../../../assets/Speech.png";
import Contact from "../../AboutPages/ContactUs/ContactUs.jsx"
import { useRef, useState, useEffect } from "react";
import TopicDropdown from "./TopicDropdown.jsx";
import { createPortal } from "react-dom";

const SurveyForm = () => (
  <div className="cp-survey-area">
    <p>Your survey form component goes here.</p>
    <p>Import and drop it in place of this placeholder.</p>
  </div>
);

export default function ContactAHHH() {

  const formRef = useRef(null);
  const [selectEl, setSelectEl] = useState(null);
  const [topic, setTopic] = useState("");
  useEffect(() => {
    const sel = formRef.current?.querySelector("select");
    if (sel) { sel.style.display = "none"; setSelectEl(sel); }
    }, []);
    const handleTopicChange = (val) => {
      setTopic(val);
      if (selectEl) selectEl.value = val;
  };

  return (
    <section className="cp-wrapper">
      <div className="cp-left">
        <div className="cp-eyebrow">
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
            <span className="cp-contact-value"><a className="default" /*default class is from the Footer.css */ href="mailto:disasterready.contact@gmail.com">disasterready.contact@gmail.com</a></span>
        </div>

        <Link to="/contact" className="cp-btn">
          Start a Conversation
          <span className="cp-btn-arrow">→</span>
        </Link>
      </div>

      <div className="cp-right">
        <h2 className="cp-form-heading">Send us a message</h2>
        <Contact />
        <div ref={formRef}>
            {selectEl && createPortal(
              <TopicDropdown value={topic} onChange={handleTopicChange} />,
              selectEl.parentElement
            )}
        </div>
      </div>
    </section>
  );
}