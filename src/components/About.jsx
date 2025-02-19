import circle from "../assets/circle.png";
import "../About.css";
import { ThreeDCardDemo } from "./ThreeDCard";
import { ThreeDCardDemo1 } from "./ThreeDCard1";
import { ThreeDCardDemo2 } from "./ThreeDCard2";

export default function About() {
  return (
    <>
      <div className="about-container-large">
        <div className="about-container">
          <h1
            style={{
              fontSize: "4em",
              fontWeight: "900",
              fontFamily: "sans-serif",
            }}
          >
            About Me
          </h1>
        </div>

        <div className="description-container">
          <div
            style={{
              width: "100%",
              height: 0,
              paddingBottom: "15%",
              position: "relative",
            }}
          >
            <iframe
              src="https://giphy.com/embed/3o7qE1YN7aBOFPRw8E"
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
            ></iframe>
          </div>
          <div class="description">
            Hi! I’m Gordon Zhang, a full-stack developer with a strong interest
            in machine learning, UI/UX design, and cloud computing. I'm
            passionate about creating scalable, efficient solutions that address
            real-world challenges and optimize user experiences. Originally from
            Vancouver, BC, I’m now based in Waterloo, ON, hoping to make an
            impact by developing world changing technologies.
          </div>
        </div>
        <div className="education">
          <h2 style={{ fontSize: "1em", fontWeight: "800" }}>Education</h2>
          <div>
            University of Waterloo, Candidate for BASc in Computer Engineering,
            Honours, Co-op
          </div>
        </div>
        <div className="education">
          <h2 style={{ fontSize: "1em", fontWeight: "800" }}>Awards</h2>
          <div>
            DeltaHacks 1st Place Overall • Hack the North Winner • GeeseHacks
            Winner
          </div>
        </div>
        <div className="threed-card-con">
          <ThreeDCardDemo />
          <ThreeDCardDemo1 />
        </div>
      </div>
    </>
  );
}
