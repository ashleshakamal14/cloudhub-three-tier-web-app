import React from "react";
import architecture from "../../assets/3TierArch.png";
import "./Architecture.css";

function Architecture() {
  return (
    <div className="architecture-page">

      <header className="architecture-header">

        <div>
          <p className="eyebrow">SYSTEM DESIGN</p>

          <h1>AWS Three-Tier Architecture</h1>

          <p>
            Separation of presentation, application and
            data layers for a scalable cloud application.
          </p>
        </div>

        <div className="architecture-status">
          <span></span>
          Architecture Overview
        </div>

      </header>

      <div className="architecture-image-card">
        <img
          src={architecture}
          alt="AWS Three Tier Architecture"
        />
      </div>

      <section className="tier-grid">

        <div className="tier-card">
          <div className="tier-number">01</div>

          <h2>Web Tier</h2>

          <p>
            Handles the presentation layer and provides
            the user-facing application interface.
          </p>

          <div className="technology">
            <strong>React.js</strong>
            <span>Frontend Application</span>
          </div>
        </div>

        <div className="tier-card">
          <div className="tier-number">02</div>

          <h2>Application Tier</h2>

          <p>
            Processes API requests, application logic
            and communication with the database.
          </p>

          <div className="technology">
            <strong>Node.js + Express</strong>
            <span>REST API</span>
          </div>
        </div>

        <div className="tier-card">
          <div className="tier-number">03</div>

          <h2>Database Tier</h2>

          <p>
            Stores application data and transactions
            using a relational database.
          </p>

          <div className="technology">
            <strong>MySQL</strong>
            <span>Persistent Data Storage</span>
          </div>
        </div>

      </section>

      <section className="architecture-flow">

        <p className="eyebrow">REQUEST FLOW</p>

        <div className="flow">

          <div>USER</div>
          <span>→</span>
          <div>WEB TIER</div>
          <span>→</span>
          <div>APP TIER</div>
          <span>→</span>
          <div>DATABASE</div>

        </div>

      </section>

    </div>
  );
}

export default Architecture;