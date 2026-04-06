import "./NavShowcase.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const panels = [
  {
    theme: "dark",
    imgSide: "left",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    label: "Revcovery in practice",
    title: "Case Study",
    desc: "In North Carolina, coordinated interagency recovery has already demonstrated what is possible when agenices, funding, and priotities are aligned.\n\n Billions in federal resources were mobilized and connected across programs, accelerating recovery and reducing friction at the state and local level.\n\n This is not theoretical, It is how recovery works when coordination is done right!",
    cta: "View Case Study",
    to: "/caseStudies/northCarolina",
  },
  {
    theme: "light",
    imgSide: "right",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
    label: "Supporting Coordination at Scale",
    title: "Coordination Hub",
    desc: "DisasterReady is building a Coordination Hub to support this work, helping states organize recovery information, identity gaps, and navigate federal programs more effectively.\n\n The Hub is not a replacement for coordination.\n It is a system designed to strengthen it.\n\n It brings structure to a process that is often fragmented, supporting how recovery actually works across agencies and funding.",
    cta: "Learn About the Coordination Hub",
    to: "/platform/coordinationHubOverview",
  },
  {
    theme: "dark",
    imgSide: "left",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
    label: "Learn About Us",
    title: "About Us",
    desc: "DisasterReady brings together former federal recovery leaders and experienced operators who understand how interagency recovery-and where it breaks down.\n\n This experience informs both our coordination work and the systems we are building to support it.",
    cta: "Meet the Team",
    to: "/about/team",
  },
  {
    theme: "light",
    imgSide: "right",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80",
    label: "Let's Coordinate Recovery",
    title: "Contact",
    desc: "DisasterReady works with leaders responsible for disaster recovery across agencies, funding programs, and partners.\n\n If you are navigating recovery and need to align complex systems, we welcome the conversation!",
    cta: "Contact Us",
    to: "/contact",
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