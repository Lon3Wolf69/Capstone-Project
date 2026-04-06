import React from "react";
import { motion } from "framer-motion";
import "./RSFHeader.css";


const HEADER_CONTENT = {
  title: "How Federal Recovery Is Organized",
  description: "The National Disaster Recovery Framework (NDRF) organizes long-term recovery into six Recovery Support Functions (RSFs). Each RSF is led by a coordinating federal agency and supported by a wider network of federal, state, local, tribal, nonprofit, and private-sector partners. DisasterReady helps states coordinate across RSFs, aligning priorities, sequencing actions, and connecting the right agencies and partners so recovery efforts move faster and deliver results."
};


const RSFHeader = () => {
  return (
    <section className="rsf-header-section">
      <div className="rsf-header-container">
       
        {/* TITLE: Fades in from the left*/}
        <motion.h1
          className="rsf-header-title"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {HEADER_CONTENT.title}
        </motion.h1>


        {/* ACCENT LINE: Scales out from the center */}
        <motion.div
          className="rsf-header-accent"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        ></motion.div>


        {/* DESCRIPTION: Fades and slides into view */}
        <motion.p
          className="rsf-header-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {HEADER_CONTENT.description}
        </motion.p>


      </div>
    </section>
  );
};


export default RSFHeader;