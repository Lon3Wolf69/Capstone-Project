import "./NCRecoveryPortfolio.css";

// Cards for each portfolio item with icon, title and description
const portfolioItems = [
  {
    label: "Housing & Community Rebuilding",
    description:
      "Major allocations aligned for statewide and local rebuilding efforts across Asheville, Canton, and surrounding counties.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 13V7l6-5 6 5v6H10V9H6v4H2z" fill="#0D6366" />
      </svg>
    ),
    className: "portfolio__card_teal",
    classNameIcon: "portfolio__card-icon_teal",
    classNameTitle: "portfolio__card-title_teal",
    classNameDescription: "portfolio__card-description_teal",
  },
  {
    label: "Water & Wastewater Systems",
    description:
      "Coordinated funding and technical alignment enabling $767M+ in critical water infrastructure investments.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 1.3c0 0-5 5.7-5 9.2 0 2.8 2.2 5 5 5s5-2.2 5-5c0-3.5-5-9.2-5-9.2z"
          fill="#0B2E4F"
        />
      </svg>
    ),
    className: "portfolio__card_blue",
    classNameIcon: "portfolio__card-icon_blue",
    classNameTitle: "portfolio__card-title_blue",
    classNameDescription: "portfolio__card-description_blue",
  },
  {
    label: "Economic Recovery",
    description:
      "Small business recovery loans and regional economic programs activated to restore livelihoods across impacted communities.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="4" width="12" height="9" rx="1" fill="#c45e10" stroke="#c45e10" strokeWidth="1.5" />
        <path d="M5 4V3a3 3 0 016 0v1" stroke="#c45e10" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    className: "portfolio__card_orange",
    classNameIcon: "portfolio__card-icon_orange",
    classNameTitle: "portfolio__card-title_orange",
    classNameDescription: "portfolio__card-description_orange",
  },
  {
    label: "Infrastructure & Access",
    description:
      "Hundreds of projects coordinated, including private road and bridge restoration to reconnect isolated communities.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M2 12l4-4 3 3 5-7"
          stroke="#0D6366"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
    className: "portfolio__card_teal",
    classNameIcon: "portfolio__card-icon_teal",
    classNameTitle: "portfolio__card-title_teal",
    classNameDescription: "portfolio__card-description_teal",
  },
  {
    label: "Environmental Resilience",
    description:
      "Debris repurposing and risk mitigation initiatives advanced to reduce long-term wildfire and landslide risk.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 2l1.5 4H14l-3.5 2.5 1.3 4L8 10l-3.8 2.5 1.3-4L2 6h4.5z" fill="#0B2E4F" />
      </svg>
    ),
    className: "portfolio__card_blue",
    classNameIcon: "portfolio__card-icon_blue",
    classNameTitle: "portfolio__card-title_blue",
    classNameDescription: "portfolio__card-description_blue",
  },
  {
    label: "Philanthropic Coordination",
    description:
      "Unmet needs addressed by connecting non-eligible communities and organizations to critical resources outside federal programs.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="5" stroke="#c45e10" strokeWidth="1.5" fill="none" />
        <path d="M8 5v3l2 1" stroke="#c45e10" strokeWidth="1.5" strokeLinecap="round" fill="none" />
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
          <div key={i} className={`${item.className}`}>
            <div className={`${item.classNameIcon}`}>{item.icon}</div>
            <h3 className={`${item.classNameTitle}`}>{item.label}</h3>
            <p className={`${item.classNameDescription}`}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default RecoveryPortfolio;