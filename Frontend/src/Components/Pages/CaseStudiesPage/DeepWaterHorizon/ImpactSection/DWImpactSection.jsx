import "./DWImpactSection.css";
 
const impactItems = [
  {
    title: "Clarity in Crisis",
    description:
      "Complex offshore response operations clearly communicated, supporting public understanding",
  },
  {
    title: "Coordination Enhanced",
    description:
      "Interagency coordination strengthened, enabling sustained response at unprecedented scale",
  },
  {
    title: "Key to Recovery Response",
    description:
      "This effort demonstrated that effective coordination is essential not only operationally - but in how complex recovery efforts are understood and supported.",
  },
  {
    title: "Crisis, Communication & Trust",
    description:
      "By aligning communication with operational reality, coordination built trust, improved clarity, and enabled sustained execution during one of the most complex disaster responses in U.S. history.",
  },
];
 
const ImpactSection = () => {
  return (
    <div className="impact">
      <div className="impact__label">The impact of coordination</div>
      <h2 className="impact__title">
        Coordination Turns Resources Into Results
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