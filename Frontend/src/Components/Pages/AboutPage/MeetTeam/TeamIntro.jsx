import React from "react";
import "./TeamIntro.css";

export default function TeamIntro() {
  return (
    <div class="container">
        <h2 className="title">
          Introduction
        </h2>

        <p className="para">
          DisasterReady brings together leaders with 
          deep experience in federal disaster response, 
          recovery coordination, and operational execution. 
          Our team has worked across agencies, funding programs, 
          and complex recovery efforts, understanding firsthand 
          where recovery succeeds and where it breaks down.
        </p>

        <p className="para">
          This experience informs how we approach 
          coordination, ensuring recovery systems 
          work together to deliver real outcomes.
        </p>
    </div>
  );
}