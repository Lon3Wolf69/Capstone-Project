import React from "react";
import "./TechSupport.css";

export default function TechSupport() {
  return (
    <div className="container">
      <h2 className="title">How Technology Supports The Work</h2>
      <h2 className="subtitle">Technology That Supports—Not Replaces—Coordination</h2>

        <p className="para1">
          The platform is designed to:
        </p>

        <ul className="para-list">
            <li className="slide-in delay-1">Organize recovery information in one place</li>
            <li className="slide-in delay-2">Support navigation of federal programs and requirements</li>
            <li className="slide-in delay-3">Identify potential gaps and dependencies</li>
            <li className="slide-in delay-4">Reduce administrative and coordination friction</li>
        </ul>

        <p className="para2">
          AI may assist in surfacing information 
          and guiding workflows, but the system is 
          grounded in real-world recovery experience, 
          not automation alone.
        </p>
    </div>
  );
}