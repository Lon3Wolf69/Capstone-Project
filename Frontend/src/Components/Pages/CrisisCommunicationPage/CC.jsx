import React from "react";
import { motion } from "framer-motion";
import "./CC.css";
import SupportDiagram from "../../../assets/AreasOfSupport.png";

const CC = () => {
  const features = [
    {
      title: "Real-Time Interagency Visibility",
      desc: "Connect data across state and federal systems to see exactly where resources are deployed."
    },
    {
      title: "Automated Gap Analysis",
      desc: "Instantly surface unmet needs by comparing recovery goals against current funding streams."
    },
    {
      title: "Direct Program Mapping",
      desc: "Align complex federal requirements with local recovery projects to ensure compliance and speed."
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
          <h4 className="cc-label">Advanced Coordination</h4>
          <h2 className="cc-title">The Coordination Hub Engine</h2>
          <p className="cc-intro">
            A specialized environment designed to handle the high-background noise 
            of disaster recovery, filtering out complexity so leaders can focus on execution.
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