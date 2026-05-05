import "./NavShowcase.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
//Imported images guide: import [insert what you want to call the import] from "Pathing within here"
import Typing from "../../../../assets/Typing.jpg";
import Cleanup from "../../../../assets/Cleanup.jpg";
import Speech from "../../../../assets/Speech.png";

const panels = [
  // information for the case study teaser
  {
    // Light or dark card
    theme: "dark",

    // Image side location left or right
    imgSide: "left",
    
    // This is a url to an image
    // To change this import image from asset folder and type name of import here instead without the quotes
    img: Cleanup,
    
    // Eyebrow text for teaser 
    label: "Recovery in practice",
    
    // title of the teaser
    title: "Case Study",
    
    // text for the section
    desc: "In North Carolina, coordinated interagency recovery has already demonstrated what is possible when agenices, funding, and priotities are aligned.\n\n Billions in federal resources were mobilized and connected across programs, accelerating recovery and reducing friction at the state and local level.\n\n This is not theoretical, It is how recovery works when coordination is done right!",
    
    // call to action text
    cta: "View Case Study",
    to: "/caseStudies/northCarolina",
  },

  // information for the about us teaser
  {
    // Light or dark card
    theme: "light",

    // Image side location left or right
    imgSide: "right",

    // This is a url to an image
    // To change this import image from asset folder and type name of import here instead without the quotes
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",

    // Eyebrow text for teaser 
    label: "Learn About Us",

    // title of the teaser
    title: "About Us",

    // text for the section 
    desc: "DisasterReady brings together former federal recovery leaders and experienced operators who understand how interagency recovery-and where it breaks down.\n\n This experience informs both our coordination work and the systems we are building to support it.",

    // call to action text
    cta: "Meet the Team",
    to: "/about/team",
  },
];
 
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" className="ns-cta-icon">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);
 
const NavShowcase = () => {

  useEffect(() => {
    const panels = document.querySelectorAll(".ns-panel");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        },
        { threshold: 0.2}
    );

    panels.forEach((panel) => observer.observe(panel));

    return () => observer.disconnect();
}, []);


  return (
    <div className="ns-wrap">
      {panels.map((panel, i) => (
        <div key={i} className={`ns-panel ${panel.theme}`}>
          {panel.imgSide === "left" && (
            <div className="ns-img-col ns-img-col-left">
              <img src={panel.img} alt={panel.title} />
              <div className="ns-img-overlay"></div>
            </div>
          )}
 
          <div className="ns-accent"></div>
 
          <div className={`ns-content ${panel.imgSide === "right" ? "ns-content-right" : ""}`}>
            <div className="ns-label">{panel.label}</div>
            <h2 className="ns-title">{panel.title}</h2>
            <p className="ns-desc">{panel.desc}</p>
            <Link to={panel.to} className="ns-cta">
              {panel.cta} <ArrowIcon />
            </Link>
          </div>
 
          {panel.imgSide === "right" && (
            <div className="ns-img-col ns-img-col-right">
              <img src={panel.img} alt={panel.title} />
              <div className="ns-img-overlay"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
 
export default NavShowcase;