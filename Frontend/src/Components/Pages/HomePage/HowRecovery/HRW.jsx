import React from "react";
import "./HRW.css";

// ─── Section: How Recovery Works (Update the white text to change what is said on the section)─────────────────────────────────────────────
function HowRecoveryWorks() {
  return (
    <section className="container-section background-color--white recovery">
      <p className="eyebrow">How recovery works</p>
      <h2 className="section-title">
        From Funding To Outcomes — 
        
        Coordination Is The Difference
      </h2>

      <div className="recovery__intro">
        <p className="recovery__pull">
          Without coordination, efforts fragment. Timelines extend. Funding goes underutilized.
        </p>
        <div className="recovery__body">
          <p>
          Recovery systems are complex by design. Multiple agencies, funding streams, and 
          partners must work together across housing, infrastructure, economic recovery, and health.
          </p>
          <p>
            Without coordination, even well-funded recovery efforts stall.
            DisasterReady operates at the point where recovery either moves
            forward — or stalls.
          </p>
        </div>
      </div>
    </section>
  );
}


// ─── Section: What We Do (Modify the white text to update what is said on the website)─────────────────────────────────────────────────────
function WhatWeDo() {
  return (
    
    <section className="container-section background-color--navy what-we-do">
      <div className="what-we-do__grid">
        <div className="what-we-do__left">
          <p className="eyebrow">What we do</p>
          <h2 class="section-title what-we-do__title">
            We Coordinate The System
          </h2>
          
        </div>

        <div className="what-we-do__right">
          <p>
            DisasterReady helps states and local governments align recovery
            priorities with the agencies, funding programs, and partners
            required to deliver outcomes.
          </p>
          <blockquote className="what-we-do_accent">
            We do not replace existing systems.
            <br />
            We help them work together.
          </blockquote>
          <p>
            Our work focuses on the most complex part of recovery: coordinating
            execution across federal programs, partners, and stakeholders — so
            that funding reaches its intended purpose and communities recover as
            a whole.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Federal Recovery System (Modify the white text to update what is said on the website) ────────────────────────────────────────
function FederalRecoverySystem() {
  return (
    <section className="container-section background-color--gray federal">
      <p className="eyebrow">The federal recovery system</p>
      <h2 className="section-title">
        Recovery Requires Coordination
        <br />
        Across Multiple Agencies
      </h2>

      <blockquote className="federal_accent">
      DisasterReady helps states navigate and coordinate across this system—so recovery moves as a whole, not in silos.
      </blockquote>

      <p className="federal-sub">
        Recovery spans multiple federal systems, each with its own programs,
        requirements, and timelines. Housing, infrastructure, economic development, 
        health, and environmental recovery are led by different agencies and must be 
        aligned to achieve real outcomes.
      </p>

    </section>
  );
}

// ─── Composed export ─────────────────────────────────────────
export default function RecoverySections() {
  return (
    <>
      <HowRecoveryWorks/>
      <WhatWeDo />
      <FederalRecoverySystem />
    </>
  );
}