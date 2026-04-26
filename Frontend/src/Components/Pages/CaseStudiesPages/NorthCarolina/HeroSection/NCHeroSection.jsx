/* first section */
import "./NCHeroSection.css";
import factSheet from "../../../../../assets/NcIrcFactSheet.pdf";
 
const stats = [
  /* card information */
  { num: "$2B", suffix: "+", label: "Housing & community recovery funding aligned, including major allocations for statewide and local rebuilding efforts " },
  { num: "$767M", suffix: "+", label: "Water & wastewater investments enabled through coordinated funding and technical alignment " },
  { num: "$300M", suffix: "+", label: "Small business recovery loans activated, alongside regional economic recovery programs " },
  { num: "100", suffix: "+", label: "Infrastructure & access projects coordinated, including private roads and bridge restoration " },
];
 
const HeroSection = () => {
  return (
    /* main text */
    <div className="hero">
      <span className="hero__tag">Disaster Recovery · Western NC</span>
 
      <h1 className="hero__title">
        Coordinating Recovery at Scale in Western North Carolina{" "}
        <span>Hurricane Helene</span>
      </h1>
 
      <p className="hero__description">
        In late 2024, Hurricane Helene caused 
        catastrophic flooding, infrastructure 
        failure, and widespread displacement 
        across western North Carolina. 
        Entire communities, including Asheville, 
        Canton, and surrounding counties, faced 
        damage to housing, water systems, 
        transportation networks, and critical 
        facilities, with debris conditions 
        increasing long-term wildfire and 
        landslide risk.<br/><br/>

        DisasterReady leadership played a central role in coordinating interagency recovery efforts, 
        aligning federal, state, local, philanthropic, and private-sector partners to stabilize conditions 
        and accelerate long-term recovery. <br/><br/>

        By connecting funding streams, agencies, and on-the-ground priorities, this coordination enabled 
        billions of dollars in recovery resources to move more efficiently into impacted communities and 
        supported a portfolio of projects across infrastructure, housing, economic recovery, health, and 
        environmental resilience.
      </p>
      {/* cta button */}
      <a
        className="hero__cta"
        href={factSheet}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="12" y1="18" x2="12" y2="12"/>
          <line x1="9" y1="15" x2="15" y2="15"/>
        </svg>
        View Fact Sheet
      </a>
 
      <div className="hero__outcomes">
        <div className="hero__outcomes-label">Key outcomes</div>
        <div className="hero__stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="hero__stat-card">
              <div className="hero__stat-num">
                {stat.num}
                <span>{stat.suffix}</span>
              </div>
              <div className="hero__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
 
export default HeroSection;