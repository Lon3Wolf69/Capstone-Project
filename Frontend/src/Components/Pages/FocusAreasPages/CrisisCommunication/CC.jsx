import React from "react";
import { motion } from "framer-motion";
import "./CC.css";
import SupportDiagram from "../../../../assets/AreasOfSupport.png";

const CC = () => {
  const stakeholders = [
    "Multiple federal agencies", "State and local leadership",
    "Elected officials", "Community organizations",
    "Media", "The public"
  ];

  const features = [
    { title: "Aligned", desc: "Messaging reflects coordinated interagency priorities." },
    { title: "Clear", desc: "Complex federal programs are translated into understandable guidance." },
    { title: "Consistent", desc: "Updates reinforce shared recovery goals across partners." },
    { title: "Structured", desc: "Briefings, strategy decks, and updates are organized to support decision-making." }
  ];

  return (
    <div className="cc-page-wrapper">
      {/* 1. DARK HERO SECTION (Full Width) */}
      <section className="cc-hero-dark">
        <div className="cc-content-frame">
          <motion.div 
            className="cc-header-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="cc-orange-label">Crisis Communication</h4>
            <h2 className="cc-hero-title">Clarity During Complexity</h2>
            <p className="cc-hero-desc">
              In disaster recovery, communication is not a side function. <br />
              <strong>It is a coordination tool.</strong> <br />
              DisasterReady supports structured, strategic communication that aligns agencies, 
              partners, and public messaging.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. WHITE STAKEHOLDER SECTION */}
      <section className="cc-white-info">
        <div className="cc-content-frame">
          <motion.div 
            className="cc-wm-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="cc-wm-title">Why Communication Matters in Recovery</h3>
            <p className="cc-wm-subtitle">Recovery environments are crowded and dynamic:</p>
            
            <div className="cc-wm-grid">
              {stakeholders.map((item, index) => (
                <div key={index} className="cc-wm-item">
                  <span className="cc-dot"></span>
                  <span className="cc-wm-text">{item}</span>
                </div>
              ))}
            </div>

            <p className="cc-wm-footer">
              Without coordinated messaging, <strong>confusion grows.</strong> Trust erodes. <strong>Momentum slows.</strong>
            </p>
          </motion.div>

          {/* 3. THE LARGE CONTENT CARD */}
          <motion.div 
            className="cc-main-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="cc-card-left">
              <h4 className="cc-orange-label">Crisis Communication</h4>
              <h2 className="cc-card-title">Our Approach</h2>
              <p className="cc-card-intro">
                DisasterReady supports recovery communication that is:
              </p>

              <ul className="cc-card-features">
                {features.map((f, i) => (
                  <li key={i} className="cc-feature-row">
                    <span className="cc-check">✔</span>
                    <div className="cc-feature-copy">
                      <strong>{f.title}</strong>
                      <p>{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="cc-card-right">
               <div className="cc-img-wrapper">
                  <img src={SupportDiagram} alt="Support Diagram" className="cc-support-img" />
               </div>
            </div>
          </motion.div>

          {/* 4. EXPERIENCE SECTION */}
          <motion.div 
            className="cc-experience-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="cc-experience-title">Experience</h2>
            <p className="cc-experience-desc">
              Our leadership has supported federal and regional coordination efforts, including strategic communications for long-term economic recovery initiatives.
            </p>
            <p className="cc-experience-desc">
              We understand how messaging supports operational alignment across agencies and jurisdictions.
            </p>
            <p className="cc-experience-footer">
              Recovery moves faster when communication reinforces <strong>coordination, not confusion.</strong>
            </p>
          </motion.div>

        </div>
      </section>
    </div>
  );
};
 

export default CC;