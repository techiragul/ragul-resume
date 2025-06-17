// src/components/Resume.tsx
import React from "react";

const Resume: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "auto",
        padding: "20px",
        lineHeight: 1.6,
        background: "#f4f4f4",
        color: "#333",
      }}
    >
      <h1 style={{ color: "#2c3e50" }}>Ragul G</h1>
      <p>
        <strong>Phone:</strong> +91-9790412453
        <br />
        <strong>Email:</strong> ragulganesan2510@gmail.com
        <br />
        <strong>LinkedIn:</strong>{" "}
        <a
          href="https://www.linkedin.com/in/ragul-g-1467632b4/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#2980b9" }}
        >
          linkedin.com/in/ragul-g
        </a>
        <br />
        <strong>GitHub:</strong>{" "}
        <a
          href="https://github.com/techiragul"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#2980b9" }}
        >
          github.com/techiragul
        </a>
      </p>

      <hr style={{ margin: "20px 0" }} />

      <h2 style={{ color: "#2c3e50" }}>Professional Summary</h2>
      <p>
        Entry-Level Full Stack Web Developer with hands-on experience in
        frontend development (HTML, CSS, JavaScript) and backend development
        (Python, MySQL). Eager to contribute to innovative web solutions in a
        dynamic team environment.
      </p>

      <h2 style={{ color: "#2c3e50" }}>Education</h2>
      <ul>
        <li>
          <strong>BE in Computer Science Engineering</strong>, Kingston
          Engineering College, Vellore — CGPA: 7.7 (2025)
        </li>
        <li>
          <strong>Higher Secondary Education</strong>, SKV Matric School,
          Vellore — Percentage: 85%
        </li>
      </ul>

      <h2 style={{ color: "#2c3e50" }}>Technical Skills</h2>
      <ul>
        <li>
          <strong>Languages:</strong> Python, HTML, CSS, JavaScript
        </li>
        <li>
          <strong>Database:</strong> MySQL
        </li>
        <li>
          <strong>Tools:</strong> GitHub, MAMP, VS Code, Python Telegram Bot API
        </li>
        <li>
          <strong>Web Development:</strong> Full Stack Development
        </li>
      </ul>

      <h2 style={{ color: "#2c3e50" }}>Projects</h2>
      <ul>
        <li>
          <strong>Flipkart Clone (Aug 2023 – Sept 2023):</strong> Developed a
          Flipkart-style e-commerce platform with product listings, cart,
          dynamic add/remove, and total price calculation using HTML, CSS,
          JavaScript.
        </li>
        <li>
          <strong>
            Telegram Bot for Yoga Class Management (July 2024 – Aug 2024):
          </strong>{" "}
          Designed and implemented a Telegram bot to manage payments and
          schedules using Python, MySQL, and Telegram Bot API.
        </li>
      </ul>

      <h2 style={{ color: "#2c3e50" }}>Soft Skills</h2>
      <ul>
        <li>Analytical Problem-Solving</li>
        <li>Effective Communication</li>
        <li>Collaborative Teamwork</li>
        <li>Agile Project Management</li>
        <li>Quick Learner and Adaptable</li>
      </ul>

      <h2 style={{ color: "#2c3e50" }}>Languages</h2>
      <p>English: Fluent | Tamil: Fluent</p>

      <h2 style={{ color: "#2c3e50" }}>Declaration</h2>
      <p>
        I hereby declare that the above information is true to the best of my
        knowledge.
      </p>

      <p>
        <strong>Sincerely,</strong>
        <br />
        RAGUL G
      </p>
    </div>
  );
};

export default Resume;
