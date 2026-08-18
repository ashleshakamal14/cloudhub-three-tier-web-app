import React from "react";
import architecture from "../../assets/3TierArch.png";
import "./Home.css";

function Home() {
  return (
    <div className="dashboard">

      <header className="dashboard-header">

        <div>
          <p className="eyebrow">CLOUD APPLICATION</p>

          <h1>
            Three-Tier
            <br />
            Web Application
          </h1>

          <p className="subtitle">
            A full-stack application demonstrating a scalable
            three-tier architecture using React, Node.js,
            Express and MySQL.
          </p>
        </div>

        <div className="status">
          <span className="status-dot"></span>
          System Online
        </div>

      </header>

      <section className="stats-grid">

        <div className="stat-card">
          <span>WEB TIER</span>
          <strong>React</strong>
          <small>Presentation Layer</small>
        </div>

        <div className="stat-card">
          <span>APP TIER</span>
          <strong>Node.js</strong>
          <small>Business Logic</small>
        </div>

        <div className="stat-card">
          <span>DATABASE</span>
          <strong>MySQL</strong>
          <small>Data Layer</small>
        </div>

        <div className="stat-card">
          <span>DESIGN</span>
          <strong>3-Tier</strong>
          <small>Scalable Architecture</small>
        </div>

      </section>

      <section className="overview-section">

        <div className="section-heading">

          <div>
            <p className="eyebrow">SYSTEM DESIGN</p>
            <h2>Architecture Overview</h2>
          </div>

          <span className="architecture-badge">
            AWS Ready
          </span>

        </div>

        <div className="architecture-card">
          <img
            src={architecture}
            alt="AWS Three Tier Architecture"
          />
        </div>

      </section>

      <section className="features">

        <div className="feature-card">
          <div className="feature-number">01</div>

          <h3>Presentation Layer</h3>

          <p>
            React provides the interactive user interface
            and communicates with the backend through APIs.
          </p>

          <span>React.js</span>
        </div>

        <div className="feature-card">
          <div className="feature-number">02</div>

          <h3>Application Layer</h3>

          <p>
            Node.js and Express handle business logic,
            API requests and application processing.
          </p>

          <span>Node.js · Express</span>
        </div>

        <div className="feature-card">
          <div className="feature-number">03</div>

          <h3>Data Layer</h3>

          <p>
            MySQL provides persistent storage for
            application data and transactions.
          </p>

          <span>MySQL</span>
        </div>

      </section>

    </div>
  );
}

export default Home;