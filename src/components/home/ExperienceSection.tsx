import React from "react";

export default function ExperienceSection() {
  return (
    <section id="education" className="experience-section">
      <div className="section-meta">
        <span className="tag-label">Career &amp; Background</span>
        <h2 className="section-h2">Experience &amp; Education</h2>
        <p className="section-lead">
          Professional software engineering experience, academic qualifications, and technical certifications.
        </p>
      </div>

      <div className="edu-dual-layout">
        {/* Column 1: Professional Experience */}
        <div className="edu-column">
          <div className="edu-col-header">
            <div className="edu-col-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
            </div>
            <h3 className="edu-col-title">Work Experience</h3>
          </div>

          <div className="edu-cards-list">
            {/* Buildose */}
            <div className="timeline-entry-card" style={{ borderColor: "rgba(139, 92, 246, 0.45)" }}>
              <div className="entry-top-row">
                <h4 className="entry-role-title">Software Engineer</h4>
                <span className="entry-year-badge">2025 – Present</span>
              </div>
              <div className="entry-organization">Buildose (buildose.com) &bull; UL Cyberpark</div>
              <div className="entry-place">7 Months</div>
              <p className="entry-description">
                Engineering core features for a live B2B2C marketplace. Built RFQ quotation workflows and dynamic pricing with Hotwire (Turbo &amp; Stimulus). Optimized PostgreSQL queries eliminating N+1 bottlenecks (~45% speedup with Bullet). Configured Pundit RBAC across 5 user tiers and modularized 50+ UI views with ViewComponent.
              </p>
            </div>

            {/* Limenzy */}
            <div className="timeline-entry-card">
              <div className="entry-top-row">
                <h4 className="entry-role-title">Full Stack Developer Intern</h4>
                <span className="entry-year-badge">2025</span>
              </div>
              <div className="entry-organization">Limenzy Technology</div>
              <p className="entry-description">
                Built reusable React.js and Next.js components, integrated RESTful APIs, and boosted client web application performance by 30% through clean state management.
              </p>
            </div>

            {/* ICT Cyberpark */}
            <div className="timeline-entry-card">
              <div className="entry-top-row">
                <h4 className="entry-role-title">MERN Stack Intern</h4>
                <span className="entry-year-badge">6 Months</span>
              </div>
              <div className="entry-organization">ICT Academy, Cyberpark</div>
              <p className="entry-description">
                Developed full-stack web applications and RESTful APIs using MongoDB, Express.js, React.js, and Node.js with JWT authentication.
              </p>
            </div>
          </div>
        </div>

        {/* Column 2: Education & Certifications */}
        <div className="edu-column">
          <div className="edu-col-header">
            <div className="edu-col-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <h3 className="edu-col-title">Education &amp; Certifications</h3>
          </div>

          <div className="edu-cards-list">
            {/* BCA */}
            <div className="timeline-entry-card">
              <div className="entry-top-row">
                <h4 className="entry-role-title">BCA (Computer Applications)</h4>
                <span className="entry-year-badge">2022 – 2025</span>
              </div>
              <div className="entry-organization">Calicut University (KMO)</div>
              <div className="entry-place">Bachelor Degree</div>
              <p className="entry-description">
                Comprehensive curriculum in software engineering, data structures, algorithms, database management systems, and full-stack web development.
              </p>
            </div>

            {/* VHSS */}
            <div className="timeline-entry-card">
              <div className="entry-top-row">
                <h4 className="entry-role-title">VHSS (Software Development)</h4>
                <span className="entry-year-badge">2020 – 2022</span>
              </div>
              <div className="entry-organization">REC Chathamangalam</div>
              <div className="entry-place">Vocational Higher Secondary</div>
              <p className="entry-description">
                Foundational training in programming logic, computer systems, and application design fundamentals.
              </p>
            </div>

            {/* Certifications */}
            <div className="timeline-entry-card">
              <div className="entry-top-row">
                <h4 className="entry-role-title">Technical Certifications</h4>
                <span className="entry-year-badge">Verified</span>
              </div>
              <div className="entry-organization">Professional Credentials</div>
              <p className="entry-description" style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "8px" }}>
                <span>&bull; <strong>Full Stack Web Dev</strong> — Limenzy</span>
                <span>&bull; <strong>MERN Full-Stack</strong> — ICT Academy</span>
                <span>&bull; <strong>Cyber Security</strong> — Red Team Academy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
