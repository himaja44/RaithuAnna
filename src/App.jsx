
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

// ================= SERVICES =================
const services = [
  { icon: "🌱", name: "Seeds" },
  { icon: "🧪", name: "Soil Testing" },
  { icon: "💧", name: "Water & Irrigation" },
  { icon: "🪵", name: "Fencing" },
  { icon: "🚜", name: "Machinery" },
  { icon: "🌿", name: "Fertilizers" },
  { icon: "🛡️", name: "Crop Insurance" },
  { icon: "🏪", name: "Market Support" },
  { icon: "👨‍🌾", name: "Agri Engineering" },
  { icon: "•••", name: "More Services" },
];

// ================= PROJECTS =================
const projects = [
  {
    title: "Paddy Cultivation",
    category: "Crop Cultivation",
    location: "Guntur, Andhra Pradesh",
    date: "Nov 2026 – Feb 2027",
    progress: 65,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Drip Irrigation",
    category: "Irrigation",
    location: "Nalgonda, Telangana",
    date: "Oct 2026 – Dec 2026",
    progress: 40,
    image:
      "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Farm Fencing",
    category: "Fencing",
    location: "Vijayawada, Andhra Pradesh",
    date: "Oct 2026 – Nov 2026",
    progress: 80,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Organic Farming",
    category: "Organic Farming",
    location: "Medak, Telangana",
    date: "Dec 2026 – Mar 2027",
    progress: 30,
    image:
      "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1000&q=80",
  },
];

// ================= MODULES =================
const modules = [
  { icon: "🏪", title: "Vendor Management" },
  { icon: "👷", title: "Manpower Services" },
  { icon: "🏠", title: "Market & Storage" },
  { icon: "🚜", title: "Agri Engineering" },
  { icon: "📋", title: "FMS / LMS / IMS" },
  { icon: "👥", title: "Community" },
  { icon: "🛡️", title: "Schemes & Insurance" },
  { icon: "🌾", title: "Crop Lifecycle" },
  { icon: "📊", title: "Business Insights" },
];

// ================= FARMER JOURNEY =================
const journey = [
  { icon: "👤", title: "Register", desc: "Create profile" },
  { icon: "☑️", title: "Select Needs", desc: "Choose services" },
  { icon: "🔍", title: "Assessment", desc: "Farm analysis" },
  { icon: "📄", title: "Get Report", desc: "View suggestions" },
  { icon: "🤝", title: "Choose Service", desc: "Connect with vendors" },
  { icon: "🌱", title: "Execute", desc: "Start farming" },
  { icon: "📈", title: "Track", desc: "Check progress" },
  { icon: "💰", title: "Harvest & Sell", desc: "Earn better" },
];

// ================= NAVBAR =================
function Navbar() {
  return (
    <header className="navbar">
      <a href="/" className="brand">
        <span className="brand-icon">🌿</span>
        <span>
          <strong>RaithuAnna</strong>
          <small>The Next Generation Farmer</small>
        </span>
      </a>

      <nav className="nav-links">
        <a className="active" href="#home">Home</a>
        <a href="#services">Services⌄</a>
        <a href="#projects">Projects</a>
        <a href="#modules">Marketplace</a>
        <a href="#protection">Schemes</a>
        <a href="#community">Community</a>
        <a href="#about">About</a>
      </nav>

      <div className="nav-actions">
        <button className="language-btn">🌐 English⌄</button>
        <a className="login-link" href="/login">Login / Register </a>
        <a className="nav-cta" href="/register">+ Get Started</a>
      </div>
    </header>
  );
}

// ================= HERO =================
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="eyebrow">CONNECTING FARMERS</span>

        <h1>
          Grow Together.
          <br />
          Farm Smarter.
          <br />
          <span>Build a Better Future.</span>
        </h1>

        <p>
          All your farming needs in one place.
          <br />
          Get services, support, and better opportunities.
        </p>

        <div className="hero-buttons">
          <a href="/register" className="btn-primary">
            Get Started <span>→</span>
          </a>

          <a href="#services" className="btn-outline">
            ▦ Explore Services
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=90"
          alt="Farmer working in a green agricultural field"
        />
      </div>
    </section>
  );
}

// ================= ROLES =================
function Roles() {
  const roles = [
    { icon: "👨‍🌾", name: "Farmer", action: "Get Services" },
    { icon: "🧑‍💼", name: "Agent", action: "Manage Farmers" },
    { icon: "🏪", name: "Vendor", action: "Sell & Serve" },
    { icon: "🎧", name: "Help Desk", action: "Support" },
    { icon: "👨‍💻", name: "Admin", action: "Manage System" },
  ];

  return (
    <section className="roles-section" id="login">
      <h2>I am a ...</h2>

      <div className="roles-list">
        {roles.map((role) => (
          <a href="/register" className="role-card" key={role.name}>
            <span className="role-icon">{role.icon}</span>
            <span>
              <strong>{role.name}</strong>
              <small>{role.action}</small>
            </span>
            <b>→</b>
          </a>
        ))}
      </div>
    </section>
  );
}

// ================= SERVICES =================
function Services() {
  return (
    <section className="section" id="services">
      <div className="section-heading">
        <div>
          <span className="section-label">🌿 OUR SERVICES</span>
          <h2>Explore Farming Services</h2>
          <p>Everything your farm needs, all in one place.</p>
        </div>

        <a href="#modules" className="view-all">View All Services →</a>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <a href="/login" className="service-card" key={service.name}>
            <span>{service.icon}</span>
            <strong>{service.name}</strong>
          </a>
        ))}
      </div>
    </section>
  );
}

// ================= PROJECTS =================
function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading">
        <div>
          <span className="section-label">📚 PROJECTS</span>
          <h2>Ongoing Projects</h2>
          <p>Explore farming projects and join opportunities.</p>
        </div>

        <a href="/login" className="view-all">View All Projects →</a>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <span className="project-tag">{project.category}</span>
              <button className="favorite-btn" aria-label="Add to favorites">
                ♡
              </button>
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <p>📍 {project.location}</p>
              <p>📅 {project.date}</p>

              <div className="progress-label">
                <strong>{project.progress}% Complete</strong>
              </div>

              <div className="progress-bar">
                <span style={{ width: `${project.progress}%` }} />
              </div>

              <div className="project-buttons">
                <a href="/login" className="btn-dark">View Details →</a>
                <a href="/login" className="btn-small-outline">
                  ♧ Request Service
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ================= MODULES =================
function Modules() {
  return (
    <section className="section" id="modules">
      <div className="section-heading">
        <div>
          <span className="section-label">▦ PLATFORM</span>
          <h2>Platform Modules</h2>
        </div>
      </div>

      <div className="modules-grid">
        {modules.map((module) => (
          <a href="/login" className="module-card" key={module.title}>
            <span>{module.icon}</span>
            <strong>{module.title}</strong>
          </a>
        ))}
      </div>
    </section>
  );
}

// ================= FARMER JOURNEY =================
function FarmerJourney() {
  return (
    <section className="section journey-section" id="about">
      <div className="section-heading">
        <div>
          <span className="section-label">🌱 YOUR FARMING JOURNEY</span>
          <h2>How It Works <span>(Farmer Journey)</span></h2>
        </div>
      </div>

      <div className="journey-grid">
        {journey.map((step, index) => (
          <div className="journey-card" key={step.title}>
            <span className="step-number">{index + 1}</span>
            <span className="journey-icon">{step.icon}</span>
            <strong>{step.title}</strong>
            <small>{step.desc}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

// ================= SUPPORT =================
function Support() {
  return (
    <>
      <section className="green-banner">
        <span className="banner-icon">🌱</span>

        <div>
          <h2>Let's grow better, together.</h2>
          <p>All farming services, support and markets in one platform.</p>
        </div>

        <a href="/register" className="banner-button">
          Join RaithuAnna Today →
        </a>
      </section>

      <section className="support-grid" id="community">
        <div className="support-card help-card">
          <span className="support-icon">🎧</span>

          <div>
            <h3>Need help with your farm?</h3>
            <p>Get guidance, support, and services.</p>
            <a href="/login" className="support-button blue">Get Support →</a>
          </div>
        </div>

        <div className="support-card vendor-card">
          <span className="support-icon">🏪</span>

          <div>
            <h3>Are you a service provider?</h3>
            <p>Offer your services and reach more farmers.</p>
            <a href="/register" className="support-button green">
              Register as Provider →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// ================= FOOTER =================
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <div className="brand">
          <span className="brand-icon">🌿</span>
          <span>
            <strong>RaithuAnna</strong>
            <small>The Next Generation Farmer</small>
          </span>
        </div>

        <p>
          A digital platform for farmers to access services, markets, schemes,
          and community support across Andhra Pradesh and Telangana.
        </p>

        <div className="social-links">
          <a href="#home">▶</a>
          <a href="#home">f</a>
          <a href="#home">𝕏</a>
          <a href="#home">◎</a>
        </div>
      </div>

      <div className="footer-column">
        <h4>For Farmers</h4>
        <a href="#services">Find Services</a>
        <a href="#projects">Join Projects</a>
        <a href="#protection">Crop Protection</a>
        <a href="#protection">Government Schemes</a>
      </div>

      <div className="footer-column">
        <h4>Services</h4>
        <a href="#services">Seeds</a>
        <a href="#services">Soil Testing</a>
        <a href="#services">Water & Irrigation</a>
        <a href="#services">Machinery</a>
      </div>

      <div className="footer-column">
        <h4>RaithuMitra</h4>
        <a href="#about">About Us</a>
        <a href="#community">Contact Us</a>
        <a href="#about">Privacy Policy</a>
        <a href="#about">Terms & Conditions</a>
      </div>
    </footer>
  );
}

// ================= HOMEPAGE =================
function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Roles />
        <Services />
        <Projects />
        <Modules />
        <FarmerJourney />
        <Support />
      </main>
      <Footer />

      <a href="#community" className="floating-help" aria-label="Get help">
        💬
      </a>
    </>
  );
}

// ================= APP ROUTES =================
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
