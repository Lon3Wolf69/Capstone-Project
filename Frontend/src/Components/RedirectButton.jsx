import React from "react";
import { useNavigate } from "react-router-dom";

function RedirectButton({ label, to }) {
  const navigate = useNavigate();

  const isExternal = to.startsWith("http://") || to.startsWith("https://");

  const handleClick = () => {
    if (isExternal) {
      window.open(to, "_blank", "noopener,noreferrer"); 
    } else {
      navigate(to); 
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}

export default RedirectButton;