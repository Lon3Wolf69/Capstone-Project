import { useEffect, useRef } from "react";
import "./FAT.css";
import { Link } from "react-router-dom";
 
const focusAreas = [
  {
    id: "interagency",
    title: "Interagency Coordination",
    description:
      "Aligning federal agencies, programs, and partners around shared recovery priorities for faster, unified response.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width={80} height={80}>
        <circle cx="40" cy="40" r="38" stroke="#2ab6bb" strokeWidth="1.2" opacity="0.25" />
        <circle cx="40" cy="40" r="28" stroke="#2ab6bb" strokeWidth="1.2" opacity="0.45" />
        <circle cx="40" cy="40" r="18" stroke="#2ab6bb" strokeWidth="1.5" opacity="0.7" />
        <circle cx="40" cy="16" r="3" fill="#2ab6bb" opacity="0.8" />
        <circle cx="64" cy="40" r="3" fill="#2ab6bb" opacity="0.8" />
        <circle cx="40" cy="64" r="3" fill="#2ab6bb" opacity="0.8" />
        <circle cx="16" cy="40" r="3" fill="#2ab6bb" opacity="0.8" />
        <line x1="40" y1="16" x2="40" y2="34" stroke="#2ab6bb" strokeWidth="1" opacity="0.5" />
        <line x1="64" y1="40" x2="46" y2="40" stroke="#2ab6bb" strokeWidth="1" opacity="0.5" />
        <line x1="40" y1="64" x2="40" y2="46" stroke="#2ab6bb" strokeWidth="1" opacity="0.5" />
        <line x1="16" y1="40" x2="34" y2="40" stroke="#2ab6bb" strokeWidth="1" opacity="0.5" />
        <circle cx="40" cy="40" r="4" fill="#2ab6bb" />
      </svg>
    ),
    to: "/focusArea/interagencyRecovery",
  },
  {
    id: "debris",
    title: "Debris Management",
    description:
      "Managing one of the largest, most complex, and highest-risk components of recovery — where speed and compliance are critical.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width={80} height={80}>
        <circle cx="40" cy="40" r="38" stroke="#2ab6bb" strokeWidth="1.2" opacity="0.25" />
        <circle cx="40" cy="40" r="28" stroke="#2ab6bb" strokeWidth="1.2" opacity="0.45" />
        <path d="M22 58 L30 34 L38 46 L46 22 L52 58 Z" stroke="#2ab6bb" strokeWidth="1.5" strokeLinejoin="round" fill="none" opacity="0.85" />
      </svg>
    ),
    to: "/focusArea/debrisManagement",
  },
  {
    id: "crisis",
    title: "Crisis Communication",
    description:
      "Providing clear, structured communication across agencies, stakeholders, and the public during complex recovery efforts.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width={80} height={80}>
        <circle cx="40" cy="40" r="38" stroke="#2ab6bb" strokeWidth="1.2" opacity="0.25" />
        <circle cx="40" cy="40" r="28" stroke="#2ab6bb" strokeWidth="1.2" opacity="0.45" />
        <path d="M24 38 Q24 26 40 26 Q56 26 56 37 Q56 48 40 48 L34 56 L34 48 Q24 48 24 38Z" stroke="#2ab6bb" strokeWidth="1.5" fill="none" opacity="0.85" />
        <circle cx="35" cy="35" r="1.5" fill="#2ab6bb" opacity="0.85" />
        <circle cx="40" cy="35" r="1.5" fill="#2ab6bb" opacity="0.85" />
        <circle cx="45" cy="35" r="1.5" fill="#2ab6bb" opacity="0.85" />
      </svg>
    ),
    to: "/focusArea/crisisCommunication",
  },
  {
    id: "wildfire",
    title: "Wildfire Risk Coordination",
    description:
      "Managing wildfire risk requires coordination across agencies, land systems, and recovery efforts. DisasterReady helps align mitigation strategies, resources, and partners to reduce risk and protect long-term recovery.",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width={80} height={80}>
        <circle cx="40" cy="40" r="38" stroke="#2ab6bb" strokeWidth="1.2" opacity="0.25" />
        <circle cx="40" cy="40" r="28" stroke="#2ab6bb" strokeWidth="1.2" opacity="0.45" />
        {/* Flame shape */}
        <path
          d="M40 58 C30 58 22 50 22 41 C22 34 27 30 30 27 C30 32 33 34 33 34 C33 28 37 22 40 18 C40 18 43 26 43 30 C45 27 46 23 46 23 C50 27 54 33 54 41 C54 50 50 58 40 58 Z"
          stroke="#2ab6bb"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="none"
          opacity="0.85"
        />
        {/* Inner flame */}
        <path
          d="M40 52 C35 52 31 48 31 43 C31 39 34 37 36 36 C36 39 38 40 38 40 C38 37 40 34 40 34 C40 34 42 38 42 40 C43 38 44 36 44 36 C46 38 48 41 48 43 C48 48 45 52 40 52 Z"
          stroke="#2ab6bb"
          strokeWidth="1"
          strokeLinejoin="round"
          fill="none"
          opacity="0.55"
        />
      </svg>
    ),
    to: "/focusArea/wildfire",
  },
];
 
export default function FocusAreas() {
  const itemRefs = useRef([]);
 
  useEffect(() => {
    const observers = itemRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            obs.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);
 
  return (
    <section className="focus-areas-section">
      <div className="focus-areas-inner">
        <p className="focus-areas-eyebrow">Focus Areas</p>
        <h2 className="focus-areas-heading">Where We Focus</h2>
 
        <div className="focus-areas-grid">
          {focusAreas.map((area, i) => (
            <div
              key={area.id}
              className="focus-areas-col"
              ref={(el) => {
                itemRefs.current[i] = el;
                if (el) {
                  el.style.transition = `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`;
                }
              }}
            >
              <div className="focus-areas-icon">{area.icon}</div>
              <h3 className="focus-areas-title">{area.title}</h3>
              <p className="focus-areas-body">{area.description}</p>
              <Link to={area.to} className="focus-areas-link">Learn More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}