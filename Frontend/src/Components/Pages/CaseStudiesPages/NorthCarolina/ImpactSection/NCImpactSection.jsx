import "./NCImpactSection.css";
 
const impactItems = [
  {
    title: "Faster timelines",
    description:
      "Aligning priorities with the right funding streams and execution partners meant recovery moved faster, reducing friction across complex multi-agency systems.",
  },
  {
    title: "Resources fully utilized",
    description:
      "Connecting funding to on-the-ground priorities ensured billions in recovery resources were fully deployed rather than left on the table.",
  },
  {
    title: "Structured at scale",
    description:
      "What could have been fragmented, delayed efforts became a more structured, scalable recovery across housing, infrastructure, health, and environment.",
  },
  {
    title: "Reduced long-term risk",
    description:
      "Debris and environmental mitigation work lowered ongoing wildfire and landslide exposure, improving resilience for future events.",
  },
];
 
const ImpactSection = () => {
  return (
    <div className="ncimpact">
      <div className="ncimpact__label">The impact of coordination</div>
      <h2 className="ncimpact__title">
        From funding to outcomes — coordination is the difference
      </h2>
      <div className="ncimpact__grid">
        {impactItems.map((item, i) => (
          <div key={i} className="ncimpact__item">
            <h3 className="ncimpact__item-title">{item.title}</h3>
            <p className="ncimpact__item-description">{item.description}</p>
          </div>
        ))}
      </div>
      {/*
      <div className="impact__callout">
        <p>
          Recovery outcomes are not determined by funding alone — but by how
          effectively agencies, programs, and partners are coordinated. This
          work demonstrated that coordination is itself a critical
          infrastructure.
        </p>
      </div>
      */}
    </div>
  );
};
 
export default ImpactSection;