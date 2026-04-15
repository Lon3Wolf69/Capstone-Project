import "./RecoveryPortfolio.css";
 
const portfolioItems = [
  {
    label: "Unmet Needs Quantification",
    description:
      "$250M+ in unmet recovery needs identified and quantified across economic, health, and infrastructure systems — turning community concerns into a measurable, defensible scope.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="10" width="3" height="4" rx="0.5" fill="#0D6366" />
        <rect x="6.5" y="6" width="3" height="8" rx="0.5" fill="#0D6366" />
        <rect x="11" y="2" width="3" height="12" rx="0.5" fill="#0D6366" />
      </svg>
    ),
    className: "portfolio__card_teal",
    classNameIcon: "portfolio__card-icon_teal",
    classNameTitle: "portfolio__card-title_teal",
    classNameDescription: "portfolio__card-description_teal",
  },
  {
    label: "Multi-Agency Alignment",
    description:
      "32+ agencies and stakeholders aligned around a shared recovery framework, replacing fragmented discussions with a unified, accountable process.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="4" r="2" fill="#0B2E4F" />
        <circle cx="3" cy="12" r="2" fill="#0B2E4F" />
        <circle cx="13" cy="12" r="2" fill="#0B2E4F" />
        <line x1="8" y1="6" x2="3" y2="10" stroke="#0B2E4F" strokeWidth="1.2" />
        <line x1="8" y1="6" x2="13" y2="10" stroke="#0B2E4F" strokeWidth="1.2" />
        <line x1="3" y1="12" x2="13" y2="12" stroke="#0B2E4F" strokeWidth="1.2" />
      </svg>
    ),
    className: "portfolio__card_blue",
    classNameIcon: "portfolio__card-icon_blue",
    classNameTitle: "portfolio__card-title_blue",
    classNameDescription: "portfolio__card-description_blue",
  },
  {
    label: "Data-Driven Needs Assessment",
    description:
      "A structured, evidence-based assessment established a clear foundation for decision-making — ensuring recovery priorities were grounded in real community data.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 14L5 9l3 3 3-5 3 3" stroke="#c45e10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="5" cy="9" r="1.2" fill="#c45e10" />
        <circle cx="8" cy="12" r="1.2" fill="#c45e10" />
        <circle cx="11" cy="7" r="1.2" fill="#c45e10" />
      </svg>
    ),
    className: "portfolio__card_orange",
    classNameIcon: "portfolio__card-icon_orange",
    classNameTitle: "portfolio__card-title_orange",
    classNameDescription: "portfolio__card-description_orange",
  },
  {
    label: "Responsible Party Accountability",
    description:
      "The responsible party was held accountable for funding recovery — reducing reliance on taxpayer resources and setting a precedent for private accountability in disaster response.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 2L3 5v4c0 3 2.5 5 5 5s5-2 5-5V5L8 2z" fill="#0D6366" opacity="0.85" />
        <path d="M5.5 8l2 2 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    className: "portfolio__card_teal",
    classNameIcon: "portfolio__card-icon_teal",
    classNameTitle: "portfolio__card-title_teal",
    classNameDescription: "portfolio__card-description_teal",
  },
  {
    label: "Community-Driven Recovery Plan",
    description:
      "A long-term, community-driven recovery plan developed and adopted — focused on resilience and ensuring the community had a defined pathway forward.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 13V7l6-5 6 5v6H10V9H6v4H2z" fill="#0B2E4F" />
      </svg>
    ),
    className: "portfolio__card_blue",
    classNameIcon: "portfolio__card-icon_blue",
    classNameTitle: "portfolio__card-title_blue",
    classNameDescription: "portfolio__card-description_blue",
  },
  {
    label: "New Coordination Model",
    description:
      "Without standard federal mechanisms, a new model for coordination and accountability was developed — demonstrating that structured coordination itself is a critical recovery infrastructure.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="5.5" stroke="#c45e10" strokeWidth="1.5" fill="none" />
        <path d="M8 5v3l2 2" stroke="#c45e10" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
    className: "portfolio__card_orange",
    classNameIcon: "portfolio__card-icon_orange",
    classNameTitle: "portfolio__card-title_orange",
    classNameDescription: "portfolio__card-description_orange",
  },
];
 
const RecoveryPortfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio__label">Recovery portfolio</div>
      <h2 className="portfolio__title">What Coordination Made Possible</h2>
      <div className="portfolio__grid">
        {portfolioItems.map((item, i) => (
          <div key={i} className={item.className}>
            <div className={item.classNameIcon}>{item.icon}</div>
            <h3 className={item.classNameTitle}>{item.label}</h3>
            <p className={item.classNameDescription}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default RecoveryPortfolio;