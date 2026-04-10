import React from "react";
import { motion } from "framer-motion";
import "./CHubCapabilities.css";


const capabilities = [
  {
    title: "Understand the System",
    desc: "See how federal agencies and programs align to recovery priorities."
  },
  {
    title: "Identify \nGaps",
    desc: "Surface where capacity, funding, or coordination is missing."
  },
  {
    title: "Navigate Complexity",
    desc: "Provide structured guidance across federal programs and requirements."
  },
  {
    title: "Support Coordination",
    desc: "Help align agencies, partners, and stakeholders around shared priorities."
  }
];


const CHubCapabilities = () => {
  return (
    <section className="cap-section">
      <div className="cap-container">
       
        <div className="cap-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="cap-label">What it Supports</h4>
            <h2 className="cap-main-title">Designed for Real Recovery Work</h2>
            <p className="cap-subtitle">The Coordination Hub is being built to help states:</p>
          </motion.div>
        </div>


        <div className="cap-grid">
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              className="cap-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Icons removed from here */}
              <h3 className="cap-card-title">{item.title}</h3>
              <div className="cap-card-line"></div>
              <p className="cap-card-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};


export default CHubCapabilities;
