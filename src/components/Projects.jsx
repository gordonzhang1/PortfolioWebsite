import "../Projects.css";
import loo from "../assets/loolooloonew.png";
import js from "../assets/jsnew.png";
import ts from "../assets/tsnewnew.png";
import c from "../assets/cnew.png";
import cplus from "../assets/cplusnew.png";
import python from "../assets/pythonnew.png";
import html from "../assets/htmlnew.png";
import css from "../assets/cssnew.png";
import java from "../assets/javanew.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import docker from "../assets/docker.png";
import git from "../assets/git.png";
import webpack from "../assets/webpack.png";
import tailwind from "../assets/tailwind.png";
import firebase from "../assets/firebase.png";
import openai from "../assets/OpenAI.png";
import cloud from "../assets/cloud.png";
import YAML from "../assets/YAML.png";
import sa from "../assets/sa-cover.jpeg";
import portfolio from "../assets/portfolio.png";
import firestore from "../assets/firestore.png";
import postman from "../assets/postman.png";
import github from "../assets/github.png";

export default function Projects() {
  function handleshake() {
    window.open("https://github.com/gordonzhang1/ShakespeareAI");
  }

  return (
    <div className="projects">
      <h1 className="projects-header">Projects</h1>
      <div className="card-container">
        <div className="header-desc">
          <div className="box-header">
            <a href="https://shakespeareai.ca">
              <h2>ShakespeareAI</h2>
            </a>
            <img
              onClick={handleshake}
              className="github"
              src={github}
              style={{
                cursor: "pointer",
              }}
            />
          </div>
          <div className="sa-demo">
            <a
              href="https://www.youtube.com/watch?v=lmbQf5aHT-o"
              target="blank"
            >
              <strong>Demo Video</strong>
            </a>
          </div>
          <p>
            ShakespeareAI is a AI digital note-taking web app that quizzes you
            based on your handwritten notes in real-time. Press Quiz Me, and
            ShakespeareAI transforms your notes and drawings into a personalized
            set of questions, helping you retain information more effectively.
            Built with React & Node.js, the app features a user-friendly
            note-taking interface, and securely stores them to your account. Try
            it for yourself by signing up now!
          </p>

          <div className="loo-skills">
            <img className="loo-skill-item" src={js} title="JavaScript" />
            <img className="loo-skill-item" src={html} title="HTML" />
            <img className="loo-skill-item" src={css} title="CSS" />
            <img className="loo-skill-item" src={react} title="React" />
            <img className="loo-skill-item" src={git} title="Git" />
            <img className="loo-skill-item" src={node} title="Node.js" />
            <img className="loo-skill-item" src={firebase} title="Firebase" />
            <img className="loo-skill-item" src={firestore} title="Firestore" />
            <img className="loo-skill-item" src={cplus} title="C++" />
            <img className="loo-skill-item" src={openai} title="OpenAI API" />
            <img
              className="loo-skill-item"
              src={cloud}
              title="Cloud Vision API"
            />
            <img className="loo-skill-item" src={postman} title="Postman" />
          </div>
        </div>
        <img className="loo sa" src={sa} />
      </div>
      <div className="card-container">
        <div className="header-desc">
          <div className="box-header">
            <h2>LooLooLoo | Hack the North Winner</h2>
            <img
              onClick={() => {
                window.open("https://github.com/gordonzhang1/LooLooLoo1");
              }}
              className="github loo"
              src={github}
              style={{
                cursor: "pointer",
              }}
            />
          </div>
          <div className="sa-demo">
            <a
              href="https://www.youtube.com/watch?v=z4kfvKR1sek"
              target="blank"
            >
              <strong>Demo Video</strong>
            </a>
          </div>
          <div className="desc-container">
            <p>Water Water Water, Loo Loo Loo!</p>
            <p>
              LooLooLoo is a indoor mapping web app that directs you to the
              nearest washroom when you drink from a water fountain. When you
              drink from a water fountain, an ESP32 microcontroller detects the
              bluetooth signal from your phone, and using Twilio, sends an SMS
              containing a custom link. This link directs you to the LooLooLoo
              web app, featuring an interactive 3D map that guides you from your
              exact location to the nearest washroom in the building.
            </p>
          </div>

          <div className="loo-skills">
            <img className="loo-skill-item" src={js} title="JavaScript" />
            <img className="loo-skill-item" src={ts} title="TypeScript" />
            <img className="loo-skill-item" src={html} title="HTML" />
            <img className="loo-skill-item" src={css} title="CSS" />
            <img className="loo-skill-item" src={react} title="React" />
            <img className="loo-skill-item" src={docker} title="Docker" />
            <img className="loo-skill-item" src={git} title="Git" />
            <img className="loo-skill-item" src={node} title="Node.js" />
            <img className="loo-skill-item" src={YAML} title="YAML" />
          </div>
        </div>
        <img className="loo" src={loo} />
      </div>

      <div className="card-container">
        <div className="header-desc">
          <div className="box-header portfolio">
            <h2>Personal Portfolio</h2>
            <img
              onClick={() => {
                window.open(
                  "https://github.com/gordonzhang1/personal-portfolio"
                );
              }}
              className="github portfolio"
              src={github}
              style={{
                cursor: "pointer",
              }}
            />
          </div>
          <p>My Portfolio Project</p>
          <div className="loo-skills">
            <img className="loo-skill-item" src={js} />
            <img className="loo-skill-item" src={html} />
            <img className="loo-skill-item" src={css} />
            <img className="loo-skill-item" src={react} />
            <img className="loo-skill-item" src={git} />
          </div>
        </div>
      </div>
    </div>
  );
}
