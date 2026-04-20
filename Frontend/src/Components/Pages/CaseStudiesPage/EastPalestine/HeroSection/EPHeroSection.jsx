import "./EPHeroSection.css";

// Card data at bottom of hero card 
const stats = [
  {
    num: "$250M", // anything in here will be colored in blue (will be kept in same place)
    suffix: "+",  // anything in suffix will be colored in orange (will be kept in same place)
    label: "In unmet recovery needs identified and quantified across economic, health, and infrastructure systems", // Text located in card body (will be kept in same place)
  },
  {
    num: "32", // "Same as above"
    suffix: "+", // "Same as above"
    label: "Agencies and stakeholders aligned around a shared recovery framework", // "Same as above"
  },
  {
    num: "Data-Driven", // "Same as above"
    suffix: "", // "Same as above"
    label: "Needs assessment established, creating a clear foundation for decision-making and accountability", // "Same as above"
  },
];


const HeroSection = () => {
  return (
    <div className="ep-hero">
      <span className="ep-hero__tag">Disaster Recovery · East Palestine, OH</span> {/* Text located above the hero title (blue box white text) */}
      {/* Hero title with white and orange text */}
      <h1 className="ep-hero__title">
        Coordinating Accountability and Recovery in{" "}
        <span>East Palestine, Ohio</span>. {/* Anything within span will be colored in orange */}
      </h1>
        {/* Hero description text located below hero title */}
      <p className="ep-hero__description">        {/* First paragraph beginining */}
        Following the 2023 train derailment in East Palestine, Ohio, the
        community faced widespread environmental contamination, health concerns,
        and long-term economic uncertainty. Unlike traditional disasters,
        recovery unfolded without standard federal funding mechanisms, requiring
        a new model for coordination, accountability, and resource alignment.
        {/* First paragraph end */}
        <br />
        <br />
        {/* Second paragraph begining */}
        DisasterReady leadership played a central role in coordinating
        interagency recovery efforts, aligning federal, state, and local
        partners while ensuring the responsible party remained accountable for
        funding and executing recovery.
        {/* Second paragraph end */}
        <br />
        <br />
        {/* Third paragraph begining */}
        Through structured coordination and data-driven analysis, recovery
        efforts shifted from fragmented discussions to a clearly defined,
        community-driven plan.
        {/* Third paragraph end */}
      </p>
 
      <div className="ep-hero__outcomes">
        <div className="ep-hero__outcomes-label">Key outcomes</div> {/* Orange text located above the cards) */}
        {/* Logic for mapping through stats array to create cards with num, suffix, and label () */}
        <div className="ep-hero__stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="ep-hero__stat-card">
              <div className="ep-hero__stat-num">
                {stat.num}
                <span>{stat.suffix}</span>
              </div>
              <div className="ep-hero__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
 
export default HeroSection;