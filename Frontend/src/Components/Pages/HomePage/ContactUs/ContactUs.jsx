import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, just log the values
    console.log({ name, email, message });
    
    // Show confirmation message
    setSubmitted(true);

    // Clear the form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f3f3f3",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          width: "350px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Contact Us</h2>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ padding: "10px", fontSize: "16px" }}
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: "10px", fontSize: "16px" }}
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={{ padding: "10px", fontSize: "16px", minHeight: "100px" }}
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "6px",
          }}
        >
          Send Message
        </button>

        {submitted && (
          <p style={{ color: "#0B2E4F", textAlign: "center" }}>
            Thank you! Your message has been sent.
          </p>
        )}
      </form>
    </div>
  );
}