import React, { useState } from "react";
import "./Contact.css";
import AutoResizeTextarea from "../Features/AutoResizeTextArea.jsx";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneRegex = /(^04\d{8}$)|(^\+?[1-9]\d{1,14}$)/;

    // Name validation
    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone =
        "Please enter a valid phone number in international format";
    }

    // Message validation
    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const form = document.getElementById("contactForm");

      // Create a new FormData object from the form
      const formData = new FormData(form);

      // Use fetch to submit the form data to Google Forms
      fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLScNGQC5-w_fprc2Z_2FFcXwGAzxM232baBeIb7xvufomN-eaA/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors", // Use no-cors to avoid CORS issues
        }
      )
        .then((response) => {
          // Handle successful submission (even though no response will be received)
          alert("Form submitted successfully!");
        })
        .catch((error) => {
          // Handle errors
          console.error("Error submitting form:", error);
          alert("There was an error submitting the form.");
        });
    }
  };

  return (
    <div className={`form-container   `}>
      <h2>Say Hi!</h2>
      <iframe
        name="iframe"
        title="Hidden iframe for form submission"
        style={{ display: "none" }}
      />
      <form
        //https://docs.google.com/forms/d/e/1FAIpQLScNGQC5-w_fprc2Z_2FFcXwGAzxM232baBeIb7xvufomN-eaA/viewform?usp=pp_url&entry.1954550861=John+Doe&entry.561916195=%2B61412345678&entry.1965469943=email@email.com&entry.1168516071=Hi!
        action="https://docs.google.com/forms/d/e/1FAIpQLScNGQC5-w_fprc2Z_2FFcXwGAzxM232baBeIb7xvufomN-eaA/formResponse"
        method="POST"
        id="contactForm" // Submit to iframe to avoid redirect
        target="iframe"
      >
        <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {/* Name Field */}
            <div
              className={`input-group ${darkMode ? "dark-mode" : "light-mode"}`}
              style={{ flexGrow: "2" }}
            >
              <input
                type="text"
                className={formData.name ? "not-empty" : ""}
                id="name"
                name="entry.1954550861"
                placeholder=""
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="name">Name</label>

              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div
              className={`input-group ${darkMode ? "dark-mode" : "light-mode"}`}
              style={{ flexGrow: "1" }}
            >
              <input
                type="tel"
                id="phone"
                name="entry.561916195"
                className={formData.phone ? "not-empty" : ""}
                value={formData.phone}
                onChange={handleChange}
                pattern="(^04\d{8}$)|(^\+?[1-9]\d{1,14}$)"
                title="Phone number must be in the format: 
                       - Local (Australian): 04xxxxxxxx 
                       - International: +1234567890"
                placeholder="Enter your phone number"
              />
              <label htmlFor="phone">Phone Number (Optional)</label>
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
          </div>

          {/* Email Field with Email Validation */}
          <div
            className={`input-group ${darkMode ? "dark-mode" : "light-mode"}`}
          >
            <input
              type="email"
              id="email"
              name="entry.1965469943"
              className={formData.email ? "not-empty" : ""}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          {/* Message Field */}
          <div
            className={`input-group ${darkMode ? "dark-mode" : "light-mode"}`}
          >
            <AutoResizeTextarea
              id="message"
              name="entry.1168516071"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Message</label>

            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
