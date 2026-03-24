import React from "react";
import { Link } from "react-router-dom";

const CordHubCTA = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Coordination Hub</h1>

      <h1 style={styles.subtitle}>Supporting Coordination at Scale</h1>

      <p style={styles.text}>
        DisasterReady is building a Coordination Hub 
        to support this work, helping states organize recovery 
        information, identify gaps, and navigate federal programs 
        more effectively.
      </p>

      <p style={styles.text}>
        The Hub is not a replacement for coordination. 
        It is a system designed to strengthen it.
      </p>

      <p style={styles.text}>
        It brings structure to a process that is often fragmented, 
        supporting how recovery actually works across agencies and funding.
      </p>
      <Link
        to="/platform/coordinationHubOverview"
        style={{
          textDecoration: "none",
          display: "inline-block",
          marginTop: "30px",
        }}
      >
        <button style={styles.button} className="CTA">
          Learn About the Coordination Hub
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

export default CordHubCTA;