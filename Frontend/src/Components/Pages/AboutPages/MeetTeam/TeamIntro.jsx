import React from "react";
import { motion } from "framer-motion"; 
import "./TeamIntro.css";

export default function TeamIntro() {
  return (
    <motion.div 
      className="intro-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
        <h2 className="intro-title">
          Introduction
        </h2>

        <p className="intro-para">
          DisasterReady brings together leaders with 
          deep experience in federal disaster response, 
          recovery coordination, and operational execution. 
          Our team has worked across agencies, funding programs, 
          and complex recovery efforts, understanding firsthand 
          where recovery succeeds and where it breaks down.
        </p>

        <p className="intro-para">
          This experience informs how we approach 
          coordination, ensuring recovery systems 
          work together to deliver real outcomes.
        </p>
    </motion.div>
  );
}