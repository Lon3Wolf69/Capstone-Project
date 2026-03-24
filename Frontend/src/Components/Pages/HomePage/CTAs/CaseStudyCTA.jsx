import React from "react";
import { Link } from "react-router-dom";

const CaseStudyCTA = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Case Study</h1>

      <h1 style={styles.subtitle}>Recovery in Practice</h1>

      <p style={styles.text}>
        In North Carolina, coordinated interagency recovery 
        has already demonstrated what is possible when agencies, 
        funding, and priorities are aligned.
      </p>

      <p style={styles.text}>
        Billions in federal resources were mobilized 
        and connected across programs, accelerating recovery 
        and reducing friction at the state and local level.
      </p>

      <p style={styles.text}>
        This is not theoretical.
      </p>

      <p style={styles.text}>
        It is how recovery works when coordination is done right.
      </p>
      <Link
        to="/caseStudies/northCarolina"
        style={{
          textDecoration: "none",
          display: "inline-block",
          marginTop: "30px",
        }}
      >
        <button style={styles.button} className="CTA">
          View Case Study
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

export default CaseStudyCTA;