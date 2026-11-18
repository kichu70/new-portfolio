import React from "react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-meta">
        <span className="tag-label">Portfolio</span>
        <h2 className="section-h2">Featured Projects</h2>
        <p className="section-lead">
          Production systems and full-stack web applications from my experience.
        </p>
      </div>

      <div className="projects-grid">
        {/* Buildose.com */}
        <div className="proj-card">
          <div>
            <div className="proj-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
            <h4>Buildose.com</h4>
            <p>Live B2B2C building materials procurement portal with RFQ negotiation &amp; vendor storefronts.</p>

            <div className="proj-tech-tags">
              <span className="proj-pill">Ruby on Rails</span>
              <span className="proj-pill">Hotwire</span>
              <span className="proj-pill">PostgreSQL</span>
              <span className="proj-pill">Tailwind</span>
            </div>
          </div>

          <a
            href="https://buildose.com"
            target="_blank"
            rel="noopener noreferrer"
            className="proj-action"
          >
            Live Site
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/>
              <polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>
        </div>

        {/* Parental Control Platform */}
        <div className="proj-card">
          <div>
            <div className="proj-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h4>Parental Control Platform</h4>
            <p>Activity monitoring dashboard with real-time WebSockets telemetry, domain lockouts, and alerts.</p>

            <div className="proj-tech-tags">
              <span className="proj-pill">React.js</span>
              <span className="proj-pill">Node.js</span>
              <span className="proj-pill">WebSockets</span>
              <span className="proj-pill">MongoDB</span>
            </div>
          </div>

          <a
            href="https://lnkd.in/p/gtTKcseF"
            target="_blank"
            rel="noopener noreferrer"
            className="proj-action"
          >
            Watch Video Demo
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          </a>
        </div>

        {/* eduClass */}
        <div className="proj-card">
          <div>
            <div className="proj-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <h4>eduClass</h4>
            <p>Multi-role LMS platform with Stripe payments, webhooks, OTP resets &amp; video progress tracking.</p>

            <div className="proj-tech-tags">
              <span className="proj-pill">MERN Stack</span>
              <span className="proj-pill">Stripe API</span>
              <span className="proj-pill">JWT</span>
              <span className="proj-pill">Tailwind</span>
            </div>
          </div>

          <a
            href="https://online-course-frontend-azure.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="proj-action"
          >
            Live Demo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/>
              <polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>
        </div>

        {/* Book App */}
        <div className="proj-card">
          <div>
            <div className="proj-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
            </div>
            <h4>Book App E-Commerce</h4>
            <p>Full-stack MERN e-commerce store with catalog search, persistent cart state, and Stripe checkout.</p>

            <div className="proj-tech-tags">
              <span className="proj-pill">MongoDB</span>
              <span className="proj-pill">Express</span>
              <span className="proj-pill">React</span>
              <span className="proj-pill">Stripe</span>
            </div>
          </div>

          <a
            href="https://book-app-frontend-nine-tau.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="proj-action"
          >
            Live Demo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/>
              <polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>
        </div>

        {/* Defence & Security Platform */}
        <div className="proj-card">
          <div>
            <div className="proj-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h4>Defence &amp; Security Platform</h4>
            <p>Responsive security operations UI concept featuring telemetry widgets and dark-mode data displays.</p>

            <div className="proj-tech-tags">
              <span className="proj-pill">React.js</span>
              <span className="proj-pill">Tailwind CSS</span>
              <span className="proj-pill">Telemetry UI</span>
            </div>
          </div>

          <a
            href="https://defence-security.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="proj-action"
          >
            Live Demo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/>
              <polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="github-center">
        <a
          href="https://github.com/kichu70?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          View All Projects on GitHub
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
