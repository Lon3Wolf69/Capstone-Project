import React, { useState } from "react";
import "./RSF.css";


function RSF({ title, mainResource, agencies }) {
  const [view, setView] = useState(0); // 0 = info, 1 = agencies


  const next = () => setView(1);
  const prev = () => setView(0);


  return (
    <div className="rsf-card">


      {/* LEFT ARROW */}
      {view === 1 && (
        <button className="rsf-arrow left" onClick={prev}>◀</button>
      )}


      {/* RIGHT ARROW */}
      {view === 0 && (
        <button className="rsf-arrow right" onClick={next}>▶</button>
      )}


      <div
        className="rsf-slider"
        style={{ transform: `translateX(-${view * 100}%)` }}
      >


        {/* INFO PANEL */}
        <div className="rsf-panel info-panel">
          <div className="rsf-top">
            <img src={mainResource.image} alt={mainResource.title} />
          </div>


          <div className="rsf-bottom">
            <h2>{title}</h2>
            <p> Coordinating Agency </p>


            <h3>
              <a
                href={mainResource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rsf-link"
              >
                {mainResource.title}
              </a>
            </h3>


            <p className="rsf-desc">{mainResource.description}</p>
          </div>
        </div>


        {/* AGENCIES PANEL */}
        <div className="rsf-panel agency-panel">
          <h3 className="agency-title">{title} Agencies</h3>


          <div className="agency-grid">
            {agencies.map((agency, index) => (
              <a
                key={index}
                href={agency.link}
                target="_blank"
                rel="noopener noreferrer"
                className="agency-link"
                >
              <img
               
                src={agency.image}
                alt={agency.name}
                title={agency.name}
              />
              </a>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}


export default RSF;