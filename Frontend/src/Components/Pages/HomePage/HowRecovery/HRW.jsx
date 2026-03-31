import React from "react";
import "./HRW.css";

// ─── Section: How Recovery Works ─────────────────────────────────────────────
function HowRecoveryWorks() {
  return (
    <section className="kys-section kys-section--white recovery">
      <p className="eyebrow">How recovery works</p>
      <h2 className="section-title">
        From funding to outcomes—
        <br />
        coordination is the difference
      </h2>

      <div className="recovery__intro">
        <p className="recovery__pull">
          Recovery systems are complex by design. Multiple agencies, funding
          streams, and partners must work together.
        </p>
        <div className="recovery__body">
          <p>
            Housing, infrastructure, economic recovery, and health each require
            different agencies, timelines, and expertise. When these systems
            operate in isolation, the results are predictable: fragmented
            efforts, extended timelines, and funding that goes underutilized.
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

// ─── Section: What We Do ─────────────────────────────────────────────────────
function WhatWeDo() {
  return (
    <section className="kys-section kys-section--navy what-we-do">
      <div className="what-we-do__grid">
        <div className="what-we-do__left">
          <p className="eyebrow">What we do</p>
          <h2 className="what-we-do__statement">We coordinate the system.</h2>
          <div className="what-we-do__rule" />
        </div>

        <div className="what-we-do__right">
          <p>
            DisasterReady helps states and local governments align recovery
            priorities with the agencies, funding programs, and partners
            required to deliver outcomes.
          </p>
          <blockquote className="what-we-do__accent">
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

// ─── Section: Federal Recovery System ────────────────────────────────────────
function FederalRecoverySystem() {
  const agencies = [
    // { name: "HUD",            role: "Housing recovery",         theme: "teal"   },
    // { name: "FEMA",           role: "Emergency management",     theme: "navy"   },
    // { name: "SBA",            role: "Economic recovery",        theme: "orange" },
    // { name: "EPA",            role: "Environmental recovery",   theme: "navy"   },
    // { name: "HHS",            role: "Health & social services", theme: "teal"   },
   // { name: "USACE",          role: "Infrastructure",           theme: "orange" },
    // { name: "EDA / Commerce", role: "Economic development",     theme: "navy"   },
    // { name: "CDBG-DR",        role: "Community development",    theme: "teal"   },
  ];

  return (
    <section className="kys-section kys-section--gray federal">
      <p className="eyebrow">The federal recovery system</p>
      <h2 className="section-title">
        Recovery requires coordination
        <br />
        across multiple agencies
      </h2>
      <p className="federal-sub">
        Recovery spans multiple federal systems, each with its own programs,
        requirements, and timelines. DisasterReady helps states navigate and
        coordinate across this system — so recovery moves as a whole, not in
        silos.
      </p>

      <blockquote className="federal_accent">
        Each agency operates its own programs and requirements. Without a
        coordinating function, states must navigate this system agency by
        agency — losing time and resources at every handoff.
      </blockquote>

    </section>
  );
}

//  <div className="federal__grid">
// {agencies.map((a) => (
  <div key={a.name} className={`agency-card agency-card--${a.theme}`}>
    <span className="agency-card__name">{a.name}</span>
    <span className="agency-card__role">{a.role}</span>
  </div>
// ))}
// </div>

// ─── Composed export ─────────────────────────────────────────
export default function RecoverySections() {
  return (
    <>
      <HowRecoveryWorks />
      <WhatWeDo />
      <FederalRecoverySystem />
    </>
  );
}