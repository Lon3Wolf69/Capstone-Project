import React from "react";
import "./Approach.css";

export default function Approach() {
  return (
    <div className="container">
      <h2 className="title">Our Approach</h2>

      <div className="slide-in delay-1 first">
        <p>
          Disaster recovery is not a planning problem, it is a coordination problem.
        </p>
      </div>

      <div className="slide-in delay-2 second">
        <p>
          Our approach focuses on aligning recovery priorities with the agencies, funding programs, 
          and partners required to execute them. Rather than introducing new processes, we bring 
          structure to how recovery already works, connecting systems that are often fragmented 
          and helping them operate as a whole.
        </p>
      </div>

      <div className="slide-in delay-3 third">
        <p>
          We focus on where recovery efforts break down: between agencies, between funding sources, 
          and between planning and execution. By addressing those gaps directly, we help recovery 
          move faster, with less risk and fewer resources left unused.
        </p>
      </div>
    </div>
  );
}