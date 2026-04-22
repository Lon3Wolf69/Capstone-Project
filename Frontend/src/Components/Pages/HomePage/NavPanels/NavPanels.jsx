import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavPanels.css";
import { panelRoutes } from "./panelRoutes.jsx";

// Add your imported images here and map them by route label
// Example:
import NorthCarolina from "../../../../assets/northCarolina.jpg";
import EastPalestine from "../../../../assets/eastPalestine.jpg";
import DeepWaterHorizon from "../../../../assets/deepwater.jpeg";
// import platformImg from "../../../../assets/Platform.jpg";

const displayNames = {
  "NorthCarolina": "North Carolina",
  "EastPalestine": "East Palestine",
  "DeepWaterHorizon": "DeepWater Horizon",
};
 
// Short blurb for each nav section — keyed by route label
const blurbs = {
  "NorthCarolina":  "Following Hurricane Helene, DisasterReady leadership helped align agencies, funding, and partners, enabling billions in recovery resources to move more efficiently into impacted communities.",
  "EastPalestine":  "After the East Palestine derailment, DisasterReady leadership helped align agencies and quantify unmet needs, ensuring recovery was structured, community-driven, and fully funded by the responsible party.",
  "DeepWaterHorizon": "During the Deepwater Horizon crisis, DisasterReady leadership supported interagency coordination and communication, helping align large-scale operations and maintain public trust.",
};
 
// Swap these out for your imported image variables once you have them
const images = {
  "NorthCarolina":   NorthCarolina,
  "EastPalestine": EastPalestine,
  "DeepWaterHorizon": DeepWaterHorizon,
};
 
// Accent colors for each panel's collapsed background
const colors = {
  "NorthCarolina":    "var(--navy)",
  "EastPalestine":   "#18558f",
  "DeepWaterHorizon": "#1D6A8A",
};
 
function NavPanels() {
  const [activeIndex, setActiveIndex] = useState(null);
 
  const handleToggle = (i) => {
    setActiveIndex((prev) => (prev === i ? null : i));
  };
 
  return (
    <section className="navpanels-section">
 
      <h2>Explore Our Work</h2>

      <h6> 
        Explore case studies to gain insight into interagency coordination during major disasters:
      </h6>


<div className="navpanels-strip">
  {panelRoutes.map((route, i) => {
    return (
      <div key={route.label} className="navpanel-card">

        {/* IMAGE TOP BLOCK */}
        <div
          className="navpanel-image"
          style={{
            backgroundImage: `url(${images[route.label]})`,
            backgroundColor: colors[route.label],
          }}
        />

        {/* TEXT CONTENT */}
        <div className="navpanel-content">

          <h3>{displayNames[route.label]}</h3>

          <p className="navpanel-summary">
            {blurbs[route.label]}
          </p>

          <Link to={route.path} className="navpanel-readmore">
            Read More
          </Link>
        </div>

      </div>
    );
  })}
</div>


 
      {/* ── Mobile: vertical accordion ── */}
      <div className="navpanels-accordion">
        {panelRoutes.map((route, i) => {
          const isOpen = activeIndex === i;
          const formattedLabel = route.label.replace(/([A-Z])/g, ' $1').trim();
          return (
            <div
              key={route.label}
              className={`accordion-item ${isOpen ? "accordion-item--open" : ""}`}
            >
              {/* Accordion header — always visible */}
              <button
                className="accordion-header"
                style={{ backgroundColor: colors[route.label] }}
                onClick={() => handleToggle(i)}
              >
                <span className="accordion-title">{displayNames[route.label]}</span>
                <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
              </button>
 
              {/* Accordion body — revealed on open */}
              <div className="accordion-body" style={{backgroundColor: colors[route.label] }}>
                {images[route.label] ? (
                  <img
                    src={images[route.label]}
                    alt={route.label}
                    className="accordion-img"
                  />
                ) : (
                  <div
                    className="accordion-img-placeholder"
                    style={{ backgroundColor: colors[route.label] }}
                  />
                )}
                <div className="accordion-content">
                  <p>{blurbs[route.label]}</p>
                  <Link
                    to={route.path}
                    className="navpanel-btn"
                  >
                    Explore {displayNames[route.label]}
                    <span className="navpanel-btn-arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
 
export default NavPanels;