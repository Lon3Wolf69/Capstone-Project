import React from "react";
import { Link } from "react-router-dom";

const FocusArea = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Focus Area</h1> 

      <h2 style={styles.subtitle}>Where We Focus</h2>
      <p style={styles.text}>
        DisasterReady focuses on the areas where coordination 
        has the greatest impact on recovery outcomes.
      </p>
      

      <h2 style={styles.subtitle}>Interagency Coordination</h2>
      <p style={styles.text}>
        Aligning federal agencies, programs, and partners around shared recovery priorities.
      </p>
      <Link
        to="/focusArea/interagencyRecovery"
        style={{
          textDecoration: "none",
          display: "inline-block",
          marginBottom: "30px",
        }}
      >
        <button style={styles.button} className="CTA">
          Interagency Coordination
          <span style={styles.arrow}>→</span>
        </button>
      </Link>

      <h2 style={styles.subtitle}>Debris Management</h2>
      <p style={styles.text}>
        Managing one of the largest, most complex, 
        and highest-risk components of recovery—where speed and compliance are critical.
      </p>
      <Link
        to="/focusArea/debrisManagement"
        style={{
          textDecoration: "none",
          display: "inline-block",
          marginBottom: "30px",
        }}
      >
        <button style={styles.button} className="CTA">
          Debris Management
          <span style={styles.arrow}>→</span>
        </button>
      </Link>

      <h2 style={styles.subtitle}>Crisis Communication</h2>
      <p style={styles.text}>
        Providing clear, structured communication across agencies, 
        stakeholders, and the public during complex recovery efforts.
      </p>
      <Link
        to="/focusArea/crisisCommunication"
        style={{
          textDecoration: "none",
          display: "inline-block",
          marginBottom: "30px",
        }}
      >
        <button style={styles.button} className="CTA">
          Crisis Communication
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

export default FocusArea;