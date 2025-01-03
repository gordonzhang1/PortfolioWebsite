import React from "react";
import "../Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-content">
          Designed with{" "}
          <a href="https://www.figma.com/" style={{ color: "blue" }}>
            Figma
          </a>
          , Built with{" "}
          <a href="https://react.dev" style={{ color: "blue" }}>
            React
          </a>
          , Deployed with{" "}
          <a href="https://vercel.com" style={{ color: "blue" }}>
            Vercel
          </a>
        </div>
        <div className="copyright">
          © 2024 Gordon Zhang. All rights reserved.{" "}
        </div>
      </div>
    </>
  );
}
