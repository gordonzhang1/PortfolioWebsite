"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Linkedin from "../assets/linkedin.png";
import Github from "../assets/github.png";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
      style={{ fontFamily: "space grotesk" }}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Navigation">
          <div className="flex flex-col space-y-4 text-sm">
            <a href="#" className="hover:text-black dark:hover:text-blue-500">
              Home
            </a>
            <a
              href="#about"
              className="hover:text-black dark:hover:text-blue-500"
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-black dark:hover:text-blue-500"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="hover:text-black dark:hover:text-blue-500"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-black dark:hover:text-blue-500"
            >
              Projects
            </a>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Social">
          <div className="flex flex-col space-y-4 text-sm flex-col items-start">
            <a
              href="https://github.com/gordonzhang1"
              className="hover:text-black dark:hover:text-blue-500 flex justify-center items-center gap-1"
              target="blank"
            >
              <img src={Github} style={{ width: "15px", height: "15px" }} />
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/gordonzhang1/"
              className="hover:text-black dark:hover:text-blue-500 flex justify-center items-center gap-1"
              target="blank"
            >
              <img src={Linkedin} style={{ width: "15px", height: "15px" }} />
              Linkedin
            </a>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
