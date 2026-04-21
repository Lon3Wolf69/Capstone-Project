import React from "react";
import "./AboutContent.css";

export default function AboutContent() {
  return (
    <div>
      <h2 className="subtitle">
        About Us
      </h2>

      <p className="para">
        DisasterReady is focused on solving one of 
        the most persistent challenges in disaster 
        recovery: translating plans and funding into 
        coordinated execution that delivers real outcomes.
      </p>

      <p className="para">
        We work at the intersection of federal agencies, 
        funding programs, and on-the-ground recovery priorities, 
        helping states and communities navigate complex systems 
        and align the partners required to move recovery forward.
      </p>

      <p className="para">
        Our work is grounded in real-world experience coordinating 
        across government, nonprofits, and the private sector, with 
        a focus on reducing friction, accelerating timelines, and 
        ensuring resources are fully utilized.
      </p>
    </div>
  );
}