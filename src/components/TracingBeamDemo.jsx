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
    subtitle: "BLNDSPT | Oct 2024 - Present",
    description: (
      <>
        <ul className="list-disc ml-5">
          <li>
            Developed and designed user-friendly e-Commerce web app with React &
            Node.js, delivering 20+ client requested features and boosting brand
            recognition by 300%
          </li>
          <li>
            Optimized check out page by integrating a time-sensitive discount
            algorithm with Python boosting customer purchases by 23%
          </li>
          <li>
            Engineered RESTful APIs using Express.js for secure OAuth system
            with Firebase for easy email login and signup
          </li>
          <li>
            Enhanced checkout security by integrating Stripe API's webhooks with
            Node.js, reducing checkout errors by 12%
          </li>
          <li>
            Programmed cart, checkout, and order systems with React to optimize
            transaction flow, increasing conversion rates by 38%
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
    subtitle: "UW Formula Electric | Sept 2024 - Present",
    description: (
      <>
        <ul className="list-disc ml-5">
          <li>
            Programmed CLI command in C to control an inverter and send CAN
            message to modify inverter EEPROM parameters
          </li>
        </ul>
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Software Curriculum Developer & Associate Founder",
    subtitle: "ARTex Coding Society | Jan 2023 - May 2024",
    description: (
      <>
        <ul className="list-disc ml-5">
          <li>
            Co-founded a global non-profit providing free coding lessons to 900
            students across 4 countries by leading curriculum design
          </li>
          <li>
            Programmed 50 coding puzzles in JavaScript and 32 RESTful API
            exercises, increasing classroom engagement by 32%
          </li>
          <li>
            Spearheaded curriculum development by developing 10 week-long
            lessons in Javascript, Java and Python for 80 teachers
          </li>
          <li>
            Developed 32 RESTful API exercises to prepare students and assisth
            them with making a food delivery web app
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
            Delivered hands-on instruction in HTML, CSS, and Javascript to 12
            high school students
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
