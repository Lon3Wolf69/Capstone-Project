import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Debris.css";

const risks = [
  "Large-scale emergency contracting under time pressure",
  "Complex FEMA eligibility and documentation requirements",
  "High audit exposure and fraud risk",
  "Limited in-house capacity at state and local level",
  "Coordination required across federal, state, and local agencies",
];

const supports = [
  "Align debris strategy with FEMA requirements",
  "Coordinate across infrastructure and environmental agencies",
  "Reduce audit and fraud exposure",
  "Protect reimbursement while accelerating timelines",
];

export default function DebrisManagement() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    /* Wrapped content in motion.div for the simple stationary fade */
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Hero just like monkey king */}
      <div className="dm-top" >
        <p className="dm-eyebrow">Debris Management</p>
        <h1 className="dm-headline">
          Protecting Reimbursement
          <br />
          <em>Accelerating Recovery</em>
        </h1>
        <p className="dm-sum1">
          Debris removal is often the largest and most complex line item in disaster recovery — and one of the highest-risk areas for compliance exposure and reimbursement loss.
        </p>
        <p className="dm-sum2">
          DisasterReady helps states stand up debris operations quickly, compliantly, and defensibly.
        </p>
      </div>

      {/* Consequence */}
      <div className="dm-lower">
        <div className="dm-consequence">
          <p className="dm-consequence-intro">Debris drives the pace of recovery. If debris stalls:</p>
          <div className="dm-pills">
            {["Infrastructure stalls", "Housing stalls", "FEMA reimbursement is delayed"].map((pill) => (
              <span key={pill} className="dm-pill">{pill}</span>
            ))}
          </div>
          <p className="dm-warn-line">
            Poor documentation or contracting missteps can jeopardize millions.
          </p>
        </div>

        {/* the two cards */}
        <div className="dm-grid">
          <div className="dm-card">
            <p className="dm-card-label">The risk landscape</p>
            {risks.map((r) => (
              <div key={r} className="dm-item">
                <div className="dm-dot" />
                <span className="dm-item-text">{r}</span>
              </div>
            ))}
          </div>
          <div className="dm-card accent">
            <p className="dm-card-label">How Disaster Ready helps</p>
            {supports.map((s) => (
              <div key={s} className="dm-item">
                <div className="dm-dot" />
                <span className="dm-item-text">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="dm-last">
        {/* bottom section */}
        <p className="dm-footer-primary">
          Debris is not just an operational issue. It is a coordination issue.
        </p>
        <p className="dm-footer-secondary">
          Getting debris right protects funding and unlocks everything that follows.
        </p>
      </div>
    </motion.div>
  );
}