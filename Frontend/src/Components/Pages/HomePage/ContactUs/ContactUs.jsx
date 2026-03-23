import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [topic, setTopic] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [agency, setAgency] = useState("");
  const [other, setOther] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [help, setHelp] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const generateFormId = () => {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formId = generateFormId();

    const finalAgency = agency === "Other" ? other : agency;

    const templateParams = {
      formId,
      topic,
      firstName,
      lastName,
      agency: finalAgency,
      role: role || "N/A",
      email,
      message,
      help: help || "N/A",
    };

    emailjs
      .send(
        "service_8pgzeml",
        "template_f4von4i",
        templateParams,
        "gkEWER_vivZ00B7yY"
      )
      .then(() => {
        setSubmitted(true);

        // Clear form
        setTopic("");
        setFirstName("");
        setLastName("");
        setAgency("");
        setOther("");
        setRole("");
        setEmail("");
        setMessage("");
        setHelp("");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        background: "#f3f3f3",
        padding: "40px 20px",
      }}
    >
      <div style={{ /*maxWidth: "400px", */ width: "100%" }}>
        {/* Intro */}
        <p
          style={{
            marginBottom: "20px",
            fontSize: "24px",
            lineHeight: "1.5",
            color: "#333",
          }}
        >
          DisasterReady works with leaders responsible for disaster recovery coordination.
          If you’re navigating recovery across agencies, funding programs, or partners,
          we welcome the conversation.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Contact Us</h2>

          {/* Topic Dropdown */}
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
            style={{ padding: "10px", fontSize: "16px" }}
          >
            <option value="" disabled>
              Select a topic
            </option>
            <option value="Interagency Recovery Coordination">
              Interagency Recovery Coordination
            </option>
            <option value="Debris Management">Debris Management</option>
            <option value="Crisis Communications">Crisis Communications</option>
            <option value="Partnership Opportunities">Partnership Opportunities</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>

          {/* Name Fields */}
          {/* First Name */}
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            style={{ padding: "10px", fontSize: "16px" }}
          />

          {/* Last Name */}
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            style={{ padding: "10px", fontSize: "16px" }}
          />

          {/* Agency Dropdown */}
          <select
            value={agency}
            onChange={(e) => {
              setAgency(e.target.value);
              setOther(""); // Reset "Other" field when agency changes
            }}
            required
            style={{ padding: "10px", fontSize: "16px" }}
          >
            <option value="" disabled>
              Select an organization or agency
            </option>
            <option value="State Agency">State Agency</option>
            <option value="Local Government">Local Government</option>
            <option value="Non-profit">Non-profit</option>
            <option value="Partner Organization">Partner Organization</option>
            <option value="Other">Other</option>
          </select>

          {/* If Other, specify */}
          {agency === "Other" && (
            <input
              type="text"
              placeholder="Describe Organization/Agency"
              value={other}
              onChange={(e) => setOther(e.target.value)}
              required
              style={{ padding: "10px", fontSize: "16px" }}
            />
          )}

          {/* Role / Title (Optional) */}
          <input
            type="text"
            placeholder="Role or Title (Optional)"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{ padding: "10px", fontSize: "16px" }}
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: "10px", fontSize: "16px" }}
          />

          {/* Message */}
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={{ padding: "10px", fontSize: "16px", minHeight: "100px" }}
          />

          {/* Addeditional Help Request (Optional) */}
          <textarea
            placeholder="How can we help? (Optional)"
            value={help}
            onChange={(e) => setHelp(e.target.value)}
            style={{ padding: "10px", fontSize: "16px", minHeight: "100px" }}
          />

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "6px",
            }}
          >
            Submit
          </button>

          {/* Confirmation */}
          {submitted && (
            <p style={{ color: "#0B2E4F", textAlign: "center" }}>
              Thank you! Your message has been sent.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}