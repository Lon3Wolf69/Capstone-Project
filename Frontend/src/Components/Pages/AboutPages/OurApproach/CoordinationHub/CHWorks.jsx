import React from "react";
import { motion } from "framer-motion"; 
import "./CHWorks.css";
import infographic from "../../../../../assets/ch-infographic.png"
import mobileinfographic from "../../../../../assets/CHwork_mobile.png"

export default function CHWork() {
  return (
    <motion.section 
      className="how-it-works"
      /* Fade Logic */
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }} // Triggers when 20% is visible
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* text content */}
      <p className="chwork-eyebrow">Our Approach</p>
      <h2 className="chwork-title">
        Connecting Priorities, Funding & Execution
      </h2>
      <p className="chwork-subtitle">
        Disaster recovery is not a planning problem - it is a coordination problem. 
        Our approach focuses on aligning recovery
        priorities with agencies, funding programs,
        and partners required to execute them. Rather
        than introducing new processes, we bring
        structure to how recovery already works.
        <br />  
        We focus on where recovery efforts break
        down between agencies, funding sources,
        and execution. We help close those gaps directly.
        <br />
        <span>This Is A Simple But Critical Process:</span>
      </p>
      
      {/* infographic */}
      <div className="chwork-image-wrapper">
        <img
          src={infographic}
          alt="4-step process: Define, Map, Identify, Support"
          className="chwork-image-desktop"
        />
        
        <img
          src={mobileinfographic}
          alt="4-step process: Define, Map, Identify, Support"
          className="chwork-image-mobile"
        />
      </div>



      {/* footer */}
      <p className="section-footer">
        This Creates A More Structured Path From Planning To Execution
      </p>
    </motion.section>
  );
}