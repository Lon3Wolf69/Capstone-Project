import React, { useEffect } from "react";
import "./CHub.css";

const hubSections = [
  {
    theme: "light",
    label: "What it is",
    title: "A Coordination System — Supported by Technology — Built From Experience",
    desc: [
      `DisasterReady is building a proprietary coordination system to help states connect recovery priorities with the agencies, funding, and partners required to deliver outcomes.

      The Coordination Hub brings structure to a process that is often fragmented—supporting how recovery actually works across federal systems.

      The Coordination Hub is informed by real recovery operations and is being developed based on direct experience, reflecting where recovery efforts succeed—and where they break down.
      
      It is not a replacement for coordination. It is designed to strengthen it.`,
]},
  {
    theme: "light",
    label: "Why it Matters",
    title: "Recovery Breaks Down Between Planning & Execution",
    desc: `States can identify what needs to be done. Funding exists across federal programs.


    But without a clear way to organize and connect those pieces, recovery slows, risk increases, and resources are left unused.

    Disaster Ready reduce that friction—helping recovery move forward with greater clarity and alignment. It's designed to help states move from fragmented efforts to coordinated recovery so funding, agencies, and priorities work together to deliver results.`,
  }

];

const CHub = () => {
  useEffect(() => {
    const panels = document.querySelectorAll(".ch-panel");




    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );




    panels.forEach((panel) => observer.observe(panel));
    return () => observer.disconnect();
  }, []);




  return (
     <div className="ch-wrap">
      {hubSections.map((section, i) => (
        <div key={i} className={`ch-panel ${section.theme}`}>

         
          {/* MEDIA COLUMN (LEFT SIDE)
          {section.side === "left" && (
            <div className="ch-media-col ch-media-left">
              <div className="ch-diagram-wrapper">
                {section.diagram}
              </div>
              <div className="ch-media-overlay"></div>
            </div>
          )}
          



          <div className="ch-accent"></div>




          TEXT CONTENT COLUMN

           */}
          <div className={`ch-content ${section.side === "right" ? "ch-content-right" : ""}`}>
            <div className="ch-label">{section.label}</div>
            <h2 className="ch-title">{section.title}</h2>
            <p className="ch-desc">{section.desc}</p>
          </div>

        </div>
      ))}
    </div>
  );

          {/* MEDIA COLUMN (RIGHT SIDE)
          {section.side === "right" && (
            <div className="ch-media-col ch-media-right">
              <div className="ch-diagram-wrapper">
                {section.diagram}
              </div>
              <div className="ch-media-overlay"></div>
            </div>
          )}
          <div className="ch-accent"></div>
          */}
};




export default CHub;