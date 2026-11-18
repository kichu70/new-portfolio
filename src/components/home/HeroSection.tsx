"use client";
import React from "react";
import HeroSpotlightImage from "@/components/HeroSpotlightImage";

export default function HeroSection() {
  return (
    <section id="hero" className="hero-stage">
      <div className="hero-purple-halo"></div>

      <div className="hero-container">
        {/* Left Column: Greeting & Large Name */}
        <div className="hero-left-col">
          <p className="hero-greeting">Hello, I&apos;m</p>
          <h1 className="hero-name-big">
            Muhammad<br />Ansif
          </h1>

          <p className="hero-role-desc">
            Full Stack Software Engineer &bull; Ruby on Rails &bull; Next.js &bull; Node.js &bull; React
          </p>
        </div>

        {/* Center Column: Cutout Portrait */}
        <div className="hero-center-col">
          <HeroSpotlightImage radius={120} />
        </div>

        {/* Right Column: Developer & Software Engineer */}
        <div className="hero-right-col">
          <p className="hero-role-category">Full Stack</p>
          <h2 className="hero-role-title">
            <span className="hero-role-gradient">Developer &amp;</span>
            <span className="hero-role-white">Software Engineer</span>
          </h2>

          <div className="hero-button-group">
            <a
              href="/muhammad-ansif.pdf"
              download
              className="btn-purple-solid"
            >
              Download CV
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>

            <a
              href="#projects"
              className="btn-purple-outline"
            >
              My Work
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Left: Vertical Social Bar */}
      <div className="hero-social-sidebar">
        <a
          href="https://www.linkedin.com/in/muhammad-ansif-627b85375/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-btn"
          title="LinkedIn Profile"
          aria-label="LinkedIn"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>

        <a
          href="https://github.com/kichu70?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-btn"
          title="GitHub Repositories"
          aria-label="GitHub"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
        </a>

        <a
          href="https://wa.me/917034998709?text=Hi%20Ansif,%20I%20visited%20your%20portfolio!"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-btn"
          title="Chat on WhatsApp"
          aria-label="WhatsApp"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>

        <a
          href="mailto:kiichu7034@gmail.com"
          className="social-icon-btn"
          title="Send Email"
          aria-label="Email"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </a>
      </div>

      {/* Bottom Right: Clean Resume Link */}
      <div className="hero-resume-bottom">
        <a
          href="/muhammad-ansif.pdf"
          download
          className="resume-minimal-btn"
        >
          RESUME ↗
        </a>
      </div>
    </section>
  );
}
