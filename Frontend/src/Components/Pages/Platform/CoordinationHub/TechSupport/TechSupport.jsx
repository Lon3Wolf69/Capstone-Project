import "./TechSupport.css";

export default function TechnologySupport() {
  return (
    <div className="tech-container">
      <p className="tech-eyebrow">Platform Design </p>
      <h2 className="tech-title">How Technology Supports The Work</h2>
      <p className="tech-subtitle">
        Technology That Supports—Not Replaces—Coordination
      </p>

      {/*
      <p className="tech-para1">
        The platform is designed to:
      </p>
      */}

    <div className="tech-card-grid">
      
    <div className="tech-card tech-slide-in tech-delay-1">
        <div className="tech-card-icon tech-icon-purple">
          <svg viewBox="0 0 16 16" fill="none" stroke="#534AB7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="5" height="5" rx="1" />
            <rect x="9" y="2" width="5" height="5" rx="1" />
            <rect x="2" y="9" width="5" height="5" rx="1" />
            <rect x="9" y="9" width="5" height="5" rx="1" />
          </svg>
        </div>
        <p className="tech-card-label">Organize recovery information</p>
        <p className="tech-card-desc">
          One place for federal programs, requirements, 
          and status—across agencies and funding streams.
        </p>
    </div>

    <div className="tech-card tech-slide-in tech-delay-2">
      <div className="tech-card-icon tech-icon-teal">
        <svg viewBox="0 0 16 16" fill="none" stroke="#0F6E56" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="8" r="6" />
            <path d="M8 5v3l2 2" />
        </svg>
      </div>
      <p className="tech-card-label">Navigate federal programs</p>
      <p className="tech-card-desc">
        Guide teams through eligibility, sequencing, and 
        compliance requirements without losing the thread.
        </p>
    </div>

    <div className="tech-card tech-slide-in tech-delay-3">
      <div className="tech-card-icon tech-icon-amber">
          <svg viewBox="0 0 16 16" fill="none" stroke="#854F0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 2v4M8 10v4M2 8h4M10 8h4" />
            <circle cx="8" cy="8" r="2" />
          </svg>
      </div>
      <p className="tech-card-label">Identify gaps and dependencies</p>
      <p className="tech-card-desc">
        Surface where funding, agencies, 
        or timelines may conflict before they become failures.
      </p>
    </div>

    <div className="tech-card tech-slide-in tech-delay-4">
        <div className="tech-card-icon tech-icon-blue">
          <svg viewBox="0 0 16 16" fill="none" stroke="#185FA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 8h10M8 3l5 5-5 5" />
          </svg>
      </div>
      <p className="tech-card-label">Reduce coordination friction</p>
      <p className="tech-card-desc">
        Less time on administrative overhead; 
        more time on decisions that move recovery forward.
      </p>
    </div>

    {/*
      <ul className="tech-para-list">
        <li className="tech-slide-in tech-delay-1">Organize recovery information in one place</li>
        <li className="tech-slide-in tech-delay-2">Support navigation of federal programs and requirements</li>
        <li className="tech-slide-in tech-delay-3">Identify potential gaps and dependencies</li>
        <li className="tech-slide-in tech-delay-4">Reduce administrative and coordination friction</li>
      </ul>
      */}

      {/*
      <p className="tech-para2 tech-slide-in tech-delay-4">
        AI may assist in surfacing information and guiding workflows, but the system is grounded in real-world recovery experience, not automation alone.
      </p>
      */}

    <div className="tech-ai-note">
      <span className="tech-ais-dot" />
        <p>
          AI may assist in surfacing information and guiding workflows, but the system
          is grounded in real-world recovery experience—not automation alone.
        </p>
    </div>
    </div>
    </div>
  );
}