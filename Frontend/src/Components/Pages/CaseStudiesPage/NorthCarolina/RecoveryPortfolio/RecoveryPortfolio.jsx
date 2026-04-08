import "./RecoveryPortfolio.css";
 
const portfolioItems = [
  {
    label: "Housing & community rebuilding",
    description:
      "Major allocations aligned for statewide and local rebuilding efforts across Asheville, Canton, and surrounding counties.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 13V7l6-5 6 5v6H10V9H6v4H2z" fill="#f0781e" />
      </svg>
    ),
  },
  {
    label: "Water & wastewater systems",
    description:
      "Coordinated funding and technical alignment enabling $767M+ in critical water infrastructure investments.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 2C5.2 2 3 5 3 8s2.2 6 5 6 5-2.7 5-6-2.2-6-5-6zm0 10c-1.7 0-3-1.8-3-4s1.3-4 3-4 3 1.8 3 4-1.3 4-3 4z"
          fill="#f0781e"
        />
      </svg>
    ),
  },
  {
    label: "Economic recovery",
    description:
      "Small business recovery loans and regional economic programs activated to restore livelihoods across impacted communities.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="4" width="12" height="9" rx="1" fill="none" stroke="#f0781e" strokeWidth="1.5" />
        <path d="M5 4V3a3 3 0 016 0v1" stroke="#f0781e" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    label: "Infrastructure & access",
    description:
      "Hundreds of projects coordinated, including private road and bridge restoration to reconnect isolated communities.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M2 12l4-4 3 3 5-7"
          stroke="#f0781e"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    label: "Environmental resilience",
    description:
      "Debris repurposing and risk mitigation initiatives advanced to reduce long-term wildfire and landslide risk.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 2l1.5 4H14l-3.5 2.5 1.3 4L8 10l-3.8 2.5 1.3-4L2 6h4.5z" fill="#f0781e" />
      </svg>
    ),
  },
  {
    label: "Philanthropic coordination",
    description:
      "Unmet needs addressed by connecting non-eligible communities and organizations to critical resources outside federal programs.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="5" stroke="#f0781e" strokeWidth="1.5" fill="none" />
        <path d="M8 5v3l2 1" stroke="#f0781e" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
];
 
const RecoveryPortfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio__label">Recovery portfolio</div>
      <h2 className="portfolio__title">What Coordination Made Possible</h2>
      <div className="portfolio__grid">
        {portfolioItems.map((item, i) => (
          <div key={i} className="portfolio__card">
            <div className="portfolio__card-icon">{item.icon}</div>
            <h3 className="portfolio__card-title">{item.label}</h3>
            <p className="portfolio__card-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default RecoveryPortfolio;