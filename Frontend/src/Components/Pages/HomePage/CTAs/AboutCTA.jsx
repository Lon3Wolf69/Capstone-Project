import React from "react";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>

      <p style={styles.text}>
        DisasterReady brings together former federal recovery leaders 
        and experienced operators who understand how interagency recovery 
        works—and where it breaks down.
      </p>

      <p style={styles.text}>
        This experience informs both our coordination work 
        and the systems we are building to support it.
      </p>
      <Link
        to="/about/aboutUs"
        style={{
          textDecoration: "none",
          display: "inline-block",
          marginTop: "30px",
        }}
      >
        <button style={styles.button} className="CTA">
          About Us
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
  text: {
    fontSize: "1.1rem",
    textAlign: "center",
    /*marginLeft: '40px',*/
    marginBottom: "10px",
    lineHeight: '2',
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

export default AboutCTA;