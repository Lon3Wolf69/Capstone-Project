//---------------------------- Logic for the dropdowns on the form -------------------
import { useState, useRef, useEffect } from "react";
import "./TopicDropdown.css";

const options = [
  "Interagency Recovery Coordination",
  "Debris Management",
  "Crisis Communications",
  "Partnership Opportunities",
  "General Inquiry"
];

export default function TopicDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="td-wrapper" ref={ref}>
      {/* Selected value */}
      <div className="td-control" onClick={() => setOpen(!open)}>
        <span className={`td-value ${!value ? "placeholder" : ""}`}>
          {value || "Select a topic"}
        </span>
        <span className={`td-arrow ${open ? "open" : ""}`}>▾</span>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="td-menu">
          {options.map((opt) => (
            <div
              key={opt}
              className={`td-option ${value === opt ? "selected" : ""}`}
              onClick={() => handleSelect(opt)}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}