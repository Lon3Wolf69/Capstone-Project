import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <p className="footer-text">
          © {new Date().getFullYear()} DisasterReady — All Rights Reserved
        </p>

        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact</a>
        </div>

      </div>
    </footer>
  );
}