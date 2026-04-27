import React from "react";
import { motion } from "framer-motion";
import "./WildFire.css";
 
const features = [
  {
    num: "01",
    category: "Risk alignment",
    title: "Threat assessment integration",
    body: "Connecting wildfire threat assessments with recovery priorities and timelines to ensure risk is seen in full context.",
  },
  {
    num: "02",
    category: "Interagency coordination",
    title: "Federal, state & local alignment",
    body: "Aligning partners responsible for land management, infrastructure, and emergency response across jurisdictions.",
  },
  {
    num: "03",
    category: "Mitigation strategy",
    title: "Debris & fuel management",
    body: "Coordinating debris reduction, fuel management, and environmental protection efforts across agencies.",
  },
  {
    num: "04",
    category: "Resource navigation",
    title: "Funding & technical resources",
    body: "Identifying and aligning funding and technical resources for wildfire mitigation and response at every phase.",
  },
];
 
const risks = [
  "Risk is underestimated or delayed",
  "Mitigation efforts are fragmented",
  "Recovery progress can be reversed by secondary events",
];
 
export default function WildfireRiskPage() {
  return (

        /* Wrapped content in motion.div for the simple stationary fade */
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
    <main className="wf-page">
 
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="wf-hero">
        <p className="wf-eyebrow">Wildfire Risk &amp; Threat Coordination</p>
        <h1 className="wf-hero-title">
          Anticipating Risk. Coordinating Response. Protecting Recovery.
        </h1>
        <p className="wf-hero-sub">
          Wildfire risk is often accelerated by disaster impacts — debris
          accumulation, damaged landscapes, and disrupted infrastructure.
          Managing that risk requires coordination across agencies, land
          management systems, and response partners.
        </p>
        <p className="wf-hero-sub">
          DisasterReady supports the coordination required to assess wildfire
          threats, align mitigation strategies, and connect the agencies and
          resources needed to reduce risk and protect communities.
        </p>
      </section>

      {/* ── How DisasterReady Supports ───────────────── */}
      <section className="wf-support">
        <p className="wf-support-label">How DisasterReady supports</p>
        <div className="wf-grid">
          {features.map((f) => (
            <div key={f.num} className="wf-card">
              <p className="wf-card-num">
                {f.num} — {f.category}
              </p>
              <h3 className="wf-card-title">{f.title}</h3>
              <p className="wf-card-body">{f.body}</p>
            </div>
          ))}
        </div>
      </section>
 
      {/* ── Why It Matters ───────────────────────────── */}
      <section className="wf-why">
        <div className="wf-why-left">
          <p className="wf-section-label">Why it matters</p>
          <h2 className="wf-why-heading">
            Wildfire risk doesn't exist in isolation
          </h2>
          <p className="wf-why-body">
            It intersects with debris management, environmental recovery,
            infrastructure systems, and long-term resilience planning.
            Without coordination, communities face compounding risks that
            undermine recovery progress.
          </p>
        </div>
        <div className="wf-why-right">
          <p className="wf-section-label">Without coordination</p>
          <ul className="wf-risk-list">
            {risks.map((risk) => (
              <li key={risk} className="wf-risk-item">
                {risk}
              </li>
            ))}
          </ul>
        </div>
      </section>
 
    </main>
    </motion.div>
  );
}