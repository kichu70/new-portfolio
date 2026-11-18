import React from "react";

export default function FooterSection() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "16px" }}>
          Muhammad Ansif &bull; Full Stack Software Engineer
        </p>
        <p>
          Email: <a href="mailto:kiichu7034@gmail.com">kiichu7034@gmail.com</a> &bull; Phone: <a href="tel:+917034998709">+91 7034998709</a>
        </p>
        <p style={{ fontSize: "13px", opacity: 0.65 }}>
          &copy; {new Date().getFullYear()} Muhammad Ansif. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
