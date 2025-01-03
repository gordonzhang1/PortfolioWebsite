import React from "react";
import { Chrono } from "react-chrono";
import "../Experience.css";
import { TracingBeamDemo } from "./TracingBeamDemo";

export default function Experience() {
  return (
    <div className="timeline">
      <h1
        style={{
          fontSize: "4em",
          fontWeight: "900",
          fontFamily: "Space Grotesk",
          wordWrap: "break-word",
        }}
        className="experienceheader"
      >
        Experience
      </h1>

      <TracingBeamDemo />
    </div>
  );
}
