import "./ImpactSection.css";
 
const impactItems = [
  {
    title: "Accountability Ensured",
    description:
      "Responsible party held accountable for funding recovery, reducing reliance on taxpayer resources",
  },
  {
    title: "Recovery Plan",
    description:
      "Community-driven recovery plan developed, focused on long-term resilience",
  },
  {
    title: "Coordination Critical",
    description:
      "This effort demonstrated that coordination is critical not only for deploying funding - but for ensuring accountability and defining recovery outcomes.",
  },
  {
    title: "Community Empowerment",
    description:
      "By structuring the recovery process and quantifying unmet needs, coordination transformed uncertainty into a clear, actionable pathway - empowering the community and ensuring recovery responsibilities were fully met.",
  },
];
 
const ImpactSection = () => {
  return (
    <div className="impact">
      <div className="impact__label">The impact of coordination</div>
      <h2 className="impact__title">
        From uncertainty to accountability — coordination defined the outcome
      </h2>
      <div className="impact__grid">
        {impactItems.map((item, i) => (
          <div key={i} className="impact__item">
            <h3 className="impact__item-title">{item.title}</h3>
            <p className="impact__item-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default ImpactSection;