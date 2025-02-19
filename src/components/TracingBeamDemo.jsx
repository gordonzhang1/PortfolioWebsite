"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div
        className="max-w-2xl mx-auto antialiased pt-4 relative"
        style={{ fontFamily: "Space Grotesk" }}
      >
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <p className={twMerge("font-sans text-xl mb-1")}>{item.title}</p>
            <div className="text-sm text-gray-600 mb-4">{item.subtitle}</div>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Fullstack Developer",
    subtitle: "Blndspt | Sept 2024 - Present",
    description: (
      <>
        <ul className="list-disc ml-5">
          <li>
            Directed development team through app life cycle using Typescript,
            React, and Node.js to prioritize scalability, resulting in a 284%
            increase in user traffic
          </li>
          <li>
            Enhanced checkout security by developing and integrating RESTful
            APIs and Stripe APIs webhooks with Express and Node.js, resulting in
            a 49% reduction in checkout errors
          </li>
          <li>
            Delivered 20+ client requested features by collaborating with
            stakeholders, deploying prototype to production in 6 weeks
          </li>
          <li>
            Programmed cart, checkout, and order systems with React to optimize
            transaction flow, reducing checkout time by 46%
          </li>
        </ul>
      </>
    ),
    badge: "React",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Firmware Developer",
    subtitle: "UW Formula Electric | Sept 2024 - Feb 2025",
    description: (
      <>
        <ul className="list-disc ml-5">
          <li>
            Programmed CLI command in C to control an inverter and send CAN
            message to modify inverter EEPROM parameters
          </li>
          <li>
            Engineered a cooling control algorithm for a PDU, dynamically
            controlling fan operation based on temperature thresholds
          </li>
        </ul>
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Frontend Developer",
    subtitle: "Artex Coding Society | Jan 2023 - May 2024",
    description: (
      <>
        <ul className="list-disc ml-5">
          <li>
            Co-founded a global non-profit providing free coding lessons to 900
            students across 4 countries by leading curriculum design
          </li>
          <li>
            Developed a web portal using React to track student progress,
            reducing administrative workload by 42%
          </li>
          <li>
            Improved responsiveness and optimized DOM rendering using HTML, CSS,
            and JavaScript, increasing site traffic by 30%
          </li>
          <li>
            Revamped outdated lesson plan repository, implementing Git best
            practices to improve maintainability for 25+ contributors
          </li>
          <li>
            Designed 55 RESTful API and React puzzles in JavaScript, leading to
            a 212% increase in student completion rates
          </li>
          <li>
            Managed end-to-end lifecycle of 15 web features, from planning and
            development to deployment, ensuring timely delivery
          </li>
        </ul>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Web Development Instructor",
    subtitle: "StudyPug | Mar 2023 - Apr 2023",
    description: (
      <>
        <ul className="list-disc ml-5">
          <li>
            Delivered hands-on instruction in HTML, CSS, and Javascript to high
            school students
          </li>
          <li>
            Guided students in building dynamic web pages by creating
            personalized coding exercises and providing one-on-one support in
            using React, Node.js, Git, and GitHub. Demonstrated effective
            development workflows and collaborative coding practices.
          </li>
          <li>
            Designed and led interactive coding challenges to teach advanced
            topics such as DOM manipulation, event handling, object-oriented
            programming principles, and Webpack configuration, ensuring students
            could apply these concepts in practical projects.
          </li>
        </ul>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
