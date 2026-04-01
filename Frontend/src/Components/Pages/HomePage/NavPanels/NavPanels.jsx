import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavPanels.css";
import { navRoutes } from "../../../RepeatedComponents/Navbar/navRoutes.jsx";
 
// Add your imported images here and map them by route label
// Example:
// import aboutImg from "../../../../assets/About.jpg";
// import focusImg from "../../../../assets/FocusArea.jpg";
// import caseImg  from "../../../../assets/CaseStudies.jpg";
// import platformImg from "../../../../assets/Platform.jpg";
 
// Short blurb for each nav section — keyed by route label
const blurbs = {
  "About":        "Learn who we are, what drives our mission, and the team behind DisasterReady.",
  "Focus Area":   "Explore the core disciplines we specialize in — from interagency coordination to crisis communication.",
  "Case Studies": "See how real communities have used DisasterReady to navigate recovery and rebuild stronger.",
  "Platform":     "Discover the tools and systems that power coordinated disaster recovery at every level.",
};
 
// Swap these out for your imported image variables once you have them
const images = {
  "About":        null,
  "Focus Area":   null,
  "Case Studies": null,
  "Platform":     null,
};
 
// Accent colors for each panel's collapsed background
const colors = {
  "About":        "#0B2E4F",
  "Focus Area":   "#18558f",
  "Case Studies": "#1D6A8A",
  "Platform":     "#F47A20",
};
 
function NavPanels() {
  const [activeIndex, setActiveIndex] = useState(null);
 
  const handleToggle = (i) => {
    setActiveIndex((prev) => (prev === i ? null : i));
  };
 
  return (
    <section className="navpanels-section">
 
      {/* ── Desktop: horizontal strip ── */}
      <div className="navpanels-strip">
        {navRoutes.map((route, i) => {
          const isOpen = activeIndex === i;
          return (
            <div
              key={route.label}
              className={`navpanel ${isOpen ? "navpanel--open" : ""}`}
              style={{ backgroundColor: colors[route.label] }}
              onClick={() => handleToggle(i)}
            >
              {/* Collapsed state — vertical title */}
              <div className="navpanel-collapsed">
                <span className="navpanel-vtitle">{route.label}</span>
              </div>
 
              {/* Expanded state — image + content */}
              <div className="navpanel-expanded">
                {images[route.label] ? (
                  <img
                    src={images[route.label]}
                    alt={route.label}
                    className="navpanel-img"
                  />
                ) : (
                  /* Placeholder until real images are added */
                  <div
                    className="navpanel-img-placeholder"
                    style={{ backgroundColor: colors[route.label] }}
                  />
                )}
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
              </div>
            </div>
          );
        })}
      </div>
 
      {/* ── Mobile: vertical accordion ── */}
      <div className="navpanels-accordion">
        {navRoutes.map((route, i) => {
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