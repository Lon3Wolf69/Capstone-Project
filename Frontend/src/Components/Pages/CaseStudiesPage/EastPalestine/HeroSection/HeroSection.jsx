import "./HeroSection.css";
 
const stats = [
  {
    num: "$250M",
    suffix: "+",
    label: "In unmet recovery needs identified and quantified across economic, health, and infrastructure systems",
  },
  {
    num: "32",
    suffix: "+",
    label: "Agencies and stakeholders aligned around a shared recovery framework",
  },
  {
    num: "Data-Driven",
    suffix: "",
    label: "Needs assessment established, creating a clear foundation for decision-making and accountability",
  },
];
 
const HeroSection = () => {
  return (
    <div className="hero">
      <span className="hero__tag">Disaster Recovery · East Palestine, OH</span>
 
      <h1 className="hero__title">
        Coordinating Accountability and Recovery in{" "}
        <span>East Palestine, Ohio</span>.
      </h1>
 
      <p className="hero__description">
        Following the 2023 train derailment in East Palestine, Ohio, the
        community faced widespread environmental contamination, health concerns,
        and long-term economic uncertainty. Unlike traditional disasters,
        recovery unfolded without standard federal funding mechanisms, requiring
        a new model for coordination, accountability, and resource alignment.
        <br />
        <br />
        DisasterReady leadership played a central role in coordinating
        interagency recovery efforts, aligning federal, state, and local
        partners while ensuring the responsible party remained accountable for
        funding and executing recovery.
        <br />
        <br />
        Through structured coordination and data-driven analysis, recovery
        efforts shifted from fragmented discussions to a clearly defined,
        community-driven plan.
      </p>
 
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