"use client";
import React from "react";
import { useRouter } from "next/navigation";
import AboutSpotlightImage from "@/components/AboutSpotlightImage";

export default function AboutSection() {
  const router = useRouter();

  return (
    <section id="about-me" className="about-section">
      <div className="about-grid">
        <div className="about-visual">
          <AboutSpotlightImage
            radius={60}
            alt="Muhammad Ansif"
          />
        </div>

        <div className="about-content">
          <span className="tag-label">About Me</span>
          <h3>Muhammad Ansif</h3>
          <p>
            Adaptive Full Stack Software Engineer with production experience across Ruby on Rails and the MERN/Next.js ecosystem. Currently engineering scalable features and database architecture for <strong>Buildose.com</strong> (B2B2C marketplace) at UL Cyberpark. Experienced in multi-role workflows, eliminating N+1 database queries, real-time WebSockets, and shipping high-performance, responsive web solutions.
          </p>

          <div className="skill-list">
            <div className="skill-item">
              <div className="skill-row">
                <span>Ruby on Rails / PostgreSQL</span>
                <span>90%</span>
              </div>
              <div className="track-bg">
                <div className="track-progress" style={{ width: "90%" }} />
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-row">
                <span>React.js / Next.js</span>
                <span>95%</span>
              </div>
              <div className="track-bg">
                <div className="track-progress" style={{ width: "95%" }} />
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-row">
                <span>Node.js / Express / WebSockets</span>
                <span>88%</span>
              </div>
              <div className="track-bg">
                <div className="track-progress" style={{ width: "88%" }} />
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-row">
                <span>Hotwire (Turbo &amp; Stimulus) / Tailwind CSS</span>
                <span>92%</span>
              </div>
              <div className="track-bg">
                <div className="track-progress" style={{ width: "92%" }} />
              </div>
            </div>
          </div>

          <div className="about-cta-row">
            <button onClick={() => router.push("/contact")} className="btn-purple-solid">
              Hire Me
            </button>
            <button onClick={() => router.push("/contact")} className="btn-purple-outline">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
