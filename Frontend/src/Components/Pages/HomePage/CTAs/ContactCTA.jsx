import React from "react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Let’s Coordinate Recovery</h1>
      <p style={styles.subtitle}>
        DisasterReady works with leaders responsible for disaster recovery across agencies, funding programs, and partners.
      </p>
      <p style={styles.subtitle}>
        If you are navigating recovery and need to align complex systems, we welcome the conversation.
      </p>

      <Link
        to="/contact"
        style={{
          textDecoration: "none",
          display: "inline-block",
          marginTop: "30px",
        }}
      >
        <button style={styles.button} className="CTA">
          Contact Us
          <span style={styles.arrow}>→</span>
        </button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    padding: "60px 20px",
    textAlign: "center",
    background: "#fafafa",
    color: "#000000",
    borderRadius: "12px",
    width: "100%",
    margin: "40px auto",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.1rem",
    marginBottom: "10px",
    opacity: 0.9,
  },
  button: {
    padding: "12px 24px",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#18558f",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  arrow: {
    fontSize: "1.2rem",
  },
};

export default ContactCTA;