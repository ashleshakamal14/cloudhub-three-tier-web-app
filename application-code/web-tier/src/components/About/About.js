import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">

      <p className="eyebrow">PROJECT INFORMATION</p>

      <h1>About This Project</h1>

      <p className="about-intro">
        A full-stack three-tier web application created to
        demonstrate modern application architecture,
        API communication and cloud-ready design.
      </p>

      <div className="about-grid">

        <div className="about-card">
          <span>FRONTEND</span>
          <h2>React.js</h2>
          <p>
            Component-based interface with routing,
            responsive layouts and interactive views.
          </p>
        </div>

        <div className="about-card">
          <span>BACKEND</span>
          <h2>Node.js</h2>
          <p>
            Express-based REST API responsible for
            application logic and database communication.
          </p>
        </div>

        <div className="about-card">
          <span>DATABASE</span>
          <h2>MySQL</h2>
          <p>
            Relational data storage used for transactions
            and application records.
          </p>
        </div>

        <div className="about-card">
          <span>CLOUD</span>
          <h2>AWS</h2>
          <p>
            Designed around AWS three-tier architecture
            concepts including web, application and data layers.
          </p>
        </div>

      </div>

      <div className="project-highlight">

        <p className="eyebrow">KEY CONCEPTS</p>

        <div className="concepts">
          <span>Three-Tier Architecture</span>
          <span>REST APIs</span>
          <span>Cloud Architecture</span>
          <span>Scalability</span>
          <span>Separation of Concerns</span>
          <span>Database Integration</span>
        </div>

      </div>

    </div>
  );
}

export default About;