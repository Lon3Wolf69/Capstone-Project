import React from "react";
import "./CHWorks.css";
import infographic from "../../../../assets/ch-infographic.png"

export default function CHWork() {
  return (
    <section className="how-it-works">
      <p className="chwork-eyebrow">How it works</p>
      <h2 className="chwork-title">
        Connecting Priorities, Funding, and Execution
      </h2>
      <p className="chwork-subtitle">
        The Coordination Hub supports a simple but critical process:
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