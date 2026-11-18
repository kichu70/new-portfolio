"use client";
import React, { useState } from "react";
import "./navbar.css";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleHomeClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      toast.success("Welcome back to top", { duration: 1800 });
    } else {
      router.push("/");
    }
    setIsOpen(false);
  };

  const scrollTo = (hash: string) => {
    setIsOpen(false);
    if (pathname !== "/") {
      router.push(`/${hash}`);
      return;
    }
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${hash}`);
    }
  };

  return (
    <nav className="navbar">
      {/* Brand logo in reference style */}
      <button className="nav-brand" onClick={handleHomeClick} aria-label="Home">
        <span className="nav-brand-text">
          An<span>is</span>f
        </span>
      </button>

      {/* Nav Menu */}
      <div className="nav-links">
        <button className="nav-link" onClick={() => scrollTo("#about-me")}>
          About
        </button>
        <button className="nav-link" onClick={() => scrollTo("#projects")}>
          Projects
        </button>
        <button className="nav-link" onClick={() => scrollTo("#education")}>
          Experience
        </button>
        <button className="nav-link" onClick={() => router.push("/contact")}>
          Contact
        </button>
        <a
          href="/muhammad-ansif.pdf"
          download
          className="nav-link nav-cta"
        >
          Resume ↗
        </a>
      </div>

      {/* Mobile Toggle */}
      <button
        className="mobile-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Navigation Menu"
      >
        <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isOpen ? "open" : ""}`}>
        <button className="nav-link" onClick={() => scrollTo("#about-me")}>
          About
        </button>
        <button className="nav-link" onClick={() => scrollTo("#projects")}>
          Projects
        </button>
        <button className="nav-link" onClick={() => scrollTo("#education")}>
          Experience
        </button>
        <button className="nav-link" onClick={() => { setIsOpen(false); router.push("/contact"); }}>
          Contact
        </button>
        <a
          href="/muhammad-ansif.pdf"
          download
          className="nav-link nav-cta"
          onClick={() => setIsOpen(false)}
        >
          Resume ↗
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
