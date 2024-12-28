import React from "react";
import "../Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-content">
          Designed with <a href="https://www.figma.com/">Figma</a>, Built with{" "}
          <a href="https://react.dev">React</a>, Deployed with{" "}
          <a href="https://vercel.com">Vercel</a>
        </div>
        <div className="copyright">
          © 2024 Gordon Zhang. All rights reserved.{" "}
        </div>
      </div>
    </>
  );
}
