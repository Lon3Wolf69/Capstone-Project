import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavPanels.css";
import { panelRoutes } from "./panelRoutes.jsx";

// Add your imported images here and map them by route label
// Example:
import Thailand from "./thailand.jpg";
import Alaska from "./alaska.jpg";
import Helene from "./Helene.jpg";
// import platformImg from "../../../../assets/Platform.jpg";
 
// Short blurb for each nav section — keyed by route label
const blurbs = {
  "Hurricane Helene":        "In late 2024, Hurricane Helene caused catastrophic flooding, infrastructure failure, and widespread displacement across western North Carolina.",
  "Thailand":   "Thailand’s navy will deploy an aircraft carrier to the flood-stricken south, as public outcry mounts over the government’s response to a crisis that has hit about 2 million people and left an entire southern city under water...",
  "Alaska": "See how real communities have used DisasterReady to navigate recovery and rebuild stronger.",
};
 
// Swap these out for your imported image variables once you have them
const images = {
  "Hurricane Helene":   Helene,
  "Thailand": Thailand,
  "Alaska": Alaska,
};
 
// Accent colors for each panel's collapsed background
const colors = {
  "Hurricane Helene":    "#0B2E4F",
  "Thailand":   "#18558f",
  "Alaska": "#1D6A8A",
};
 
function NavPanels() {
  const [activeIndex, setActiveIndex] = useState(null);
 
  const handleToggle = (i) => {
    setActiveIndex((prev) => (prev === i ? null : i));
  };
 
  return (
    <section className="navpanels-section">
 
      <h2 style={{paddingBottom:"10px"}}>Explore Our Work</h2>

      <h4 style={{paddingLeft: "50px", paddingBottom:"20px", color:"#0B2E4F"}}> Explore case studies to gain insight into real-world natural disasters and 
        their impacts. Each case highlights key events and responses 
        with links to in-depth articles and external resources for further reading.</h4>


      {/* ── Desktop: horizontal strip ── */}
      <div className="navpanels-strip">
        {panelRoutes.map((route, i) => {
          const isOpen = activeIndex === i;
          return (
            <div
              key={route.label}
              className={`navpanel ${isOpen ? "navpanel--open" : ""}`}
              style={{ backgroundColor: colors[route.label] }}
              onClick={() => handleToggle(i)}
            >

              {/*Image and overlay */}
              {images[route.label] && (
                <div className="navpanel-img-wrapper">
                   <img
                    src={images[route.label]}
                    alt={route.label}
                    className="navpanel-img"
                  />
                  <div className="navpanel-overlay" />
                </div>
              )}

              {/* Collapsed state — vertical title */}
              <div className="navpanel-collapsed">
                <span className="navpanel-vtitle">{route.label}</span>
              </div>
 
              {/* Expanded state — image + content */}
              <div className="navpanel-expanded">
                <div className="navpanel-body">
                    <h3>{route.label}</h3>
                    <p>{blurbs[route.label]}</p>
                    <Link
                      to={route.path}
                      className="navpanel-btn"
                      onClick={(e) => e.stopPropagation()} /* prevents panel toggle when clicking link */
                    >
                      Explore {route.label}
                      <span className="navpanel-btn-arrow">→</span>
                    </Link>
                  </div>
                
                {/*
                  {images[route.label] ? (
                  <img
                    src={images[route.label]}
                    alt={route.label}
                    className="navpanel-img"
                  />
                ) : null
                  /* Placeholder until real images are added 
                  <div
                    className="navpanel-img-placeholder"
                    style={{ backgroundColor: colors[route.label] }}
                  />
                  */
                }
                
                
              </div>
            </div>
          );
        })}
      </div>
 
      {/* ── Mobile: vertical accordion ── */}
      <div className="navpanels-accordion">
        {panelRoutes.map((route, i) => {
          const isOpen = activeIndex === i;
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
                <span className="accordion-title">{route.label}</span>
                <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
              </button>
 
              {/* Accordion body — revealed on open */}
              <div className="accordion-body">
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
                    Explore {route.label}
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