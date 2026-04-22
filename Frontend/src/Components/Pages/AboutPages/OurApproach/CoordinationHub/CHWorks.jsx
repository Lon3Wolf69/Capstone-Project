import React from "react";
import "./CHWorks.css";
import infographic from "../../../../../assets/ch-infographic.png"

export default function CHWork() {
  return (
    <section className="how-it-works">
      <p className="chwork-eyebrow">Our Approach</p>
      <h2 className="chwork-title">
        Connecting Priorities, Funding, and Execution
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
        This is a simple but critical process:
      </p>
      
      <div className="chwork-image-wrapper">
        <img
          src={infographic}
          alt="4-step process: Define, Map, Identify, Support"
          className="chwork-image"
        />
      </div>

      {/* ── Footer note (left-aligned, bold) ── */}
      <p className="section-footer">
        This creates a more structured path from planning to execution.
      </p>
    </section>
  );


}