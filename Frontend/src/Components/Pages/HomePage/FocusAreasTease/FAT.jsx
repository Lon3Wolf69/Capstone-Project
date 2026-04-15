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