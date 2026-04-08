import "./TechSupport.css";

export default function TechnologySupport() {
  return (
    <div className="tech-container">
      <h2 className="tech-title">How Technology Supports The Work</h2>
      <h3 className="tech-subtitle">
        Technology That Supports—Not Replaces—Coordination
      </h3>

      <p className="tech-para1">
        The platform is designed to:
      </p>

      <ul className="tech-para-list">
        <li className="tech-slide-in tech-delay-1">Organize recovery information in one place</li>
        <li className="tech-slide-in tech-delay-2">Support navigation of federal programs and requirements</li>
        <li className="tech-slide-in tech-delay-3">Identify potential gaps and dependencies</li>
        <li className="tech-slide-in tech-delay-4">Reduce administrative and coordination friction</li>
      </ul>

      <p className="tech-para2 tech-slide-in tech-delay-4">
        AI may assist in surfacing information and guiding workflows, but the system is grounded in real-world recovery experience, not automation alone.
      </p>
    </div>
  );
}