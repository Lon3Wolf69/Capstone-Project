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
        
        {/* TITLE: Simple Fade */}
        <motion.h1
          className="rsf-header-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {HEADER_CONTENT.title}
        </motion.h1>

        {/* ACCENT LINE: Simple Fade */}
        <motion.div
          className="rsf-header-accent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        ></motion.div>

        {/* DESCRIPTION: Simple Fade */}
        <motion.p
          className="rsf-header-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {HEADER_CONTENT.description}
        </motion.p>

      </div>
    </section>
  );
};

export default RSFHeader;