import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

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
  const [showPopup, setShowPopup] = useState(false);

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

    Promise.all([
      emailjs.send(
        "service_8pgzeml",
        "template_f4von4i",
        templateParams,
        "gkEWER_vivZ00B7yY"
      ),
      emailjs.send(
        "service_8pgzeml",
        "template_8b4d38r",
        templateParams,
        "gkEWER_vivZ00B7yY"
      ),
    ])
      .then(() => {
        setSubmitted(true);
        setShowPopup(true);

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
    <div className="contact-container">
      <div className="contact-wrapper">

        {/* left column */}
        <div className="contact-left">

          <div className="contact-title">
            <h2>Contact Us</h2>
          </div>

          <div className="contact-subheader">
            <p>If you are navigating recovery and need to align complex systems, we welcome the conversation.</p>
            <br></br>
            <p> Email: <a className="default2" /*default class is from the Footer.css */ href="mailto:disasterready.contact@gmail.com">disasterready.contact@gmail.com</a> </p>
          </div>

        </div>


        {/* Right side with form */}
        <form onSubmit={handleSubmit} className="contact-form">

          <p>Topic*</p>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
            className="contact-select"
          >
            {/* First input */}
            <option value="" disabled>Select a topic</option>
            <option value="Interagency Recovery Coordination">Interagency Recovery Coordination</option>
            <option value="Debris Management">Debris Management</option>
            <option value="Crisis Communications">Crisis Communications</option>
            <option value="Partnership Opportunities">Partnership Opportunities</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>

          {/* second input */}
          <div className="contact-name-row">
            <div className="contact-name-field">
              <p>First Name*</p>
              <input
                type="text"
                /*placeholder="First Name"*/
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="contact-input"
              />
            </div>

            <div className="contact-name-field">
              <p>Last Name*</p>
              <input
                type="text"
                /*placeholder="Last Name"*/
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="contact-input"
              />
            </div>
          </div>
          
          {/* third input */}
          <p>Agency*</p>
          <select
            value={agency}
            onChange={(e) => {
              setAgency(e.target.value);
              setOther("");
            }}
            required
            className="contact-select"
          >
            <option value="" disabled>Select an organization or agency</option>
            <option value="State Agency">State Agency</option>
            <option value="Local Government">Local Government</option>
            <option value="Non-profit">Non-profit</option>
            <option value="Partner Organization">Partner Organization</option>
            <option value="Other">Other</option>
          </select>

          
          {agency === "Other" && (
            <input
              type="text"
              placeholder="Describe Organization/Agency"
              value={other}
              onChange={(e) => setOther(e.target.value)}
              required
              className="contact-input"
            />
          )}

          {/* fourth input */}
          <p>Role/Title</p>
          <input
            type="text"
            /*placeholder="Role or Title (Optional)"*/
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="contact-input"
          />

          
          {/* fifth input */}
          <p>Email*</p>
          <input
            type="email"
            /*placeholder="Your Email"*/
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="contact-input"
          />

          {/* sixth input */}
          <p>Message*</p>
          <textarea
            /*placeholder="Your Message"*/
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="contact-textarea"
          />

          {/* seventh input */}
          <p>Additional</p>
          <textarea
            placeholder="How can we help? (Optional)"
            value={help}
            onChange={(e) => setHelp(e.target.value)}
            className="contact-textarea"
          />

          {/* submit button */}
          <button type="submit" className="contact-button">
            Submit
          </button>

          {/* confimation message */}
          {showPopup && (
            <div className="popup-overlay">
              <div className="popup">
                <h3>Thank you!</h3>
                <p>You will receive a confirmation email soon.</p>
                <button onClick={() => setShowPopup(false)}>Close</button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}