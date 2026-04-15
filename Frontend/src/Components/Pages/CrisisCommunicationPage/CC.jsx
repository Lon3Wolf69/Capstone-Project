import React from "react";
import { motion } from "framer-motion";
import "./CC.css";
import SupportDiagram from "../../../assets/AreasOfSupport.png";

const CC = () => {
  const features = [
    {
      title: "Aligned",
      desc: "Messaging reflects coordinated interagency priorities."
    },
    {
      title: "Clear",
      desc: "Complex federal programs are translated into understandable guidance."
    },
    {
      title: "Consistent",
      desc: "Updates reinforce shared recovery goals across partners."
    },
    {
      title: "Structured",
      desc: "Briefings, strategy decks, summaries, and interagency updates are organized to support decision-making."
    }
  ];

  return (
    <section className="cc-section">
      <motion.div 
        className="cc-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* LEFT COLUMN: CONTENT */}
        <div className="cc-left">
          <h4 className="cc-label">Crisis Communication</h4>
          <h2 className="cc-title">Our Approach </h2>
          <p className="cc-intro">
            DisasterReady supports recovery communication that is:
          </p>

          <ul className="cc-feature-list">
            {features.map((f, i) => (
              <li key={i} className="cc-feature-item">
                <div className="cc-check">✔</div>
                <div className="cc-feature-text">
                  <strong>{f.title}</strong>
                  <p>{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT COLUMN: DIAGRAM AREA */}
        <div className="cc-right">
          <div className="cc-diagram-img-container">
             <img src={SupportDiagram} alt="Areas of Support Diagram" className="cc-diagram-img" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CC;