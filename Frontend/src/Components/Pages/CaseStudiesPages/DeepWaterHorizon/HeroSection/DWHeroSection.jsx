import "./DWHeroSection.css";

// Card data at bottom of hero card 
const stats = [
  {
    num: "50,000", // anything in here will be colored in blue (will be kept in same place)
    suffix: "+",  // anything in suffix will be colored in orange (will be kept in same place)
    label: "Personnel and thousands of assets coordinated across a multi-agency response", // Text located in card body (will be kept in same place)
  },
  {
    num: "6,000", // "Same as above"
    suffix: "+", // "Same as above"
    label: "Vessels and 100+ aircraft aligned in large-scale operational efforts", // "Same as above"
  },
  {
    num: "Communication Restructure", // "Same as above"
    suffix: "", // "Same as above"
    label: "Public communication strategy reframed, improving transparency and trust", // "Same as above"
  },
];


const HeroSection = () => {
  return (
    <div className="dw-hero">
      <span className="dw-hero__tag">Disaster Recovery · Gulf of Mexico </span> {/* Text located above the hero title (blue box white text) */}
      {/* Hero title with white and orange text */}
      <h1 className="dw-hero__title">
        Coordinating a National-Scale Response During the{" "}
        <span>Deepwater Horizon Crisis</span> {/* Anything within span will be colored in orange */}
      </h1>
        {/* Hero description text located below hero title */}
      <p className="dw-hero__description">        {/* First paragraph beginining */}
        The Deepwater Horizon oil spill was one of the most complex environmental disasters in U.S. history, 
        requiring coordination across multiple federal agencies, thousands of personnel, and unprecedented 
        operational challenges above and below the surface.
        {/* First paragraph end */}
        <br />
        <br />
        {/* Second paragraph begining */}
        DisasterReady leadership played a key role in coordinating communications and interagency alignment, 
        helping translate complex, large-scale response efforts into a clear, transparent, and trusted 
        operational narrative.
        {/* Second paragraph end */}
        <br />
        <br />
        {/* Third paragraph begining */}
        By aligning agencies, operations, and public communication, coordination helped maintain trust and 
        support one of the largest environmental response efforts ever undertaken.
        {/* Third paragraph end */}
      </p>
 
      <div className="dw-hero__outcomes">
        <div className="dw-hero__outcomes-label">Key outcomes</div> {/* Orange text located above the cards) */}
        {/* Logic for mapping through stats array to create cards with num, suffix, and label () */}
        <div className="dw-hero__stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="dw-hero__stat-card">
              <div className="dw-hero__stat-num">
                {stat.num}
                <span>{stat.suffix}</span>
              </div>
              <div className="dw-hero__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
 
export default HeroSection;